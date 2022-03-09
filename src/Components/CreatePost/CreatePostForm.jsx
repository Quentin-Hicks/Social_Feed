import React, { useState } from 'react';
import './CreatePostForm.css'


const CreatePostForm = (props) => {

    const [name, setName] = useState('')    // these hooks are waiting to catch data from the forms, this is setup with onChange logic
    const [post, setPost] = useState('')

    function handleSubmit(event) {
        event.preventDefault()  // this keeps the page from refreshing
        let newEntry = {    // this is the area where we stage our data together before sending off to app.js in our function call
            name: name,
            post: post
        }
        console.log(newEntry) // console log lets us check to see what the data looks like and can help with testing
        props.addNewEntry(newEntry)  // here we call our function we passed down as props, it will take our newEntry value and pass it into our function in app.js
    }

    return (
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-grid'>
                <label>Name</label>
                <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)} />
                {/* on change or each letter a user enters will update our hook on line 11 and will be used by our handleSubmit to pass the data along */}
            </div>
            <div className='form-grid'>
                <label>Post</label>
                <input type='text' className='form-control' value={post} onChange={(event) => setName(event.target.value)} />
                {/* on change or each letter a user enters will update our hook on line 11 and will be used by our handleSubmit to pass the data along */}
            </div>
            <button type='submit' className='btn btn-primary' style={{'marginTop': '1em'}}>Create</button>
        </form>
    )
}

export default CreatePostForm