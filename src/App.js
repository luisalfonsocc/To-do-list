import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addElement = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  const deleteItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <div className="todo-container paper">
      <h1>TO DO LIST</h1>
      <div className="paper">
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addElement();
            }
          }}
          placeholder="Type Item"
        />
        <ul>
          {list.map((element, index) => (
            <li key={index}>
              {element}
              <button onClick={() => deleteItem(index)}>X</button>
            </li>
          ))}
        </ul>
        <p>{list.length} item left</p>
      </div>
    </div>
  );
}

export default App;
