import React from 'react';
import { connect } from 'react-redux';
import { updateTxt } from '../actions/actions';
import Editorview from '../components/editorview';

const Editor = (props) => {
    return(
        <Editorview rawtxt={props.rawtxt} onChange={props.onChange}/>
    )
}

const mapStateToProps = state => {
    return {
        rawtxt: state.rawtxt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: event => {
        dispatch(updateTxt(event.target.value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);