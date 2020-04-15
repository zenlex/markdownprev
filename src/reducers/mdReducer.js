import UPDATE_TXT from '../actions/types.js'

//basic function for converting rawtxt to sanitized markdown
import DOMPurify from 'dompurify'
import marked from 'marked'

const parseMd = (text) => {
    var parsed = marked(text)
    var clean = DOMPurify.sanitize(parsed)  
      return clean;
  }

const DEFAULT_EDITOR = '**Loren Ipsum**';
const DEFAULT_MD = parseMd(DEFAULT_EDITOR);

const initialState = {
    rawtxt: DEFAULT_EDITOR,
    markdown: DEFAULT_MD
  };

function mdReducer(state = initialState, action) {
    switch (action.type){
      case UPDATE_TXT:
        return Object.assign({}, state, {rawtxt:action.rawtxt, markdown:parseMd(action.rawtxt)})
      default: 
        return state
    }
};

export default mdReducer;