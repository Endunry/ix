/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { EventEmitter } from '@stencil/core';
import { IxComponent } from '../internal';

export * from './field-mapping';

export interface HelperText {
  label: string;
  helperText: string;
  errorText: string;
}

/*
TODO
Missing to expose all native input attributes
*/
export interface IxFieldComponent<T = any> extends IxComponent, HelperText {
  /**
   * Add `@Prop({ reflect: true })` to the `name` prop
   */
  name: string;

  /**
   * @Prop declaration to handle internal Attach element
   */
  placeholder: string;

  /**
   * @Prop declaration to handle internal Attach element
   */
  value: T;

  /**
   * @Prop declaration to handle internal Attach element
   */
  required: boolean;

  valueChanged: EventEmitter<T>;
  formInternals: ElementInternals;

  /**
   * @State declaration to handle internal Attach element
   */
  isInvalid: boolean;

  updateFormInternalValue(value: T): void;

  componentWillLoad(): void;
}
