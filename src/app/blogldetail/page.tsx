import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'

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
    <div className='pl-24 flex gap-6 '>
        <Image src={"/image/magn.svg"} alt='alt' width={24} height={24}/>
        <Image src={"/image/user.svg"} alt='alt' width={24} height={24}/>
        <Image src={"/image/tote.svg"} alt='alt' width={24} height={24}/>
        
        
    </div>

    <div className='head'>
        <Image src={"/image/unsplash.svg"} alt='hero' width={1920} height={410}/>
        </div>
       <div className='txt pt-24 ml-12'> <Image className=' ' src={"/image/bdetail.svg"} alt='hero'width={197} height={28}/></div>

       <div className='pb-16 flex'> 
        <div>
        <div className='pl-44 pt-28'><Image src={"/image/blogc1.svg"} alt='hero' width={872} height={830}/></div>
        <div className='pl-44 pt-12'><Image src={"/image/blogc2.svg"} alt='hero' width={872} height={830}/></div>
        <div className='pl-44 pt-12'><Image src={"/image/blogc3.svg"} alt='hero' width={872} height={830}/></div>
        <div className='pl-44 pt-12'><Image src={"/image/blogc4.svg"} alt='hero' width={872} height={830}/></div></div>
        <div className='pl-12 pt-24'><Image src={"/image/ide.svg"} alt='hero' width={424} height={2510}/></div>
       </div>



     <Footer/>
    </div>
  )
}

export default page