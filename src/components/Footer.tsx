import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <div className=' flex bg-black pt-28 pl-44'>
            <div>
            <div className='w-1/2 text-white w-[439px] h-[40px] text-[32px] pb-12'>Still You Need Our Support ?</div>
            <div className='text-white w-[458px] h-[24px]'>Don’t wait make a smart & logical quote here. Its pretty easy.</div>
            </div>

            <div className='w-1/2'>
            <div className="flex pl-20">
           <div> <h1 className="border-2 border-black justify-right bg-[#ff9f0d] p-4 pr-36 rounded-[5px] text-white">Enter your email </h1></div>
           <button className=" border-black border-2 bmx-22 pl-22 rounded-[5px] px-8 bg-white text-[#ff9f0d]">Subscribe Now</button>
           </div>
            </div>
        </div>
        <div className='bg-black pl-44 pt-12'>
            <Image className='' src={"/image/line2.svg"} alt='hero' width={1170} height={7901.35}/>
        </div>
        <div className='bg-black text-white flex gap-[120px] pt-16 pl-44'>
            <div className='pl-22'>About Us.
                <div className='text-white w-[312px] h-[95px] pt-12'>orporate clients and leisure travelers has
                     been relying on Groundlink for dependab
                     safe, and professional chauffeured car
                     service in major cities across World.</div>
               
                    
                    <div className="pt-16 orange-box flex ">
              <Image className='pt-4' src={"/image/recta.svg"} alt="hero" width={102} height={100}/>
             
             <div className="clock pt-12"> <Image src={"/image/clock.svg"} alt="hero" width={56} height={56}/></div>
             
             <div className='text-white pl-4 pt-6'>
             <div> Opening Houres</div>
             <div>Mon - Sat(8.00 - 6.00)</div> 
             <div>Sunday - Closed</div></div>
             
            </div>
            </div>
            <div className='pl-[22px]'>Useful Links
                <div  className='pt-6'>About</div>
                <div className='pt-6'>News</div>
                <div className='pt-6'>Partners</div>
                <div className='pt-6'>Team</div>
                <div className='pt-6'>Team</div>
                <div className='pt-6'>Menu</div>
                <div className='pt-6'>Contacs</div>
            </div>
            <div className='pl-[22px]'>Help?
            <div  className='pt-6'>FAQ</div>
                <div className='pt-6'>Term & conditions</div>
                <div className='pt-6'>Reporting</div>
                <div className='pt-6'>Documentation</div>
                <div className='pt-6'>Support </div>
                <div className='pt-6'>Policy</div>
                <div className='pt-6'>Privacy</div></div>

            <div className='text-white pl-[22px]'>Recent Post
                <Image className='pt-6' src={"/image/post.svg"} alt='alt' width={244} height={53}/>
                <Image className='pt-6' src={"/image/post2.svg"} alt='alt' width={244} height={53}/>
                <Image className='pt-6' src={"/image/post3.svg"} alt='alt' width={244} height={53}/>
                </div>  
                  
        </div>
        <div className='gry-box'>
            <div className='text-white pt-6 pl-44'>Copyright © 2022 by Ayeman. All Rights Reserved.</div>
                    <div className='icon'> <Image src={"/image/icon1.svg"} alt='hero' width={240} height={24}/></div>
                    </div>
    </div>
  )
}

export default Footer