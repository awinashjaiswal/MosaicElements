import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'oc-input',
  styleUrl: 'oc-input.css',
  shadow: true,
})





export class OcInput {
  @Prop() label: string;
  @Prop() placeholder: string = '';
  @Prop() value: string = '';
  @Prop() type: string = 'text'; // Default type is text
  @Event() valueChanged: EventEmitter<string>;

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChanged.emit(this.value);
  }

  render() {
    return (
      <div class="flex flex-col mb-4">
        {this.label && <label class="mb-1 text-gray-700">{this.label}</label>}
        <input
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          onInput={(event) => this.handleInputChange(event)}
          class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    );
  }
}

