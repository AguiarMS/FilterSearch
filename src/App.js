import { useState } from 'react';
import { Users } from './users.js'
import './App.css';

function App() {

  const [query, setQuery] = useState("")
  console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")))

  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <input type="text" placeholder='Search...' className='search' onChange={e => setQuery(e.target.value)} />
      </div>

      <ul className='list'>
        {Users.filter((user => user.first_name.toLowerCase().includes(query))).map((user) => (
          <li key={user.id} className='listItem'> {user.first_name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
