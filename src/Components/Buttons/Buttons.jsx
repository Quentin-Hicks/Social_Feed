import React, { useState } from 'react';
import './Buttons.css'

const Buttons = (props) => {

    const [buttonClassLike, setButtonClassLike] = useState('inactive')
    const [buttonClassDislike, setButtonClassDislike] = useState('inactive')

    function handleClickLike(){
        //TODO: Change/toggle between active & inactive css class
        if(buttonClassLike === 'inactive'){
            setButtonClassLike('active')
            setButtonClassDislike('inactive')
        }
        else {
            setButtonClassLike('inactive')
        }
    }

    function handleClickDislike(){

        if(buttonClassDislike === 'inactive'){
            setButtonClassDislike('active')
            setButtonClassLike('inactive')
        }
        else {
            setButtonClassDislike('inactive')
        }
        
    }

    return (
        <div>
            <button className={buttonClassLike} onClick={handleClickLike}>like</button>
            <button className={buttonClassDislike} onClick={handleClickDislike}>dislike</button>
        </div>
    )
}

export default Buttons