/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconSingleCheck } from '@siemens/ix-icons/icons';
import {
  AttachInternals,
  Component,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { makeRef } from '../utils/make-ref';
import { IxFormComponent } from '../utils/field';

@Component({
  tag: 'ix-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
  formAssociated: true,
})
export class Checkbox implements IxFormComponent<string> {
  @AttachInternals() formInternals: ElementInternals;

  /**
   * Name of the checkbox component
   */
  @Prop({ reflect: true }) name?: string;

  /**
   * Value of the checkbox component
   */
  @Prop({ reflect: true }) value?: string;

  /**
   * Label for the checkbox component
   */
  @Prop() label: string;

  /**
   * Checked state of the checkbox component
   */
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  /**
   * Event emitted when the checked state of the checkbox changes
   */
  @Event() checkedChange!: EventEmitter<boolean>;

  /**
   * Event emitted when the value of the checkbox changes
   */
  @Event() valueChange!: EventEmitter<string>;

  private inputRef = makeRef<HTMLInputElement>((checkboxRef) => {
    checkboxRef.checked = this.checked;
  });

  private setCheckedState(newChecked: boolean) {
    const result = this.checkedChange.emit(newChecked);
    if (result.defaultPrevented) {
      return;
    }

    this.checked = newChecked;
  }

  @Watch('checked')
  onCheckedChange() {
    const checkboxRef = this.inputRef.current;
    checkboxRef.checked = this.checked;

    this.updateFormInternalValue();
  }

  @Watch('value')
  onValueChange() {
    this.valueChange.emit(this.value);
  }

  componentWillLoad() {
    this.updateFormInternalValue();
  }

  updateFormInternalValue() {
    if (this.checked) {
      this.formInternals.setFormValue(this.value);
    } else {
      this.formInternals.setFormValue(undefined);
    }
  }

  render() {
    return (
      <Host>
        <label>
          <input
            ref={this.inputRef}
            type="checkbox"
            onChange={() => {
              const ref = this.inputRef.current;
              this.setCheckedState(ref.checked);
            }}
          />
          <button
            class={{
              checked: this.checked,
            }}
            onClick={() => this.setCheckedState(!this.checked)}
          >
            {this.checked && <ix-icon name={iconSingleCheck}></ix-icon>}
          </button>
          {this.label}
          <slot></slot>
        </label>
      </Host>
    );
  }
}
