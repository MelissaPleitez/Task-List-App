
import TaskForm from './Components/TaskForm';
import TasksList from './Components/TasksList';
import TaskIdInterface from './Interfaces/TaskIdInterface';
import useTasks from './Store/useTasks';
import todoLogo  from './assets/todo-Svg.svg';
import './scss/style.scss'
import OpenState from './Store/OpenState'


function Container() {

  const {tasks} =useTasks();

 

  const incompletedTask= tasks.filter((task)=>!task.isCompleted).map((list)=>{
    return <TasksList key={list.id} {...list}/>;
  })

  const completedTasks= tasks.filter((task)=> task.isCompleted).map((list)=>{
    return <TasksList key={list.id} {...list}/>;
  })

  return (
    <>
    <div className='app-container'>
    <a  target="_blank" className='layout-img'>
          <img src={todoLogo}  alt="todo logo" />
        </a>
        <div className='app-title-cont'>
        <h1 className='app-title'>ToDo App</h1>
        </div>
        

    </div>

    <TaskForm/>

<div>
  
</div>
   {tasks.length < 1 ?
    <OpenState/>: (
<div>
    <h2 className='complete'>TASKS COMPLETED</h2>
    {completedTasks.length >= 1 &&(
      <div>
        <div>{completedTasks}</div>
  </div>
    )
    }
  
  <h2 className='actual'>ACTUAL TASKS </h2>
    {incompletedTask.length >= 1 &&(
    <div>
        <div>{incompletedTask}</div>
    </div>
    )
    }
  </div>
   )
   }

    {/* <div>
    <h2>TASKS COMPLETED</h2>
    {completedTasks.length >= 1 &&(
      <div>
        <div>{completedTasks}</div>
      </div>
    )
    }
    <h2>ACTUAL TASKS </h2>
    {incompletedTask.length >= 1 &&(
      <div>
        <div>{incompletedTask}</div>
      </div>
    )
    }
    </div> */}
    
    </>
  )
}

export default Container;