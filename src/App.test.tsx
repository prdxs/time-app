import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('App component', () => {
  it('should render', () => {
    const { getByTestId } = render(<App />);
    const appEl = getByTestId('App');

    expect(appEl).toBeInTheDocument();
  });
});
