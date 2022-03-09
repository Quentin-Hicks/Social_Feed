import React, { useState } from 'react';
import './Buttons.css'

const Buttons = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive')
    const [buttonClassDislike, setButtonClassDislike] = useState('inactive')
    function handleClick(){
        //TODO: Change/toggle between active & inactive css class
        if(buttonClass === 'inactive'){
            setButtonClass('active')
            setButtonClassDislike('inactive')
        }
        else {
            setButtonClass('inactive')
        }
    }

    function handleClickDislike(){
        
    }

    return (
        <div>
            <button className={buttonClass} onClick={handleClick}>like</button>
            <button className={buttonClassDislike} onClick={handleClickDislike}>dislike</button>
        </div>
    )
}

export default Buttons