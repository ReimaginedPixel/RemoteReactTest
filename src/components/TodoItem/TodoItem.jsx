import { useState } from 'react';

function TodoItem({ text }) {
    const [isDone, setIsDone] = useState(false);

    return (
        <div>
            <input
                type="checkbox"
                checked={isDone}
                onChange={() => setIsDone(previousValue => !previousValue)}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                {text}
            </span>
        </div>
    );
}

export default TodoItem;