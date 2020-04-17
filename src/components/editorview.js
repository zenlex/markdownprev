 import React from 'react';
 
 //Editor is a text area (id= 'editor') 
 //Props are the user input and the changehandler callback passed from the container via connect to Redux store
 //onChange ultimately calls the UPDATE_TXT type action generator which updates rawtxt and markdown in store state
const Editorview = props => (
    <div className = 'wrapper'>
      <h1>Editor:</h1>
      <hr />
      <p>Enter markdown</p>
      <textarea id = 'editor' value={props.rawtxt} onChange={props.onChange} />
    </div>
  )

export default Editorview