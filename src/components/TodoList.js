import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos,onChange,onDelete}) {
    return (
        <>
            <div className="container">
                {todos.map((todo) => {
                    return (
                        <div className="todoStyle">
                            <span style={todo.isCompleted ? { textDecoration: "line-through" } : null}>
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onChange={onChange}
                                    onDelete={onDelete}
                                />
                            </span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}



export default TodoList;