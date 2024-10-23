import { Component, h, State, Prop } from '@stencil/core';

@Component({
  tag: 'oc-img',
  styleUrl: 'oc-img.css',
  shadow: true,
})
export class OcImg {
  @Prop() src: string; // URL of the image to display
  @Prop() alt: string
  @Prop() width: string;
  @Prop() height: string;
  @State() isImageVisible: boolean = false; // Tracks if image is in view

  imageRef: HTMLImageElement;

  componentDidLoad() {
    // Set up an Intersection Observer to lazy load the image when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isImageVisible = true;
          }
        });
      },
      { rootMargin: '0px 0px 100px 0px', // Trigger when the image is 100px above the bottom of the screen
        threshold: 0} // Load image when it's close to view
    );
    
    // Observe the image element for when it comes into view
    if (this.imageRef) {
      observer.observe(this.imageRef);
    }
  }

  render() {
    return (
      <div class="image-viewer">
        {/* Always render the image but only apply the src when isImageVisible is true */}
        <div class="viewer-image">
          <img
            width={this.width}
            height={this.height}
            ref={el => (this.imageRef = el)}  // Always set the image ref
            src={this.isImageVisible ? this.src : ''} // Load the image source only when visible
            alt={this.alt}
          />
        </div>
        {/* Optionally show a loading spinner while the image is loading */}
        {!this.isImageVisible && (
          <div class="placeholder">Loading...</div>
        )}
      </div>
    );
  }
}


