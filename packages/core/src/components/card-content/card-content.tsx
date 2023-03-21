import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-card-content',
  styleUrl: 'card-content.scss',
  shadow: true,
})
export class CardContent {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
