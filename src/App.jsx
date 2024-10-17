
import './App.css'

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = ()=>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
  
      <h3>React Core concept part 2</h3>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
      <button onClick={() =>addToFive(3)}>Four</button>
      
    </>
  )
}

export default App