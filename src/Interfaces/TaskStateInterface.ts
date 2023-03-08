import TaskIdInterface from '../Interfaces/TaskIdInterface'
import TaskInterface from '../Interfaces/TasksInterface'


interface TaskStateInterface{

    tasks: TaskIdInterface[];
    addTasks: ({}:TaskInterface)=> void;
    removeTasks:(id: string)=> void;
    isCompletedTask:(id:string)=> void;

}


export default TaskStateInterface;