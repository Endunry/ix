/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  Host,
  Method,
  Prop,
  State,
  h,
} from '@stencil/core';
import {
  ValidationResults,
  IxInputFieldComponent,
  HookValidationLifecycle,
} from '../utils/field';
import { makeRef } from '../utils/make-ref';
import { InputElement, PostfixSlot, PrefixSlot } from './input.fc';
import {
  applyPostfixPadding,
  checkAllowedKeys,
  checkInternalValidity,
  mapValidationResult,
  onInputBlur,
} from './text-field.util';
import { iconMinus, iconPlus } from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-number-field',
  styleUrl: 'number-field.scss',
  shadow: true,
  formAssociated: true,
})
export class NumberField implements IxInputFieldComponent<string> {
  @Element() hostElement: HTMLIxNumberFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * tbd
   */
  @Prop({ reflect: true }) name: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * tbd
   */
  @Prop({ reflect: true, mutable: true }) value: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) required: boolean;

  /**
   * tbd
   */
  @Prop() helperText: string;

  /**
   * tbd
   */
  @Prop() infoText?: string;

  /**
   * tbd
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * tbd
   */
  @Prop() showTextBehind?: boolean;

  /**
   * tbd
   */
  @Prop() validText?: string;

  /**
   * tbd
   */
  @Prop() warningText?: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) label: string;

  /**
   * tbd
   */
  @Prop() errorText: string;

  /**
   * tbd
   */
  @Prop() pattern?: string;

  /**
   * tbd
   */
  @Prop() min?: number;

  /**
   * tbd
   */
  @Prop() max?: number;

  /**
   * tbd
   */
  @Prop() allowedCharactersPattern?: string;

  /**
   * tbd
   */
  @Prop() showStepperButtons?: boolean;

  /**
   * tbd
   */
  @Event() valueChange: EventEmitter<string>;

  /**
   * Expose the validation state https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  @Event() validityStateChange: EventEmitter<ValidityState>;

  /**
   * tbd
   */
  @Event() ixBlur: EventEmitter<void>;

  @State() isInvalid = false;
  @State() isValid: boolean;
  @State() isInfo: boolean;
  @State() isWarning: boolean;
  @State() isInvalidByRequired: boolean;

  private inputRef = makeRef<HTMLInputElement>();
  private postfixRef = makeRef<HTMLDivElement>();
  private prefixRef = makeRef<HTMLDivElement>();

  @HookValidationLifecycle()
  updateClassMappings(result: ValidationResults) {
    mapValidationResult(this, result);
  }

  componentWillLoad() {
    this.updateFormInternalValue(this.value);
  }

  componentDidRender() {
    applyPostfixPadding(
      this.inputRef.current,
      this.prefixRef.current.getBoundingClientRect(),
      {
        postfix: false,
      }
    );

    applyPostfixPadding(
      this.inputRef.current,
      this.postfixRef.current.getBoundingClientRect(),
      {
        postfix: true,
      }
    );
  }

  updateFormInternalValue(value: string) {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  /** @internal */
  @Method()
  async getAssociatedFormElement(): Promise<HTMLFormElement> {
    return this.formInternals.form;
  }

  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(!!this.value);
  }

  render() {
    return (
      <Host>
        <ix-field-wrapper
          required={this.required}
          label={this.label}
          helperText={this.helperText}
          errorText={this.errorText}
          infoText={this.infoText}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          showTextBehind={this.showTextBehind}
        >
          <div
            class={{
              'input-wrapper': true,
              'show-stepper-buttons': this.showStepperButtons,
            }}
          >
            <PrefixSlot prefixRef={this.prefixRef}></PrefixSlot>
            <InputElement
              min={this.min}
              max={this.max}
              pattern={this.pattern}
              type={'number'}
              isInvalid={this.isInvalid}
              required={this.required}
              value={this.value}
              placeholder={this.placeholder}
              inputRef={this.inputRef}
              onKeyPress={(event) => checkAllowedKeys(this, event)}
              valueChange={(value) => this.valueChange.emit(value)}
              updateFormInternalValue={(value) =>
                this.updateFormInternalValue(value)
              }
              onBlur={() => onInputBlur(this, this.inputRef.current)}
            ></InputElement>
            <PostfixSlot postfixRef={this.postfixRef}>
              {this.showStepperButtons && (
                <div class="number-stepper-container">
                  <ix-icon-button
                    ghost
                    icon={iconMinus}
                    size="16"
                    class="number-stepper-button step-minus"
                    onClick={() => {
                      this.inputRef.current.stepDown();
                      checkInternalValidity(this, this.inputRef.current);
                    }}
                  ></ix-icon-button>
                  <ix-icon-button
                    ghost
                    icon={iconPlus}
                    size="16"
                    class="number-stepper-button step-plus"
                    onClick={() => {
                      this.inputRef.current.stepUp();
                      checkInternalValidity(this, this.inputRef.current);
                    }}
                  ></ix-icon-button>
                </div>
              )}
            </PostfixSlot>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
