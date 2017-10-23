export const addTaskAction = (task) => {
		return {
			type: 'ADD_TASK',
			payload: task
		};
}
export const deleteTaskAction = (taskId) => {
		return {
			type: 'DELETE_TASK',
			payload: taskId
		};
};
