import React, { Component } from 'react';

class TopMenu extends Component{
    render(){
        return(
            <div className='topmenu'>
                <div className='top-home-menu'>
                    <div>
                        <a href='home'>Home</a>
                        <a href='about'>About</a>
                        <a href='Contact'>Contact</a>
                    </div>
                </div>
                <div className='utilmenu'>

                </div>
            </div>
        )
    }
}

export default TopMenu;