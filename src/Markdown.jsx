import React from 'react';
import './Markdown.css';
import {createStore} from 'redux'
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
    payload:text
  }
}

//basic function for converting rawtxt to sanitized markdown
const parseMd = (rawtxt) => {
 
  var parsed = marked(rawtxt)
  var clean = DOMPurify.sanitize(parsed)  
  
  return clean;
}

//create reducer function
const DEFAULT_EDITOR = '';
const DEFAULT_MD = parseMd(DEFAULT_EDITOR);

const initialState = {
  rawtxt: DEFAULT_EDITOR,
  markdown: DEFAULT_MD
}

function markDownPrev(state = initialState, action){
  //simply maps input text to both fields in state (see notes on REDUX section above)
    switch (action.type){
      case UPDATE_EDIT:
        return Object.assign({}, state, {editortxt: action.payload})
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
  const Editor = props => (
    <div className = 'wrapper'>
      <h1>Editor:</h1>
      <textarea id = 'editor' value = {props.rawtxt} />
    </div>
  )
 
 
 
 //Previewer is a container div (id = 'preview') which contains resulting markdown->HTML
  const Previewer = props => (
    <div className = 'wrapper'>
      <h1>Markdown:</h1>
      <div id = 'preview'>
        {props.markdown}
      </div>
    </div>
  )

 //Container component - Holds both Editor and previewer, catches changes and triggers store then passes new state to Preview


  const mapStateToProps = state => {
    return{
      markdown: parseMd(state.rawtxt)
    }
  }

  const mapDispatchToProps = dispatch => {
    return{
      onChange: newtxt => {
        dispatch(updateEdit(newtxt))
      }
    }
  }
  
  const prevLink = connect(mapStateToProps, mapDispatchToProps)(Previewer);
  
  const Container = () => (
    <div id = "main-container">
      <Editor />
      <Previewer />
    </div>
  )

  export default Container