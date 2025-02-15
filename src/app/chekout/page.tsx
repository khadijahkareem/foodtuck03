import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className=''>
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
   

    <div className='head'>
        <Image src={"/image/unsplash.svg"} alt='hero' width={1920} height={410}/>
        <div className='txt text-white text-[48px] font-bold'> Cheekout Page</div>
        </div>
       <div className='txt'> <Image className=' pt-40 ml-12' src={"/image/checkout.svg"} alt='hero'width={197} height={28}/></div>
       <div className='flex gap-8 pb-16'>


        <div className='w-1/3 font-bold text-[20px] pl-44 pt-24 pb-18'>Shipping Address
        <div className='text-[16px] font-normal pt-8'>First name</div>
        <Image className='pt-2' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Email address</div>
        <Image className='pt-2' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Company</div>
        <Image className='pt-2' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>City</div>
        <Image className='pt-2' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Address 1</div>
        <Image className='pt-2' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='pt-8 text-[20px] font-bold'>Billing Address</div>
        <div><Image src={"/image/shippingaddress.svg"} alt='hero' width={194} height={22}/></div>
        <div className='pt-4 '><Image src={"/image/dropdown.svg"} alt='hero' width={424} height={56}/></div>
        </div>
        <div className='w-1/3 font-bold text-[20px] pl-20 pt-[98px] pb-18'>
        <div className='text-[16px] font-normal pt-8'>Last name</div>
        <Image className='pt-4' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Phone number</div>
        <Image className='pt-4' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Country</div>
        <Image className='pt-4' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Zip code</div>
        <Image className='pt-4' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='text-[16px] font-normal pt-8'>Address 2</div>
        <Image className='pt-2' src={"/image/box.svg"} alt='hero' width={424} height={56}/>
        <div className='pt-[42px] '><Image src={"/image/dropp.svg"} alt='hero' width={424} height={56}/></div>
        </div>
        <div className='w-1/3 pt-28'><Image src={"/image/sideb.svg"} alt='alt' width={424} height={700}/></div>
       </div>


    
    </div>
    <Footer/>
    </div>
  )
};

export default page