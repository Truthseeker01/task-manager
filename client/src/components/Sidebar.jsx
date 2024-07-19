
import React from 'react';

const Sidebar = () => {

    const date = new Date().toLocaleString()
    return (
        <section className='sidebar'>
            <div className='sideheader'>
                <img src="https://www.mobupdates.com/wp-content/uploads/2017/08/26.png" />
                <p>UserName</p>
            </div>
            <div className='sidemain'>
                <span>{date}</span>
            </div>
            <button className='sidefooter'>Log out</button>
        </section>
    );
}

export default Sidebar;