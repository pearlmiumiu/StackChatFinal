import React , {component} from 'react';
import {connect} from 'react-redux';
import {writeChannelName, postChannel} from '../store';


 function NewChannelEntry(){
	return (
	    <form onSubmit={props.handleSubmit}>
	    	<div className="form-group">
	    		<lable htmlFor="name"> create a channel</lable>
	    		<input onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter a channel name"/>
	    	</div>
	    	<div className="form-group">
	    		<button type="submit" className="btn btn-default"> Create Channel</button>
	    	</div>
	    </form>
	);
}


const mapStateToProps=function(state, ownProps){
	return {}
}
const mapDispatchToProps=function(dispatch, ownProps){
	return {
		handleChange: function(event){
			const inputvalue=event.target.value
			const action=writeChannelName(inputvalue);
			dispatch(action)
		},
		handleSubmit: function(event){
			event.preventDefault();
			const name=event.target.channelName.value;
			const newChannel={name};
			const history=ownProps.history;
			dispatch(postChannel(newChannel, history))
		}
	}
}

const Container=connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);
export default Container;