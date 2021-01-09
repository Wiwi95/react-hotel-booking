import React from 'react'
import StyledHero from '../Components/StyledHero';
import defaultImg from '../images/room-1.jpeg';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../Components/RoomContainer';
const Rooms = () => {
    return (
        <>
        <StyledHero img={defaultImg}>
            <Banner title="Our Rooms">
                <Link className="btn-primary" to='/'>
                    Return Home
                </Link>
            </Banner> 
        </StyledHero>
        <RoomContainer/>
        </>
    )
}

export default Rooms


