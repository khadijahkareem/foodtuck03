import Footer from '@/components/Footer'
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
    <div className='pl-24 flex gap-6 '>
        <Image src={"/image/magn.svg"} alt='alt' width={24} height={24}/>
        <Image src={"/image/user.svg"} alt='alt' width={24} height={24}/>
        <Image src={"/image/tote.svg"} alt='alt' width={24} height={24}/>
    </div>
    </div>
    <div className='head'>
        <Image src={"/image/unsplash.svg"} alt='hero' width={1920} height={410}/>
        <div className='txt text-white text-[48px] font-bold'> Our Menu</div>
        
    </div>
    <div className='txt'> <Image className='pt-40 pl-10' src={"/image/home.svg"} alt='hero' width={129} height={28}/></div>
    <div className='bg-white p-24'>
        <div className='p-24 '>
            <div><Image src={"/image/startmenu.svg"} alt='hero' width={1320} height={628}/></div>
            
        
            <div><Image className='pt-24' src={"/image/startmen.svg"} alt='hero' width={1320} height={628}/></div></div>
    </div>
    <div><Image src={"/image/custom.svg"} alt='hero'width={1923} height={468}/></div>
    <div className='flex p-24'>
        <div className='pl-28 pt-24'><Image src={"/image/desrt.svg"} alt='hero' width={448} height={626}/></div>
        <div className='p-24'><Image src={"/image/cofe.svg"} alt='hero' width={24} height={24}/></div>
        <div className='text-[48px]'>Dessert</div>
    </div>
        
    <Footer/>  
    </div>
  )
}

export default page