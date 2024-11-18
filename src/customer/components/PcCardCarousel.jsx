import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import PcCard from "./PcCard"
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function PcCardCarousel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = [1,1,1,1,1].map((item)=><PcCard/>)
    
  return (
    <div className='relative px-4 lg:px-8'> 
      <div className='relative p-5 justify-center'>

        <AliceCarousel
            items={items}
            infinite
            disableButtonsControls
            responsive={responsive}
      />
      <Button variant='contained' className='z-50' sx={{position:'absolute',top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90deg)"}}  aria-label='next'>
        <KeyboardArrowLeftIcon/>
      </Button>
      </div>
      
  </div>
  )
}

export default PcCardCarousel