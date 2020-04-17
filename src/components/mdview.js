import React, { useEffect } from 'react';
 
//Previewer is a container div (id = 'preview') which contains resulting markdown->HTML
function MdView(props) {

//side effect called after render() to inject the parsed markdown into the preview div
//useEffect used to ensure 'preview' div has been mounted to DOM before trying to edit .innerHTML
  useEffect(() => {
    document.getElementById('preview').innerHTML = props.markdown
  });

  return(
    <div className = 'wrapper'>
      <h1>Preview:</h1>
      <hr />
        <div id = 'preview' />
    </div>
  )

};

export default MdView;
