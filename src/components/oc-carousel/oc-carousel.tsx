

import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'oc-carousel',
  styleUrl: 'oc-carousel.css',
  shadow: true,
})

export class OcCarousel {
  @State() currentIndex: number = 0; // Track the current slide index
  @State() slides: any;
  @Element() el: HTMLElement;
  componentDidLoad() {
   this.slides =  this.el.children
   this.render()
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }


  render() {
    return (
      <div class="carousel-container">
        <div class="carousel-wrapper" style={{ transform: `translateX(-${this.currentIndex * 100}%)`}}>
          <slot></slot>
        </div>

        {/* Navigation controls */}
        <button class="prev" onClick={() => this.prevSlide()}>
          &#10094; {/* Left arrow */}
        </button>
        <button class="next" onClick={() => this.nextSlide()}>
          &#10095; {/* Right arrow */}
        </button>

        {/* Dots navigation */}
        <div class="dots">
          {this.slides && Array.from(this.slides).map((_, index) => (
            <span
              class={`dot ${index === this.currentIndex ? 'active' : ''}`}
              onClick={() => this.setSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}


