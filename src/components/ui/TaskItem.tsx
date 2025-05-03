export interface TaskItemProps { 
    type: 'STUDY' | 'WORK' | 'HABIT' | 'GOAL',
    title: string, 
    startDate?: string, // undefined available
    endDate?: string, 
    progress: 'TO_DO' | 'IN_PROGRESS' | 'DONE', 
    priority?: 'HIGH' | 'MEDIUM' | 'LOW'
}

const TaskItem = (props: TaskItemProps) => {
    return (
    <div>
        <p>{props.type}</p>
        <h3>{props.title}</h3>
        <p>{props.progress}</p>
        <p>{props.startDate}</p>
        <p>{props.endDate}</p>
        <p>{props.priority}</p>
    </div>
)
}

export default TaskItem