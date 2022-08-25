// child of PhotoList so that the modal can open

import React from 'react';

// currentPhoto is defined in PhotoList
function Modal({currentPhoto}) {

    // deconstruct the prop that is currentPhoto
    const {name, category, description, index } = currentPhoto;

    return (
        // basic modal with a backdrop and container
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button type="button">
                    Close this modal
                </button>
            </div>
        </div>
    )
};

export default Modal;