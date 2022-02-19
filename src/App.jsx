import { useState } from 'react';
import { Users } from './users.js'
import './App.css';
import Table from './Table.jsx';

function App() {

  const [query, setQuery] = useState("")

  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query))
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
