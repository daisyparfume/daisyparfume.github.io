import React, { Component } from 'react';

class BlogMenu extends Component{
    render(){
        return(
            <div className='blog-menu'>
                <ul>
                    <li><a href='item'>FOODS</a></li>
                    <li><a href='item'>TRAVELLING</a></li>
                    <li><a href='item'>BEAUTY</a></li>
                    <li><a href='item'>FASHION</a></li>
                    <li><a href='item'>QUESTIONS</a></li>
                </ul>
                
            </div>
        )
    }
}

export default BlogMenu;