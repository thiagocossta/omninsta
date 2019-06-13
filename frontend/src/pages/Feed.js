import React, { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component{
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Thiago</span>
                            <span className="place">Olinda</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/antifa1.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Mais" />
                            <img src={comment} alt="Mais" />
                            <img src={send} alt="Mais" />
                        </div>
                        <strong>500 curtidas</strong>
                        <p>
                            Loucura binchon
                            <span>#react #top</span>
                        </p>
                    </footer>

                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Thiago</span>
                            <span className="place">Olinda</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/antifa1.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt="Mais" />
                            <img src={comment} alt="Mais" />
                            <img src={send} alt="Mais" />
                        </div>
                        <strong>500 curtidas</strong>
                        <p>
                            Loucura binchon
                            <span>#react #top</span>
                        </p>
                    </footer>

                </article>
            </section>
        )
    }
}
export default Feed;