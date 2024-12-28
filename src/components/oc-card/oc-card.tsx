import { Component, h } from '@stencil/core';

@Component({
  tag: 'oc-card',
  styleUrl: 'oc-card.css',
})
export class OcCard {
  render() {
    return (
      <div class="card">
        {/* Header Slot */}
        <div class="header">
          <slot name="header"></slot>
        </div>

        {/* Content Slot */}
        <div class="content">
          <slot name="content"></slot>
        </div>

        {/* Footer Slot */}
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    );
  }
}
