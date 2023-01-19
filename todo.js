
function Todo({todo,index,remove}){
    function handle(){
        remove(index);
        congrats();
        stop();
       
    }
    /*function congrats(){
        alert( "Congratulations on completing a task!");
    }*/
    function congrats() {
        setTimeout(() => {
        const congratulations = document.getElementById('congratulations');
    congratulations.style.visibility = 'visible';
          }, 500);
        }
    function stop() {
        setTimeout(() => {
            const congratulations = document.getElementById('congratulations');
        congratulations.style.visibility = 'hidden';
    }, 3000);
      }

    return <div className="todo" onClick={handle} >
    {todo.text}(-)</div>
};




    
  