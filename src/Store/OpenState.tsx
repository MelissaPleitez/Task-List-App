
import listLogo  from '../assets/sticky-note.svg';
const OpenState=()=> {

  return (
    <>
    <h2 className='actual'>ACTUAL TASKS </h2>
    <div className='container'>
  <section>
    <figure>
      <img src={listLogo}  alt="todo logo"/>
    </figure>
      <h1>Title</h1>
      <p>Description</p>
      <p>Owner</p>
      <p>Date</p>
  </section>
</div>

</>
  
  )
   
    
  
}

export default OpenState;















// const OpenState = [
//   {
//     id: "123e4567-e89b-12d3-a456-426614174000",
//     title: "NavBar",
//     personAssigned: "Maria Ramirez",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
//     dateOfFinish: "2023-05-03",
//     isCompleted: false,
//   },

//   {
//     id: "81904378-1428-8793-5506-488982624439",
//     title: "GitHub App",
//     personAssigned: "Juan Hernandez",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
//     dateOfFinish: "2023-10-10",
//     isCompleted: false,
//   },

//   {
//     id: "50591044-5147-6467-8221-314687367193",
//     title: "Team Meeting",
//     personAssigned: "Maria Elena",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
//     dateOfFinish: "2023-05-03",
//     isCompleted: false,
//   },

//   {
//     id: "00515460-2670-5424-7398-212135890523",
//     title: "Interview",
//     personAssigned: "Kenny pena",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
//     dateOfFinish: "2023-05-03",
//     isCompleted: false,
//   },
// ];

// export default OpenState;
