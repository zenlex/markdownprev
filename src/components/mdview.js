import React from 'react';
 
//Previewer is a container div (id = 'preview') which contains resulting markdown->HTML
const MdView = props => (
    <div className = 'wrapper'>
     <h1>Markdown:</h1>
     <div id = 'preview'>
       <script>
        document.getElementById('preview').innerHTML = {props.markdown}
       </script>
     </div>
   </div>
 )

export default MdView