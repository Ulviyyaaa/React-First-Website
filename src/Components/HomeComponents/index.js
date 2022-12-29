import React from 'react'
import Footer from '../Footer'
import Blog from '../HomeComponents/Blog'
import Navbar from '../Navbar'
import BetterWay from './BetterWay'
import Bootstrap from './Bootstrap'
import Ceo from './Ceo'
import Production from './Products'

function HomeComponents() {
  return (
    <>
    <Navbar/>
    <Bootstrap/>
    <BetterWay/>
    <Ceo/>
    <Blog/>
    <Production/>
    <Footer/>
    </>
  )
}

export default HomeComponents