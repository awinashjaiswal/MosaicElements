import { Component, Event, EventEmitter, Prop, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'oc-button',
  styleUrl: 'oc-button.css',
  shadow: false
})

export class OcButton {
  @Prop() label: string = 'Button';  // Default button label
  @Prop() variant: 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link' = 'solid';  // Button variants
  @Prop() shape: 'round' | 'circle' | 'default' = 'default'; // Shape options
  @Prop() size: 'small' | 'medium' | 'large' = 'medium'; // Size options

  @Event() onClick: EventEmitter<void>;  // Event for button click

  @Element() el: HTMLElement;  // Reference to the component's element

  get hostClasses() {
    return this.el.className;
  }
  // Map variant to respective class name
  private getButtonClasses() {
    const variantClassMap = {
      outlined: 'btn-outline',
      dashed: 'btn-dashed',
      solid: 'btn-solid',
      filled: 'btn-filled',
      text: 'btn-text',
      link: 'btn-link'
    };

    const shapeClassMap = {
      default: '',         // No special shape class for default
      round: 'btn-round',  // Round shape class
      circle: 'btn-circle' // Circle shape class
    };

    const sizeClassMap = {
      small: 'btn-small',
      medium: 'btn-medium',
      large: 'btn-large'
    };


    return `btn ${variantClassMap[this.variant]} ${shapeClassMap[this.shape]} ${sizeClassMap[this.size]}`;
  }

  // Handle ripple effect within the shadow DOM
  private handleClick(event: MouseEvent) {
    const button = this.el.shadowRoot.querySelector('button');

    if (!button) return;

    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    // Calculate position and size of the ripple
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Add the ripple to the button
    button.appendChild(ripple);

    // Remove the ripple after animation ends
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

    // Emit the click event
    this.onClick.emit();
  }

  render() {
    return (
      <Host>
        <button class={this.getButtonClasses()+ '' + this.hostClasses} onClick={(event) => this.handleClick(event)}>
          <slot name="start-icon"></slot> {/* Slot for adding start icon */}
            {this.shape !== 'circle' && <span>{this.label}</span>} {/* Show label unless it's a circle button */}
          <slot name="end-icon"></slot> {/* Slot for adding end icon */}
        </button>
      </Host>
    );
  }
}
