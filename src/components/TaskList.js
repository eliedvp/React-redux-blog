// src/components/TaskList.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

export default function TaskList() {
    // On récupère les tâches et le filtre depuis le store Redux
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);

    // On filtre les tâches selon le filtre sélectionné
    const filtered = tasks.filter((t) => {
        if (filter === 'done') return t.isDone;
        if (filter === 'notDone') return !t.isDone;
        return true; // 'all' ou tout autre filtre
    });

    return (
        <div>
            {filtered.length === 0 ? (
                <p>Aucune tâche</p>
            ) : (
                filtered.map((t) => <Task key={t.id} task={t} />)
            )}
        </div>
    );
}
