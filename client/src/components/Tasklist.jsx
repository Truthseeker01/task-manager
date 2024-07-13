import Task from "./Task";

const Tasklist = () => {

    return (
        <table className="table">
            <thead>
                <tr className="text-center">
                    <th>Task</th>
                    <th>Deadline</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </tbody>
        </table>
    )
}

export default Tasklist