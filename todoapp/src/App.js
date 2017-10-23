import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/index';
import AddTask from './components/addtask/index';
import TaskList from './components/taskList/index';

class App extends Component {
  render() {
    return (
    	<div>
    		<Header />
    		<AddTask />
    		<TaskList />
    	</div>
    );
  }
}

export default App;
