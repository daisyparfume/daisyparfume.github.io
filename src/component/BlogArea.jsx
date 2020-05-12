import React, { Component } from 'react';

class BlogArea extends Component{
    render(){
        return(
            <div className='blog-container'>
                <div className='author-credit'>
                    
                </div>
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div> 
        )
    }
}

// class BlogAd extends Component {
//     render(){
//         return(
//             <div className='ad-zone'>

//             </div>
//         )
//     }
// }

class BlogPost extends Component {
    render(){
        return(
            <div>
                <div className='post-container'>
                    <div className='post-cover'>
                        <div className='post-image'>

                        </div>
                        <div className='post-title'>
                            <h2>Lorem ipsum title here</h2>
                        </div>
                    </div>
                    <div className='post-info'>
                        <i class="fa fa-calendar-check-o post-date" aria-hidden="true"></i><span>xx/XX/YYYY</span>
                        <i class="fa fa-comment-o post-cmt"></i><span>5</span>
                    </div>
                    <div className='post-text-content'>
                    <div className='text-box'>
                        Lorem ipsum something here must be this long if not copy something until it's so long enough Lorem ipsum something here must be this long if not copy something until it's so long enough Lorem ipsum something here must be this long if not copy something until it's so long enough Lorem ipsum something here must be this long if not copy something until it's so long enough Lorem ipsum something here must be this long if not copy something until it's so long enough Lorem ipsum something here must be this long if not copy something until it's so long enough
                    </div>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}

export default BlogArea;