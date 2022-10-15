import React from "react";

function TodoItem({todo,onChange,onDelete}) {
    return(
        <div>
            <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}
            />
            {todo.text}
            <button onClick={() => {
                onDelete(todo)
            }} className="btnClear">Delete</button>
        </div>
    )
}

export default TodoItem;