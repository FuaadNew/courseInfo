

const Header = ({courseName}) =>{
 
  return (
    <h1>{courseName}</h1>

  )


}

const Part = ({name,excercises}) =>{
  return (<p>{name} {excercises}</p>)


}
const Content = ({title,excercises}) =>{
  return (<div>
    <Part name={"Fundementals of React"} excercises={10} ></Part>
    <Part name={"Using Props to pass Data"} excercises={7} ></Part>
    <Part name={'State of component'} excercises={14} ></Part>
  </div>)


}

const Total =({excercises1,excercises2,excercises3 }) =>{
  return (<p> Number of Excercises {excercises1 + excercises2 + excercises3}</p>)
}
const App  = () =>{
  const course = "Half Stack application development"
  const part1 = "Fundementals of React"
  const excercises1 = 10
  const part2 = "Using Props to pass Data"
  const excercises2 = 7
  const part3 ='State of component'
  const excercises3 = 14
  return (
    <div>
      <Header courseName={course}></Header>
      <Content></Content>
      <Total excercises1 = {excercises1} excercises2 = {excercises2} excercises3= {excercises3}></Total>
    

    </div>
   
  )
}

export default App;