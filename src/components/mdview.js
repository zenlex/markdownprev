import React, { useEffect } from 'react';
 
//Previewer is a container div (id = 'preview') which contains resulting markdown->HTML
function MdView(props) {

  useEffect(() => {
    document.getElementById('preview').innerHTML = props.markdown
  });

  return(
    <div className = 'wrapper'>
      <h1>Markdown:</h1>
        <div id = 'preview' />
    </div>
  )

};

export default MdView;
