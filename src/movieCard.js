import React from "react";
export default class movieCard extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "Avenger Endgame",
            plot : "super natural power shown in the movie",
            price : 199,
            rating : 8.9,
            starCt : 0,
            isFav : false,
            isCartAdded : false
        }
    }
    decBtn = () =>{
        if(this.state.starCt <=0){
            return;
        }
        this.setState({starCt : this.state.starCt -0.5});
    }
    incBtn = () => {
        if(this.state.starCt >=5){
            return;
        }
        this.setState((prevState) => {
            return({
                starCt: prevState.starCt + 0.5
            })
        });
    }
    handleFavClick = () =>{
        this.setState(
            {isFav: !this.state.isFav}
        );
    }
    handleCartClick = () =>{
        this.setState(
            {isCartAdded: !this.state.isCartAdded}
        );
    }
    render(){
        const {title,plot,price,rating,starCt,isFav,isCartAdded} = this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" 
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6855f99a-529e-474b-be73-aad11412f2a1/dd3ri6n-cd647427-b5ca-4c2f-89bc-d771155a71a8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4NTVmOTlhLTUyOWUtNDc0Yi1iZTczLWFhZDExNDEyZjJhMVwvZGQzcmk2bi1jZDY0NzQyNy1iNWNhLTRjMmYtODliYy1kNzcxMTU1YTcxYTgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LYeKvMD5D5K1-Ji5hy3Fe0ORH_juJ2cF87ejuURsU30"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                onClick={this.decBtn}/>
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"/>
                                <img className="str-btn" alt="" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick={this.incBtn}/>
                                <span className="starCount">{starCt}</span>
                            </div>
                            <button className={isFav?"unfavourite-btn":"favourite-btn"} onClick={this.handleFavClick}>{isFav? "Un-favourite":"Favourite"}</button>
                            <button className={isCartAdded?"uncart-btn":"cart-btn"} onClick={this.handleCartClick}>{isCartAdded? "Remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}