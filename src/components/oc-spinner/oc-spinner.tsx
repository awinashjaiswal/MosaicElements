import { Component, h } from '@stencil/core';

@Component({
  tag: 'oc-spinner',
  styleUrl: 'oc-spinner.css',
  shadow: true,
})
export class OcSpinner {
  render() {
    return (
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    );
  }
}
