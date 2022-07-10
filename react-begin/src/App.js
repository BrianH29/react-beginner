// import Button from './Button';
import styles from './App.module.css'
import { useState, useEffect } from 'react'

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onChange = (event) => setKeyword(event.target.value); 

  const onClick = () => setValue((prev) => prev + 1)
  console.log('i run all the time');

  useEffect(() => {
    console.log('CALL THE API')
  }, []);

  useEffect(() => {
    if(keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR...', keyword)
    }
  }, [keyword])

  useEffect(() => {
      console.log('i run when both changes')
  }, [keyword, counter])

  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} placeholder="Seach here.." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
