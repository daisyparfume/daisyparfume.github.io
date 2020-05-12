import React, { Component } from 'react';
import TopMenu from './src/Component/TopMenu.jsx';
import Daisy from './src/Component/Daisy.jsx'
import BlogMenu from './src/Component/BlogMenu.jsx'
import Featured from './src/Component/Featured.jsx'
import BlogArea from './src/component/BlogArea.jsx'
import Footer from './src/Component/Footer.jsx';
import './style.css';

class App extends Component {
    render(){
        return(
            <div>
                <TopMenu />
                <Daisy />
                <BlogMenu />
                <Featured />
                <BlogArea />
                <Footer />
            </div>
        );
    }
}

export default App;