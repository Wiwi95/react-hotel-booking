import React from 'react'
import Hero from '../Components/Hero';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import Title from '../Components/Title';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
import StyledHero from '../Components/StyledHero';
export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
          <Banner title="Luxurious Rooms" subtitle="Delux rooms starting at $299">
              <Link className="btn-primary" to='/rooms'>
                Our Rooms
              </Link>
          </Banner>  
        </Hero>
        <Services/>
        <FeaturedRooms/>
      </>
    )
}
