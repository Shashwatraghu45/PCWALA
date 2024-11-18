import React from 'react'
import MainCarousel from '../components/HomeCarousel'
import PcCardCarousel from '../components/PcCardCarousel'

function Home() {
  return (
    <div>
      <MainCarousel/>
      <div>
        <PcCardCarousel/>
      </div>
    </div>
  )
}

export default Home