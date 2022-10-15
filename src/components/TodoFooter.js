import React from "react";

function TodoFooter({todos,clearCompleted}) {
   const completedSize = todos.filter((todo) => todo.isCompleted).length
    return(
        <>
            <div className="todoFooterStyle">
                <strong>{completedSize}/{todos.length} Completed</strong>
                <button onClick={clearCompleted}>Clear Completed</button>
            </div>
        </>
    )
}

export default TodoFooter;