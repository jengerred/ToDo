
function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])


const addTodo = text => {
  const newTodos = [...todos, {text:text, isCompleted:false}];
  setTodos(newTodos);
}

  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index,1);
    setTodos(temp);
  }
  return (
   
    <div className="app" align="center">

      <div className="todo-list">
      {todos.map((todo,i) => 
       <Todo index={i} key={i} todo={todo} remove=
       {removeTodo}/>)}
   <TodoForm addTodo={addTodo}/>
   </div>
 
<div className="wrapper" align="center">
    <div className="quote" id="quote">
      <h4>"It does not matter how slowly you go as long as you do not stop"</h4>
         </div>
   
         <div class="quote1" id="quote1">
      <h4>“The secret of getting ahead is getting started”</h4>
         </div>
   
         <div class="quote2" id="quote2">
      <h4>"Until we can manage time, we can manage nothing else.”</h4>
         </div>
   
         <div class="quote3" id="quote3">
      <h4>"Don't wait for inspiration, just get up and go to work."</h4>
         </div>
         </div>

         </div>
          );
        }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
