import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'oc-collapsible',
  styleUrl: 'oc-collapsible.css',
})
export class OcCollapsible {
  @State() isOpen: boolean = false; // Track whether the section is open
  @Prop() label: string = "Title"
  toggleSection() {
    this.isOpen = !this.isOpen; // Toggle the open/close state
  }

  render() {
    return (
      <div class="collapsible border border-gray-300 rounded-md shadow-md">
        {/* Toggle Button */}
        <button
          class="w-full text-left bg-gray-100 hover:bg-gray-200 p-4 rounded-t-md font-semibold flex justify-between items-center"
          onClick={() => this.toggleSection()}
        >
          <span>{this.label}</span>
          <svg
            class={`transition-transform duration-300 transform ${
              this.isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {/* Collapsible Content */}
        <div
          class={`transition-max-height duration-300 ease-in-out overflow-hidden ${
            this.isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div class="p-4 bg-white">
            <slot></slot> {/* Slot for dynamic content */}
          </div>
        </div>
      </div>
    );
  }
}

