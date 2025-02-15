import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <div>
        <div className='bg-black flex justify-center py-6'>
    <div className="text-[#ff9f0d] text-2xl">Food</div>
    <div className="  text-white text-2xl ">tuck</div>
    <div className="bg-black">
        <div className="flex gap-[30px] text-white pl-24">
        <div className="">home</div>
        <a href="/menu" className="">menu</a>
        <div className="">Blog</div>
        <div className="">Pages</div>
        <div>About</div>
        <div>Shop</div>
        <div>Contact</div>
        </div>
    </div>
    </div>
    <div>
      <Image src={"/image/magn.svg"} alt='hero' width={24} height={24}/>
      <Image src={"/image/magn.svg"} alt='hero' width={24} height={24}/>
      <Image src={"/image/magn.svg"} alt='hero' width={24} height={24}/>
    

    <div className='head'>
        <Image src={"/image/unsplash.svg"} alt='hero' width={1920} height={410}/>
        </div>
       <div className='txt pt-24 ml-12'> <Image className=' ' src={"/image/bdetail.svg"} alt='hero'width={197} height={28}/></div>
       </div>
       <footer/>
       </div>

    

    
  )
}

export default page