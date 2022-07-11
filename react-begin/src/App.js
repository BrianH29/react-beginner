import { useState, useEffect } from 'react'

function Hello(){
  useEffect(() => {
    console.log('created 😃');

    //clean up function to do smthing when destroyed
    return () => console.log('destroyed 😥')
  }, [])
  return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

 return (
  <div>
    {showing ? <Hello/> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>
 )
}

export default App;
