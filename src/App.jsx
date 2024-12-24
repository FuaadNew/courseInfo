
const Header = ({courseName}) =>{
 
  return (
    <h1>{courseName}</h1>

  )


}

const Part = ({name,excercises}) =>{
  return (<p>{name} {excercises}</p>)


}
const Content = ({part1,part2,part3}) =>{
  return (<div>
    <Part name={part1.name} excercises={part1.excercises} ></Part>
    <Part name={part2.name} excercises={part2.excercises} ></Part>
    <Part name={part3.name} excercises={part3.excercises} ></Part>
  </div>)


}

const Total =({excercises1,excercises2,excercises3 }) =>{
  return (<p> Number of Excercises {excercises1 + excercises2 + excercises3}</p>)
}
const App  = () =>{
  const course = "Half Stack application development"
  const part1 = {name:"Fundementals of React",excercises:10}
  const part2 = {name:"Using Props to pass Data",excercises:7}
  const part3 = {name:'State of component',excercises:14}

  return (
    <div>
      <Header courseName={course}></Header>
      <Content part1 = {part1} part2 = {part2} part3 = {part3}></Content>
      <Total excercises1 = {part1.excercises} excercises2 = {part2.excercises} excercises3= {part3.excercises}></Total>
    

    </div>
   
  )
}

export default App;