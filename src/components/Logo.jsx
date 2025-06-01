import React from 'react'
import myImage from '../assets/logo.png'
function Logo({width = '100px'}) {
    return (
        <div>
            <img src = {myImage} width= "180px"/>
        </div>
    )
}

export default Logo
