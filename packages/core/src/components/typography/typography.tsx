/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';
import { VariantsMapping } from './type-mapping';

export type TypographyVariants =
  | 'x-small'
  | 'small'
  | 'caption'
  | 'caption-single'
  | 'default'
  | 'default-single'
  | 'default-title'
  | 'default-title-single'
  | 'large'
  | 'large-single'
  | 'large-title'
  | 'large-title-single'
  | 'h2'
  | 'display-large';

export type TypographyColors =
  | 'contrast'
  | 'std'
  | 'soft'
  | 'weak'
  | 'inv-contrast'
  | 'inv-std'
  | 'inv-soft'
  | 'inv-weak'
  | 'alarm';

type TypographyFormatLabel = 'label' | 'label-xs' | 'label-sm' | 'label-lg';
type TypographyFormatBody = 'body' | 'body-xs' | 'body-sm' | 'body-lg';
type TypographyFormatDisplay =
  | 'display'
  | 'display-xs'
  | 'display-sm'
  | 'display-lg'
  | 'display-xl'
  | 'display-xxl';
type TypographyFormatHeading = 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
export type TypographyFormat =
  | TypographyFormatLabel
  | TypographyFormatBody
  | TypographyFormatDisplay
  | TypographyFormatHeading;

export type TextDecoration = 'none' | 'underline' | 'line-through';

/**
 * @since 2.0.0
 */
@Component({
  tag: 'ix-typography',
  styleUrl: 'typography.scss',
  shadow: true,
})
export class IxTypography {
  /**
   * Font variant based on theme variables
   *
   * @deprecated Use `format` property
   * @internal
   */
  @Prop() variant: TypographyVariants;

  /**
   * Text format
   */
  @Prop() format: TypographyFormat;

  /**
   * Text color based on theme variables
   */
  @Prop() color: TypographyColors;

  /**
   * Text decoration
   */
  @Prop() textDecoration: TextDecoration = 'none';

  render() {
    let typographyClass = {};
    if (this.variant) {
      typographyClass[VariantsMapping[this.variant ?? 'default']] = true;
    } else {
      typographyClass[`typography-${this.format ?? 'body'}`] = true;
    }

    if (this.textDecoration !== 'none') {
      typographyClass[`text-decoration-${this.textDecoration}`] = true;
    }

    const fontColor =
      this.color !== undefined
        ? `var(--theme-color-${this.color}-text)`
        : 'inherit';

    return (
      <Host
        class={typographyClass}
        style={{
          color: fontColor,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
