import React, { useState } from 'react';
import CreatePostForm from './Components/CreatePost/CreatePostForm';
import './App.css'



function App() {

  const [posts, setPosts] = useState([{name: 'Quentin', post: 'Test post'}])  // this is where I will store all of my post data

  function addNewPost(post){ // this function will pull post data from my CreatePost component and save it to my post "hook" above
      
    let tempPosts = [...posts, post] // ... is saving allthe existing post data and adding the new post

    setPosts(tempPosts)   // saving the data in our hook above on line 9
  }

  return (
    <div className='container-flued'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social <small className='text-muted'>Feed</small></h3>
        <div className='col-md-6'>
          <div className='border-box'>
            <CreatePostForm addNewEntry={addNewPost} /> {/* passing in our function so we can pull data to this level and save it */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
