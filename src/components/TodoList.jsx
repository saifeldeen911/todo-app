import React from "react";

const TodoList = ({ tasks, onToggling, onDeleting }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <div key={task.id}>
                    <input
                        type="checkbox"
                        onClick={(e) => {
                            onToggling(e, index);
                        }}
                    />
                    <p
                        style={{ display: "inline-block" }}
                        className={task.done ? "done" : ""}
                    >
                        {task.name}
                    </p>
                    <button
                        onClick={() => {
                            onDeleting(task.id);
                        }}
                        style={{ color: "red" }}
                    >
                        x
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
