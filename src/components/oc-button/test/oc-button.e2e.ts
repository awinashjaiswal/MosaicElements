import { newE2EPage } from '@stencil/core/testing';

describe('oc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<oc-button></oc-button>');

    const element = await page.find('oc-button');
    expect(element).toHaveClass('hydrated');
  });
});
