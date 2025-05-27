     import React, { Component } from 'react';
     import './ContentRating.css';
     import '../App.css'; 

     class ContentRating extends Component {
       constructor() {
         super();
         this.state = {
             likes: 0,
             dislikes: 0,
             totalLikes: 0,
           handleLike:() => {
             this.setState((prevState) => ({
                likes: prevState.likes + 1,
                totalLikes: prevState.totalLikes + 1
               }));
           },
           handleDislike:() => {
             this.setState((prevState) => ({
                 dislikes: prevState.dislikes + 1,
                 totalLikes: prevState.totalLikes + 1
               }));
           }
           };
       }
       render() {
         return (
          <>
          <div className='content-rating'>
             <h2 id="tweet">Next I'm buying Coca-Cola to put the cocaine back in @elonmusk <a href="https://twitter.com/elonmusk" className="mention">@elonmusk</a></h2>
             <p id="info">Following his $44 billion acquisition of Twitter a few days prior to the date of this tweet, Elon Musk jokingly announced that he would also purchase Coca-Cola in order to restore the cocaine; the drink's original recipe contained coca leaf extract, from which the drug is derived.</p>
             <div className='rating-buttons'>
             <button className="like-button" onClick={this.state.handleLike}>
                 Like ({this.state.likes})
               </button>
               <button className="dislike-button" onClick={this.state.handleDislike}>
                 Dislike ({this.state.dislikes})
               </button>
             </div>
             <div>
                <p>Total likes: {this.state.totalLikes}</p>
             </div>

          </div>
          </>
         );
       }
     }

     export default ContentRating;