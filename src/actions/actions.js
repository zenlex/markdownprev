import UPDATE_TXT from './types'

export function updateTxt (editorVal){
    return{
      type:UPDATE_TXT,
      rawtxt: editorVal,
    }
  }