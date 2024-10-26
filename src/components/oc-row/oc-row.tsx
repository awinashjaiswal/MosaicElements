import { Component, h } from '@stencil/core';

@Component({
  tag: 'oc-row',
  styleUrl: 'oc-row.css',
  shadow: false,
})
export class OcRow {
  render() {
    return (
      <div class="grid-container">
        <slot></slot>
      </div>
    );
  }
}

