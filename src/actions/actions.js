import UPDATE_TXT from './types'

import { parseMd } from '../reducers/mdReducer.js'

export function updateTxt (editorVal){
    return{
      type:UPDATE_TXT,
      rawtxt: editorVal,
      markdown: parseMd(editorVal)
    }
  }