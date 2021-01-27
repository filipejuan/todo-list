import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getList, setNewItem, setSearch } from './redux/actions/appActions';

import RenderList from './components/renderList';
import RenderNewItem from './components/renderNewItem';
import './App.css';

function App() {
  const list = useSelector(state => state.AppReducer.list);
  const newItem = useSelector(state => state.AppReducer.new);
  const search = useSelector(state => state.AppReducer.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>

        <div className="search-container">
          <input 
            placeholder="Search"
            value={search}
            onChange={ event => dispatch(setSearch(event.target.value)) }
          />
        </div>
      </header>

      <div className="App-content">
        <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Edit</th>
              <th>Description</th>
              <th>Checked</th>
            </tr>
          </thead>
          <tbody>
            { list.map((item) => <RenderList item={item} />) }
            { newItem && <RenderNewItem /> }
          </tbody>
        </table>
        <div className="add-item">
          <button onClick={ () => dispatch(setNewItem()) }>Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
