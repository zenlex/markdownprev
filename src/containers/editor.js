import React from 'react';
import { connect } from 'react-redux';
import { updateTxt } from '../actions/actions';
import Editorview from '../components/editorview';

const Editor = props => {
    return(
        <Editorview value={props.rawtxt}/>
    )
}

const mapStateToProps = state => {
    return {
        rawtxt: state.rawtxt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: rawtxt => {
        dispatch(updateTxt(rawtxt));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);