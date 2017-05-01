import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {
  it('renders the component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
