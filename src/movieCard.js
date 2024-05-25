import React from "react";
export default class movieCard extends React.Component{
    
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
        const {title,plot,price,rating,starCt,isFav,isCartAdded,poster} = this.props.movie;
        return(
            <div className="main" key={title}>
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" 
                        src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" 
                                onClick={() => this.props.decstars(this.props.movie)}/>
                                <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"/>
                                <img className="str-btn" alt="" src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                onClick={() => this.props.addstars(this.props.movie)}/>
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