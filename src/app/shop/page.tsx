import React from 'react'

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

    </div>
  )
}

export default page
