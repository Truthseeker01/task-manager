import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const LateTasks = () => {

    return  (
        <div className="container">
                <div className="row row.cols-2">
                    <div className="col-3"><Sidebar /></div>
                    <div className="col-9">
                        <div className="row"><Navbar /></div>
                        <div className="row">LateTasks</div>
                    </div>
                </div>
            </div>
    )
}

export default LateTasks;