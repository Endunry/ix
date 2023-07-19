/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <ix-form-field>
            <label htmlFor="demo">Example</label>
            <input type={'text'} name="demo" />
          </ix-form-field>
        </form>
      </Host>
    );
  }
}
