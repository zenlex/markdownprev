import React from 'react';

const Editorview = props => (
  <div className='wrapper'>
    <h2>Editor:</h2>
    <hr />
    <p>Enter markdown</p>
    <textarea id='editor' value={props.rawtxt} onChange={props.onChange} />
  </div>
)

export default Editorview