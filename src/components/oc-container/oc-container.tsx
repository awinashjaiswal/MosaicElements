import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'oc-container',
  styleUrl: 'oc-container.css',
  shadow: true,
})

export class OcContainer {
  @Prop() backgroundImage: string;
  @Prop() parallax: boolean = false;

  render() {
    const containerClasses = {
      'relative flex ': true,
      'bg-fixed bg-cover bg-center': this.parallax,
      'bg-no-repeat': !this.parallax,
    };

    return (
      <div
        class={containerClasses}
        style={{
          backgroundImage: `url(${this.backgroundImage})`,
          backgroundSize: this.parallax ? 'cover' : 'contain', // Change 'contain' to 'cover' for parallax
          backgroundAttachment: this.parallax ? 'fixed' : 'scroll',
         
          height: '100vh', // Ensures the container takes full viewport height
        }}
      >
        <div class="w-full">
          <slot></slot>
        </div>
      </div>
    );
  }
}


