 import React from 'react';
 
 //Editor is a text area (id= 'editor') whose props are simply the value of the user input
const Editorview = props => (
    <div className = 'wrapper'>
      <h1>Editor:</h1>
      <textarea id = 'editor' onChange={props.onChange} />
    </div>
  )

export default Editorview