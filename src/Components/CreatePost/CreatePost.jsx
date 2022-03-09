import React, { useState } from 'react';


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
        <form>
            <div>
                <label>Name</label>
                <input />
            </div>
            <div>
                <label>Post</label>
                <input />
            </div>
            <button>Create</button>
        </form>
    )
}

export default CreatePost