import { Component, h, State, Prop, Host, Element } from '@stencil/core';

@Component({
  tag: 'oc-img',
  styleUrl: 'oc-img.css',
})
export class OcImg {
  @Prop() src: string; // URL of the image to display
  @Prop() alt: string
  @State() isImageVisible: boolean = false; // Tracks if image is in view
  @Element() el: HTMLElement;
  @State() style: string;
  imageRef: HTMLImageElement;
  private mutationObserver: MutationObserver;
  private intersectionObserver: IntersectionObserver

  componentDidLoad() {
    this.style = this.el.getAttribute('style') ;
    // Set up an Intersection Observer to lazy load the image when it comes into view
   this.intersectionObserver = new IntersectionObserver(
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

    this.mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          this.style = this.el.getAttribute('style') || "";
          // console.log('Host style changed:', newStyle);
          // Add your logic to handle style changes
        }
      });
    });

    this.mutationObserver.observe(this.el, {
      attributes: true, // Only watch for attribute changes
    });
    
    // Observe the image element for when it comes into view
    if (this.imageRef) {
      this.intersectionObserver.observe(this.imageRef);
      // Start observing the host element
      
    }

    
  }

  disconnectedCallback() {
    // Disconnect the observer to prevent memory leaks when the component is removed
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  render() {
    // const styles = this.el.getAttribute('style'); 
    return (
      <Host>
        {/* Always render the image but only apply the src when isImageVisible is true */}
        <div class="viewer-image">
          <img
            ref={el => (this.imageRef = el)}  // Always set the image ref
            src={this.isImageVisible ? this.src : ''} // Load the image source only when visible
            alt={this.alt}
            style={this.parseInlineStyles(this.style)}
          />
        </div>
        {/* Optionally show a loading spinner while the image is loading */}
        {!this.isImageVisible && (
          <div class="placeholder">Loading...</div>
        )}
      </Host>
    );
  }
  private parseInlineStyles(style: string | null): Record<string, string> {
    if (!style) return {};
    return style
      .split(';')
      .filter((rule) => rule.trim())
      .reduce((styles, rule) => {
        const [key, value] = rule.split(':');
        if (key && value) {
          styles[key.trim()] = value.trim();
        }
        return styles;
      }, {} as Record<string, string>);
  }
}


