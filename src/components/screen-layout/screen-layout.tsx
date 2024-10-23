import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'screen-layout',
  styleUrl: 'screen-layout.css',
  shadow: true,
})
export class ScreenLayout {
  render() {
    return (
      <Host>
         <div class="min-w-full flex-shrink-0 bg-blue-500 h-64 flex items-center justify-center text-white text-xl font-bold">
          Slide 1
        </div>
      </Host>
    );
  }
}
