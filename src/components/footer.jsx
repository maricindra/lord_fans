import React from 'react';
import Playlist from './Playlist';
import Spline from '@splinetool/react-spline';


function Footer() {
  return (

      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-golden_old center font-cocogothic tracking-[0.4em] uppercase'>The Lord of the ring</h1>

        <div className='relative w-full h-40'>
        <h3>One Ring to rule them all</h3>
        <Spline className="w-10 h-10 flex flex-col mx-auto gap-10 "
        scene="https://prod.spline.design/dEMJaIsLBCWJx-2w/scene.splinecode" />
        <h3>and the Journey through Middle-earth</h3></div>
  
      
    <Playlist/>
</div>
  );
}

export default Footer;