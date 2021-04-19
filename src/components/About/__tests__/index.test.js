/*
We need react to enable the components to function properly
so we can test them.
*/
import React from 'react';

// import functions from testing library
import { render, cleanup } from '@testing-library/react';

//import the extend-expect library from the jest-dom package.
import '@testing-library/jest-dom/extend-expect';

//mport the component we will be testing, which is the About
//   component. Add the following code to the test file:
// move one back --> index.js where function About exist
import About from '..';


//call the cleanup function using the afterEach global function from Jest:
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);


//escribe function to declare the component we're testing
describe('About component', () => {
    // First Test
    // verify that the component is rendering
    it('rende6rs', () => {
      render(<About />);
    });
  
    // Second Test
    //In the next statement, we'll test and compare whether the
    // expected and actual outcomes match
    /*
    Use the expect function with a matcher to assert something 
    about a value. In the following statement, we'll use the
    toMatchSnapshot matcher to assert that snapshots will match:
    */
    it('matches snapshot DOM node structure', () => {
        // render About.
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
    
  })

