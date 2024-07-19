import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Tasklist from "./Tasklist";
import Login from "./Login";
import Sidebar from "./Sidebar";

const App = () => {

  // return (
  //   <div className='app'>
  //     <Outlet />
  //   </div>
  // )

  const currentUser = '';

    if (currentUser !== null){
        return (
            <div className="app">
                <Sidebar />
                <Navbar />
                {/* <Tasklist /> */}
                <Outlet />
            </div>
        )
    } else {
        return (
            <Login />
        )
    }
}

export default App;
