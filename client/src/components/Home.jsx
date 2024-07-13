import Tasklist from "./Tasklist";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Home = () => {

    const currentUser = '';

    if (currentUser !== null){
        return (
            <div className="container">
                <div className="row row.cols-3">
                    <div className="col-auto"><Sidebar /></div>
                    <div className="col-6">
                        <div className="row"><Navbar /></div>
                        <div className="row">
                            <Tasklist />
                        </div>
                    </div>
                    <div className="col-lg-4 text-center">
                        <h3>Add a New Task</h3>
                        <br />
                        <form className="container">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Task</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Task" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Deadline</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Deadline" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Deadline</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Deadline" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Deadline</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Deadline" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <Login />
        )
    }
}

export default Home;