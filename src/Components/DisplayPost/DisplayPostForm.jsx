import React, { useState } from 'react';


const DisplayPostForm = (props) => {

    const [name, setName] = useState('')
    const [post, setPost] = useState('')

    return (
        <form>
            <label>Name</label>
            <input type='text' onChange={(event) => setName(event.target.value)} value={name}/>
            <label>Post</label>
            <input type='text' onChange={(event) => setPost(event.target.value)} value={post}/>
        </form>
    )
}

export default DisplayPostForm