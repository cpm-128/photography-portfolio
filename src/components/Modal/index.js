// child of PhotoList so that the modal can open
// modal must close at the child (here)

import React from 'react';

// currentPhoto is defined in PhotoList
// pass the onClose as a prop from the PhotoList component
const Modal = ({ currentPhoto, onClose }) => {

    // deconstruct the prop that is currentPhoto
    const {name, category, description, index } = currentPhoto;

    return (
        // basic modal with a backdrop and container
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    )
};

export default Modal;