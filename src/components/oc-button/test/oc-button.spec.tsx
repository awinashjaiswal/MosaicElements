import { newSpecPage } from '@stencil/core/testing';
import { OcButton } from '../oc-button';

describe('oc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OcButton],
      html: `<oc-button></oc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <oc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </oc-button>
    `);
  });
});
