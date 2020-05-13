import React, { Component } from 'react';

class BlogArea extends Component{
    render(){
        return(
            <div className='blog-container'>
                <BlogAd />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div> 
        )
    }
}

class BlogAd extends Component {
    render(){
        return(
            <div className='author-credit'>
                <div className='author-title'>
                    <h2>About me</h2>
                </div>
                <div className='author-summary'>
                    <p>
                        C’est si bon
                        De partir n’importe où,
                        Bras-dessus, bras-dessous,
                        En chantant des chansons.
 
                        C’est si bon
                        De se dire des mots doux,
                        Des petits riens-du-tout,
                        Mais qui en disent long.
                    </p>

                </div>
                <div className='author-title'>
                    <h2>Facebook</h2>
                </div>
                <div className='author-summary'>
                    <p>
                        C’est si bon
                        De partir n’importe où,
                        Bras-dessus, bras-dessous,
                        En chantant des chansons.
 
                        C’est si bon
                        De se dire des mots doux,
                        Des petits riens-du-tout,
                        Mais qui en disent long.
                    </p>

                </div>
                <div className='author-title'>
                    <h2>Instagram</h2>
                </div>
                <div className='author-summary'>
                    <p>
                        C’est si bon
                        De partir n’importe où,
                        Bras-dessus, bras-dessous,
                        En chantant des chansons.
 
                        C’est si bon
                        De se dire des mots doux,
                        Des petits riens-du-tout,
                        Mais qui en disent long.
                    </p>

                </div>
                <div className='author-title'>
                    <h2>Follow Me</h2>
                </div>
                <div className='author-summary'>
                    <p>
                        C’est si bon
                        De partir n’importe où,
                        Bras-dessus, bras-dessous,
                        En chantant des chansons.
 
                        C’est si bon
                        De se dire des mots doux,
                        Des petits riens-du-tout,
                        Mais qui en disent long.
                    </p>

                </div>
            </div>
        )
    }
}

class BlogPost extends Component {
    render(){
        return(
            <div>
                <div className='post-container'>
                    <div className='post-cover'>
                        <div className='post-image'>

                        </div>
                        <div className='post-title'>
                            <h2>La vie en rose</h2>
                        </div>
                    </div>
                    <div className='post-info'>
                        <i class="fa fa-calendar-check-o post-date" aria-hidden="true"></i><span>2020/05/13</span>
                        <i class="fa fa-comment-o post-cmt"></i><span>5</span>
                    </div>
                    <div className='post-text-content'>
                    <div className='text-box'>
                    Des yeux qui font baisser les miens
                    Un rire qui se perd sur sa bouche
                    Voilà le portrait sans retouches
                    De l'homme auquel j'appartiens
                    Quand il me prend dans ses bras
                    Il me parle tout bas
                    Je vois la vie en rose
                    Il me dit des mots d'amour
                    Des mots de tous les jours
                    Et ça me fait quelque chose
                    Il est entré dans mon cœur
                    Une part de bonheur
                    Dont je connais la cause
                    C'est lui pour moi, moi pour lui dans la vie
                    Il me l'a dit, l'a juré pour la vie
                    Et dès que je l'aperçois
                    Alors je sens en moi
                    Mon cœur qui bat
                    Des nuits d'amour à plus finir
                    Un grand bonheur qui prend sa place
                    Des ennuis, des chagrins s'effacent
                    Heureux, heureux à en mourir
                    Quand il me prend dans ses bras
                    Il me parle tout bas
                    Je vois la vie en rose
                    Il me dit des mots d'amour
                    Des mots de tous les jours
                    Et ça me fait quelque chose
                    Il est entré dans mon cœur
                    Une part de bonheur
                    Dont je connais la cause
                    C'est toi pour moi, moi pour toi dans la vie
                    Il me l'a dit, l'a juré pour la vie
                    Et dès que je t'aperçois
                    Alors je sens dans moi
                    Mon cœur qui bat
                    La la, la la, la la
                    La la, la la, ah la
                    La la la la
                    </div>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}

export default BlogArea;