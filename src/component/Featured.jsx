import React, { Component } from 'react';

class Featured extends Component{
    render(){
        return(
            <div className='featured'>
                <HomeSlider />
                
            </div>
        )
    }
}



class HomeSlider extends Component {
    render(){
        return(
                <div className='slide-wrapper'>
                    <div id='slider' className='slider'>
                        <div id='slide1'></div>
                        <div id='slide2'></div>
                        <div id='slide3'></div>
                    </div>
                </div>
        )
    }
}

export default Featured;