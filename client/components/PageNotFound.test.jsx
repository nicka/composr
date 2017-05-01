import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('renders the component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
