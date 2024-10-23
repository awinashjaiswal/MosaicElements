import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'oc-column',
  styleUrl: 'oc-column.css',
  shadow: true,
})
export class OcColumn {
  @Prop() colSpan: string= '4' // Default to full-width

  render() {
    return (
      <Host class={`grid-column oc-col-span-${this.colSpan}`}>
        <slot></slot>
      </Host>
    );
  }
}
