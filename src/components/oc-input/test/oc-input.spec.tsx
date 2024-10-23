import { newSpecPage } from '@stencil/core/testing';
import { OcInput } from '../oc-input';

describe('oc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OcInput],
      html: `<oc-input></oc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <oc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </oc-input>
    `);
  });
});
