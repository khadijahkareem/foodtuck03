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
    <div className='txt'> <Image className='pt-40 ml-12' src={"/image/home.svg"} alt='hero' width={129} height={28}/></div>
    <div className='bg-white p-24'>
        <div className='p-24 '>
            <div><Image src={"/image/startmenu.svg"} alt='hero' width={1320} height={628}/></div>
            
        
            <div><Image className='pt-24' src={"/image/startmen.svg"} alt='hero' width={1320} height={628}/></div></div>
    </div>
    <div><Image src={"/image/custom.svg"} alt='hero'width={1923} height={468}/></div>

    <div className='flex'>
    <div className='pt-24 pl-24 w-1/2'>
        <div className='pl-28 pt-24'><Image src={"/image/desrt.svg"} alt='hero' width={448} height={626}/></div>
        
    </div>
    <div className='w-1/2'><Image className='pt-44' src={"/image/cofe.svg"} alt='hero' width={24} height={24}/>
        <div className='text-[48px]  font-bold '>Dessert</div>
        <div className='flex gap-64'>
        <div className='[24px] pt-4 font-bold'>Fig and lemon cake</div>
        <div className='text-[#ff9f0d]  pt-4'>32$</div></div>
        <div className='pt-2'>Toasted French bread topped with romano, cheddar </div>
        <div className='pt-2'>560 CAL</div>

        <div className='flex gap-64 pt-6'>
        <div className='[24px] pt-4 font-bold'>Creamy mascarpone cake</div>
        <div className='text-[#ff9f0d]  pt-4'>43$</div></div>
        <div className='pt-2'>Gorgonzola, ricotta, mozzarella, taleggio </div>
        <div className='pt-2'>700 CAL</div>

        <div className='flex gap-64 pt-6'>
        <div className='[24px] pt-4 font-bold'>Pastry, blueberries, lemon juice</div>
        <div className='text-[#ff9f0d]  pt-4'>14$</div></div>
        <div className='pt-2'>Ground cumin, avocados, peeled and cubed </div>
        <div className='pt-2'>1000 CAL</div>

        <div className='flex gap-64 pt-6'>
        <div className='[24px] pt-4 font-bold'>Pain au chocolat</div>
        <div className='text-[#ff9f0d]  pt-4'>35$</div></div>
        <div className='pt-2'>Spreadable cream cheese, crumbled blue cheese</div>
        <div className='pt-2'>560 CAL</div>

        </div>
        </div>

        <div className='flex pb-24 pt-24 pl-24'>
    
    <div className=' w-1/2 pl-24'><Image className='' src={"/image/cofe.svg"} alt='hero' width={24} height={24}/>
        <div className='text-[48px]  font-bold '>Drinks</div>
        <div className='flex gap-64'>
        <div className='[24px] pt-4 font-bold'>Caffè macchiato</div>
        <div className='text-[#ff9f0d]  pt-4'>32$</div></div>
        <div className='pt-2'>Toasted French bread topped with romano, cheddar </div>
        <div className='pt-2'>560 CAL</div>

        <div className='flex gap-64 pt-6'>
        <div className='[24px] pt-4 font-bold'>Aperol Spritz Capacianno</div>
        <div className='text-[#ff9f0d]  pt-4'>43$</div></div>
        <div className='pt-2'>Gorgonzola, ricotta, mozzarella, taleggio </div>
        <div className='pt-2'>700 CAL</div>

        <div className='flex gap-64 pt-6'>
        <div className='[24px] pt-4 font-bold'>Caffe Latte Campuri</div>
        <div className='text-[#ff9f0d]  pt-4'>14$</div></div>
        <div className='pt-2'>Ground cumin, avocados, peeled and cubed </div>
        <div className='pt-2'>1000 CAL</div>

        <div className='flex gap-64 pt-6'>
        <div className='[24px] pt-4 font-bold'>Tormentoso BushTea Pintoage</div>
        <div className='text-[#ff9f0d]  pt-4'>35$</div></div>
        <div className='pt-2'>Spreadable cream cheese, crumbled blue cheese</div>
        <div className='pt-2'>560 CAL</div>

        </div>
        <div className=' w-1/2'>
        <div className=' '><Image src={"/image/drink.svg"} alt='hero' width={448} height={626}/></div>
        
        </div>
        </div>

    
     <div className='justify-center flex'>Partners & Clients</div>
     <div className='justify-center flex font-bold text-[48px]'>We work with the best pepole</div>
     <div className='pl-44 p-12'><Image src={"/image/logo.svg"} alt='hero' width={1322}height={129.37}/></div>
     
    
    <Footer/> 
    </div>
    
  )
}

export default page