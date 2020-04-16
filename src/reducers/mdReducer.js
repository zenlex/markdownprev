import UPDATE_TXT from '../actions/types.js'

//basic function for converting rawtxt to sanitized markdown
import DOMPurify from 'dompurify'
import marked from 'marked'

export const parseMd = text => {
  var parsed = marked(text)
  var clean = DOMPurify.sanitize(parsed)  
    return clean;
}

const DEFAULT_EDITOR = '**Freddie Funzies**';

const initialState = {
    rawtxt: DEFAULT_EDITOR,
    markdown: parseMd(DEFAULT_EDITOR)
  };

function mdReducer(state = initialState, action) {
  console.log("initial state =", initialState)  
  switch (action.type){
      case UPDATE_TXT:
        return Object.assign({}, state, {rawtxt:action.rawtxt, markdown:action.markdown})
        
      default: 
        return state
    }
};

export default mdReducer;