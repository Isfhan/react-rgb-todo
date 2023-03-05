import './App.css';
import { useState } from 'react';

// Define an array of colors to be used in list items
const color = ["tomato", "forestgreen", "darkblue"];

function App() {

  // Initialize state for input text, editing index, and todo list
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [list, setList] = useState(["ALi", "bilal", "catey", "dania", "electra"]);

  // Function to render the list items with edit and remove buttons
  const renderLi = () => {
    let listItem = [];
    let i = 0;

    // Iterate through the list and create a list item for each value
    list.forEach((value, index) => {
      listItem.push(
        <li style={{ "backgroundColor": color[i] }} key={"list-" + index}>{value}
          <button onClick={() => editTodo(index)}>edit</button>
          <button onClick={() => removeTodo(index)}>remove</button>
        </li>
      );

      // Cycle through the colors array to give alternating colors to each list item
      if (i > 1) i = 0;
      else i++;
    });

    return listItem;
  };

  // Function to add a new todo item to the list
  const addTodo = () => {
    const currentList = [...list];
    currentList.push(text);
    setList(currentList);
    setText("");
  };

  // Function to set the editing state to a specific item in the list
  const editTodo = (index) => {
    setText(list[index]);
    setEditIndex(index);
  };

  // Function to update a todo item in the list after editing
  const updateTodo = () => {
    const currentList = [...list];
    currentList[editIndex] = text;
    setList(currentList);
    setText("");
    setEditIndex(null);
  };

  // Function to remove a todo item from the list
  const removeTodo = (index) => {
    const currentList = [...list];
    currentList.splice(index, 1);
    setList(currentList);
  };
  

  // JSX to display the todo list, input field, and buttons for adding/updating items
  return (
    <div className="App">
      <h1>REACT RGB TODO</h1>
      <br />
      <input onChange={(event) => setText(event.target.value)} type="text" value={text} />
      {(editIndex === null) ? <button onClick={addTodo}>Add</button> : <button onClick={updateTodo}>Update</button>}
      <ul>
        {renderLi()}
      </ul>
    </div>
  );
}

// Export the App component as the default export of the module
export default App;
