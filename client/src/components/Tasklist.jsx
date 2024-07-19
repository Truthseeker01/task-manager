import Task from "./Task";

const Tasklist = () => {

    return (
        <div className="outlet tasklist">
            <h3>Active Tasks</h3>
            {/* <div id="tasklist_header">
                <div>Task Name</div>
                <span>DeadLine</span>
                <span>Status</span>
                <div>Action</div>
            </div> */}
            <div style={{flex: '1',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
            <form>Add a new task
                <input type="text" />
                <input type="text" />
            </form>
        </div>
    )
}

export default Tasklist