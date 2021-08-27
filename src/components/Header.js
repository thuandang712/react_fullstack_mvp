import React from 'react'

const Header = ({goHome}) => {
    const handleHome = () => {
        goHome()
    }

    return (
        <div className='menu-container'>
            <div className='home' onClick={handleHome}>Home</div>
        </div>
    )
}

export default Header;
