import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <NavLink className='navlink' activeClassName='active' to='/'>Home</NavLink>
            <NavLink className='navlink' to='/CompletedTasks'>CompletedTasks</NavLink>
            <NavLink className='navlink' to='/LateTasks'>LateTasks</NavLink>
            <NavLink className='navlink' to='/Analysis'>Analysis</NavLink>
        </nav>
    )
}

export default Navbar;