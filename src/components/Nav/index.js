import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">

            {/* Company Name */}
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>

            {/* Navigation Links */}
            <nav>
                <ul className="flex-row">

                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About me
                        </a>
                    </li>

                    <li className="mx-2">
                        <span>Contact</span>
                    </li>

                    {/* as we go through the categories array, we are naming each individual item 'category' */}
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                            }`}
                            key={category.name}
                        >
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