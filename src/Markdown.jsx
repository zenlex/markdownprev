import React from 'react';
import './Markdown.css';

import marked from 'marked'
import DOMPurify from 'dompurify'
import {connect} from 'react-redux'
/*****************REDUX SECTION*******************
 * Used to experimnent with very simple case of Redux/React
 * Store holds basic state with a simple text property:
 * editortxt - the value of the user input text area
 ***************************************************/

//create action generator(s)
const UPDATE_EDIT = 'UPDATE_EDIT';

function updateEdit (text){
  return{
    type:UPDATE_EDIT,
    rawtxt:text,
    markdown: parseMd(text)
  }
}

//basic function for converting rawtxt to sanitized markdown
const parseMd = (data) => {
  var parsed = marked(data)
    //console.log(`Parsed rawtxt ${rawtxt} to ${parsed}`)
  var clean = DOMPurify.sanitize(parsed)  
    //console.log(`Sanitized HTML Result: ${clean}`)
    return clean;
  
}

//create reducer function
const DEFAULT_EDITOR = 'bloopy';
const DEFAULT_MD = parseMd(DEFAULT_EDITOR);
const initialState = {
  rawtxt: DEFAULT_EDITOR,
  markdown: DEFAULT_MD
}

export function mdReducer(state = initialState, action){
  //simply maps input text to both fields in state (see notes on REDUX section above)
    console.log(`Calling MarkDownPrev reducer with action type= ${action.type}`)
    switch (action.type){
      case UPDATE_EDIT:
        return Object.assign({}, state, {rawtxt:action.rawtxt, markdown:action.markdown})
      default: 
        return state
    }
}



/**************REACT UI****************
 * Following structure of state, 3 basic components
 * 1)The text area/user input which onChange passes it's updated value to Redux Store (editor)
 * 2)The Markdown previewer which gets editor text from store and displays it parsed/sanitize
 * 3)Container which subscribes to store and on state change, sends new state as props to previewer
 * NOTE: text is parsed using Marked.js library and then sanitized using DOMPurify to avoid dangerous HTML
 ***************************************/

 //Editor is a text area (id= 'editor') whose props are simply the value of the user input
 export const Editor = ({onChange}) => (
    <div className = 'wrapper'>
      <h1>Editor:</h1>
      <textarea id = 'editor' onChange={onChange} />
    </div>
  )
 
 //Previewer is a container div (id = 'preview') which contains resulting markdown->HTML
 export const Previewer = props => (
     <div className = 'wrapper'>
      <h1>Markdown:</h1>
      <div id = 'preview'>
        {props.markdown}
      </div>
    </div>
  )

const mapStateToProps = state =>{
  return{
    markdown: state.markdown
  };
}

const mapDispatchToProps = dispatch => {
  return{
    onChange: text => dispatch(updateEdit(text))
  }
}

export const PreviewCont = connect(mapStateToProps, mapDispatchToProps)(Previewer)
export const EditCont = connect(mapStateToProps, mapDispatchToProps)(Editor)