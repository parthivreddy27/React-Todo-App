import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTaskAction} from '../../actions/index';
import '../../index.css';

class addTaskCom extends Component{
	constructor(props){
		super(props)

		this.state = {term: ''}
		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({term : event.target.value});
	}

	onSubmit(event){
		event.preventDefault();
		this.props.addTaskAction(this.state.term);
		this.setState({term: ''});
	}

	render(){
		var inputStyle={
			width : '50%',
			display: 'inline-block'
		}
		return(
			<div>
				<input style={inputStyle}
					className="form-control" 
					placeholder="Enter task details" 
					onChange={this.onInputChange}/>
				<span>
					<button 
						className="btn btn-primary" 
						onClick={this.onSubmit}>Add Task
					</button>
				</span>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addTaskAction}, dispatch);
}



export default connect(null, mapDispatchToProps)(addTaskCom);