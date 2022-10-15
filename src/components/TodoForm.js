import React, { useState } from "react";

function TodoForm({onAdd}) {
    const [text,setText] = useState("");
    return (
        <div className="inpTextStyle">
            <form onSubmit={(e) => {
                e.preventDefault();
                setText("");
                onAdd(text)
            }}>

                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>Add Posts</button>
            </form>
        </div>
    )
}

export default TodoForm;