import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Faq from './Faq';

describe('Faq', () => {
  it('renders the component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Faq />
      </MemoryRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
