import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'oc-html-editor',
  styleUrl: 'oc-html-editor.css'
})

export class OcHtmlEditor {
  @Element() el: HTMLElement;
  @State() htmlContent: string = ''; // Stores the inner HTML content

  // Method to execute formatting commands like bold, italic, etc.
  format(command: string) {
    document.execCommand(command, false, null);
    this.updateHtmlContent(); // Update the content state
  }

  // Method to clear formatting
  clearFormatting() {
    document.execCommand('removeFormat', false, null);
    this.updateHtmlContent(); // Update content state
  }

  // Function to safely get the content of the editor
  updateHtmlContent() {
    const editor = this.el.shadowRoot.querySelector('.editor');
    if (editor) {
      this.htmlContent = editor.innerHTML;
    }
  }

  // This method is called after the component has rendered
  componentDidLoad() {
    // Initialize the content when the component is loaded
    this.updateHtmlContent();
  }

  render() {
    return (
      <div class="html-editor p-4">
        {/* Toolbar */}
        <div class="toolbar mb-4 flex space-x-2">
          <button
            class="btn bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 rounded"
            onClick={() => this.format('bold')}
          >
            Bold
          </button>
          <button
            class="btn bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 rounded"
            onClick={() => this.format('italic')}
          >
            Italic
          </button>
          <button
            class="btn bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 rounded"
            onClick={() => this.format('underline')}
          >
            Underline
          </button>
          <button
            class="btn bg-red-300 hover:bg-red-400 text-black font-bold py-1 px-2 rounded"
            onClick={() => this.clearFormatting()}
          >
            Clear Formatting
          </button>
        </div>

        {/* Editable Area */}
        <div
          class="editor border border-gray-400 p-4 h-48 overflow-auto"
          contentEditable={true}
          onInput={() => this.updateHtmlContent()}
        >
          Start editing...
        </div>

        {/* Rendered HTML Content */}
        <div class="output mt-4 p-4 bg-gray-100 border border-gray-300">
          <h3 class="text-lg font-semibold mb-2">Rendered HTML:</h3>
          <div innerHTML={this.htmlContent}></div>
        </div>
      </div>
    );
  }
}
