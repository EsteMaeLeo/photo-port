import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('about component', () => {
  // First Test
    it('renders', () => {
        render(<About />)
    })
  
  // Second Test
    it('matches snapshot DOM node structure', () => {
        //render about
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})