import UPDATE_TXT from '../actions/types.js'
//basic function for converting rawtxt to sanitized markdown
import DOMPurify from 'dompurify'
import marked from 'marked'
import thumbsup from '../media/thumbsup.jpg'
export const parseMd = text => {
  var parsed = marked(text)
  var clean = DOMPurify.sanitize(parsed)  
    return clean;
}

const DEFAULT_EDITOR = 
`
[Markdown Basic Syntax Guide](https://www.markdownguide.org/basic-syntax/)  

Markdown translates easy syntax into HTML code for you.  

For instance,

\`### Heading 3\` will get passed to the browser as:

\`\`\`
<h3>
Heading 3
</h3>
\`\`\`

You can do almost anything such as:
# H1 Headers
## H2 Subheadings
**Bold Text**

Lists are easy too!  
1.First Item
2.Second Item 
3.Is the magic number! 

Unordered lists use dashes(-), asterisks(*) or plus signs (+) in front of line items.

- This
- works
* So
* does
* this

1. You can even
    2. indent
    3. items
    4. easily

Images are possible too  
![Thumbs Up](${thumbsup}#thumbsup)

>Don't forget Blockquotes. 
>They can be useful too for emulating reply text
>You can *even* put **Markdown** into a blockquote
`;

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