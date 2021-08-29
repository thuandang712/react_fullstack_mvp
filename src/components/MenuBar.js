import React from 'react'


const MenuBar = ({goHome}) => {
    
    const handleHome = () => {
        goHome()
    }


    return (
        <div className='menu-container'>
            <div className='menu'>
                <div className='home' onClick={handleHome}>Home</div>
                <div className='user'>User</div>
            </div>
        </div>
    )
}

export default MenuBar;
