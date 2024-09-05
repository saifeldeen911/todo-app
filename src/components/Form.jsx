import React, { useState } from "react";
import TodoList from "./TodoList";

const Form = () => {
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            name: e.target[0].value,
            id: Date.now(),
            done: false,
        };
        setTasks([...tasks, newTask]);
    };

    const handleToggle = (e, index) => {
        const updatedTask = {
            ...tasks[index],
            done: e.target.checked,
        };
        const newTasks = [...tasks];
        newTasks[index] = updatedTask;
        setTasks(newTasks);
    };

    const onDelete = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Type your task"
                style={{ marginRight: "2px" }}
            />
            <button>Add Item</button>
            <TodoList
                onToggling={handleToggle}
                onDeleting={onDelete}
                tasks={tasks}
            />
        </form>
    );
};

export default Form;
