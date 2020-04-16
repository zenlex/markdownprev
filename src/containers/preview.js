import React from 'react';
import { connect } from 'react-redux';
import MdView from '../components/mdview';
const Preview = props => {
    return(
        <MdView markdown={props.markdown}/>
    )
}

const mapStateToProps = state => {
    return {
        markdown: state.markdown
    }
}

export default connect(mapStateToProps)(Preview);