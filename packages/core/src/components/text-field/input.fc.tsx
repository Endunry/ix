/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h } from '@stencil/core';

export function InputElement(props: {
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  pattern: string;
  type: string;
  isInvalid: boolean;
  required: boolean;
  value: string;
  placeholder: string;
  inputRef: (el: HTMLInputElement) => void;
  onKeyPress: (event: KeyboardEvent) => void;
  valueChange: (value: string) => void;
  updateFormInternalValue: (value: string) => void;
  onBlur: () => void;
}) {
  return (
    <input
      min={props.min}
      max={props.max}
      maxLength={props.maxLength}
      minLength={props.minLength}
      ref={props.inputRef}
      pattern={props.pattern}
      type={props.type}
      class={{
        'is-invalid': props.isInvalid,
      }}
      required={props.required}
      value={props.value}
      placeholder={props.placeholder}
      onKeyPress={(event) => props.onKeyPress(event)}
      onChange={(changeEvent) => {
        const target = changeEvent.target as HTMLInputElement;
        props.valueChange(target.value);
      }}
      onInput={(inputEvent) => {
        const target = inputEvent.target as HTMLInputElement;
        props.updateFormInternalValue(target.value);
      }}
      onBlur={() => props.onBlur()}
    ></input>
  );
}
