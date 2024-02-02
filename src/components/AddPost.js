// src/components/AddPost.js
import React, { useRef } from 'react';

const AddPost = ({ onAddPost }) => {
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const contentRef = useRef(null);

  const handleAddPost = async () => {
    try {
      const newPost = {
        title: titleRef.current.value,
        author: authorRef.current.value,
        content: contentRef.current.value,
      };

      const response = await fetch('http://localhost:8080/api/v1/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        const addedPost = await response.json();
        onAddPost(addedPost);
        // Clear the form fields after adding the post
        titleRef.current.value = '';
        authorRef.current.value = '';
        contentRef.current.value = '';
      } else {
        console.error('Failed to add post');
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="add-post">
      <br></br><br></br>
      <h2 style={{ color: 'green' }}>Add New Post</h2>
      <label>
        Title: </label>
      <input type="text" ref={titleRef} />

      <label>
        Author: </label>
      <input type="text" ref={authorRef} />

      <label>
        Content:</label>
      <textarea ref={contentRef} />

      <button className="btn btn-success" onClick={handleAddPost}>Add Post</button>

      <br></br><br></br>
      <hr></hr>   <hr></hr>   <hr></hr>
    </div>
  );
};

export default AddPost;
