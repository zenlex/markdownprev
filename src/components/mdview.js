import React, { useEffect } from 'react';

function MdView(props) {

  useEffect(() => {
    document.getElementById('preview').innerHTML = props.markdown
  });

  return (
    <div className='wrapper'>
      <h2>Preview:</h2>
      <hr />
      <div id='preview' />
    </div>
  )

};

export default MdView;
