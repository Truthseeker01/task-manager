import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <NavLink className='navbar-brand' to='/'>Home</NavLink>
            <NavLink className='navbar-brand' to='/CompletedTasks'>CompletedTasks</NavLink>
            <NavLink className='navbar-brand' to='/LateTasks'>LateTasks</NavLink>
            <NavLink className='navbar-brand' to='/Analysis'>Analysis</NavLink>
        </nav>
    )
}

export default Navbar;