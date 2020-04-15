import React from 'react';
import './Markdown.css';
import{ createStore } from 'redux'
import marked from 'marked'
import DOMPurify from 'dompurify'
import {connect} from 'react-redux'
/*****************REDUX SECTION*******************
 * Used to experimnent with very simple case of Redux/React
 * Store holds basic state with a simple text property:
 * editortxt - the value of the user input text area
 ***************************************************/

 //basic function for converting rawtxt to sanitized markdown
const parseMd = (text) => {
  var parsed = marked(text)
    //console.log(`Parsed rawtxt ${rawtxt} to ${parsed}`)
  var clean = DOMPurify.sanitize(parsed)  
    //console.log(`Sanitized HTML Result: ${clean}`)
    return clean;
}

//create action generator(s)
const UPDATE_TXT = 'UPDATE_TXT';

function updateTxt (editorVal){
  return{
    type:UPDATE_TXT,
    payload:{
      rawtxt: editorVal,
      markdown: parseMd(editorVal)
    }
  }
}

//create reducer function
const DEFAULT_EDITOR = '**Loren Ipsum**';
const DEFAULT_MD = parseMd(DEFAULT_EDITOR);
const initialState = {
  rawtxt: DEFAULT_EDITOR,
  markdown: DEFAULT_MD
}

export function mdReducer(state = initialState, action){
    switch (action.type){
      case UPDATE_TXT:
        return Object.assign({}, state, {rawtxt:action.payload.rawtxt, markdown:action.payload.markdown})
      default: 
        return state
    }
}

const store = createStore(mdReducer)
//log the initial state
console.log(store.getState())

//Every time the state changes, log it
const unsubscribe = store.subscribe(() => console.log(store.getState()))

//test dispatches
store.dispatch(updateTxt('FlurgetyFlippity'))
store.dispatch(updateTxt('wokka wokka'))

//stop listening to state updates
unsubscribe()
/**************REACT UI****************
 * Following structure of state, 3 basic components
 * 1)The text area/user input which onChange passes it's updated value to Redux Store (editor)
 * 2)The Markdown previewer which gets editor text from store and displays it parsed/sanitize
 * 3)Container which subscribes to store and on state change, sends new state as props to previewer
 * NOTE: text is parsed using Marked.js library and then sanitized using DOMPurify to avoid dangerous HTML
 ***************************************/
/*
 //Editor is a text area (id= 'editor') whose props are simply the value of the user input
 export const Editor = props => (
    <div className = 'wrapper'>
      <h1>Editor:</h1>
      <textarea id = 'editor' onChange={props.onChange} />
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
*/


