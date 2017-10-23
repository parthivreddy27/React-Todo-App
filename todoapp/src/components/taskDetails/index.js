import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {deleteTaskAction} from '../../actions/index';
import {connect} from 'react-redux';

class Task extends Component{
	render(){
		return(
			<tr>
				<td>
					{this.props.task}
				</td>
				<td>
					<button className="btn btn-danger" onClick={()=>this.props.deleteTaskAction(this.props.index)}>Delete</button>
				</td>
			</tr>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deleteTaskAction}, dispatch)
}
export default connect(null, mapDispatchToProps)(Task)