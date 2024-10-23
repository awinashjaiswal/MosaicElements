import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'oc-header',
  styleUrl: 'oc-header.css',
  shadow: true,
})
export class OcHeader {
  @Element() el: HTMLElement;
  render() {
    return (
      <header class="bg-white shadow-md p-4">
        <div class="container mx-auto flex justify-between items-center">
          {/* Logo Slot */}
          <div class="logo text-xl font-bold text-gray-800">
            <slot name="logo"></slot>
          </div>

          {/* Navigation Links Slot */}
          <nav class="hidden md:flex space-x-6">
            <slot name="nav-links"></slot>

          </nav>

          {/* Buttons on the right */}
          <div class="hidden md:flex space-x-4">
            <slot name="right-buttons"></slot>
          </div>

          {/* Mobile Menu Button */}
          <div class="md:hidden">
            <button id="mobileMenuToggle" class="text-gray-800">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav id="mobileNav" class="md:hidden p-4 hidden bg-white shadow-md">
          <slot name="mobile-nav-links"></slot>
        </nav>
      </header>
    );
  }

  componentDidLoad() {
    const toggleButton = this.el.shadowRoot.querySelector('#mobileMenuToggle');
    const mobileNav = this.el.shadowRoot.querySelector('#mobileNav');

    toggleButton.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
}


