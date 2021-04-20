//import React, { useState } from "react";
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

// const [categories] = useState([
//   {
//     name: 'commercial',
//     description: 'Photos of grocery stores, food trucks, and other commercial projects',
//   },
//   { name: 'portraits', description: 'Portraits of people in my life' },
//   { name: 'food', description: 'Delicious delicacies' },
//   { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
// ]);

//const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // deconstructed props received from the parent


  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

    /*
      Notice in the preceding code block that the first
    argument is the callback function, and the second 
    argument is an array with a single element, currentCategory. 
    The second argument directs the hook to re-render the component
    on changes to the value of this state. In other words, if currentCategory 
    changes now, the component will re-render so that the change in document.title 
    will be visible to the user.
  */

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`} key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;