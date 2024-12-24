
const Header = ({courseName}) =>{
 
  return (
    <h1>{courseName}</h1>

  )


}

const Part = ({name,exercises}) =>{
  return (<p>{name} {exercises}</p>)


}
const Content = ({course}) =>{
  return (<div>
    <Part name={course.parts[0].name} exercises={course.parts[0].exercises} ></Part>
    <Part name={course.parts[1].name} exercises={course.parts[1].exercises} ></Part>
    <Part name={course.parts[2].name} exercises={course.parts[2].exercises} ></Part>
  </div>)


}

const Total =({course}) =>{
  return (<p> Number of Exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>)
}
const App  = () =>{
  const course = {name: "Half Stack application development",
  parts : [
    {name:"Fundementals of React",exercises:10},
    {name:"Using Props to pass Data",exercises:7},
    {name:'State of component',exercises:14}

  ]
}

  return (
    <div>
      <Header courseName={course.name}></Header>
      <Content course = {course}></Content>
      <Total course = {course}></Total>
    

    </div>
   
  )
}

export default App;