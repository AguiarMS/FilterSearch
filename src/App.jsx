import { useState } from 'react';
import { Users } from './users.js'
import './App.css';
import Table from './Table.jsx';

function App() {

  const [query, setQuery] = useState("")

  const keys = ["first_name", "last_name", "email"]

  console.log(keys[0])



  const search = (data) => {
    return data.filter(
      (item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="text" placeholder='Search...' className='search' onChange={e => setQuery(e.target.value)} />
      </div>

      <Table data={search(Users)} />
    </div>
  );
}

export default App;
