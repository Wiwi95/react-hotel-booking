import React, { Component } from 'react';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../Components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
     render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug)
        console.log(room);
        if(!room){
            return <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
                </Link>
            </div>
        }
    const {name, capacity, price, size, pets, breakfast, extras, description, images} = room;
    const [mainImg,...defaultImg] = images;
     return (
         <>
         <StyledHero img={mainImg || this.state.defaultBcg}>
             <Banner title={`${name} room`}>
                 <Link to="/rooms" className="btn-primary">
                     Back to rooms
                 </Link>
             </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item, index) => {
                    return <img key={index} src={item}/>
                })}
            </div>
        </section>
        <section className="single-room-info">
            <article className="desc">
                <h3>Details</h3>
            <p>{description}</p>
            </article>
            <article className="info">
                <h3>Info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size}-SQFT</h6>
            <h6>Max Capacity : {capacity > 1 ? `${capacity} People` : "1 Person"}</h6>
            <h6>Pets: {pets ? "Pets allowed" : "No pets allowed"}</h6>
            <h6>{breakfast && "Free breakfast included!"}</h6>
            </article>
        </section>
        <section className="room-extras">
            <h3>Extras</h3>
            <ul className="extras">
                {extras.map((item,index) => {
                    return <li key={index}>- {item}</li>
                })}
            </ul>
        </section>
        </>
     )
    }
}