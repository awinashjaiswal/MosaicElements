import { newE2EPage } from '@stencil/core/testing';

describe('oc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<oc-input></oc-input>');

    const element = await page.find('oc-input');
    expect(element).toHaveClass('hydrated');
  });
});
