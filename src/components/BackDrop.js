import React from 'react'

const BackDrop = ({sidebarShow, toggleMenu}) => {
    return (
        sidebarShow && <div className="backdrop" onClick={toggleMenu}>
            </div>
    )
}

export default BackDrop
