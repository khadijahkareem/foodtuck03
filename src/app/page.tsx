import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return(
    <div className="">
    <div className= " bg-black pt-12 flex justify-center">
      <div className=" text-[#ff9f0d] font-[helvtica] text-2xl text-center">Food</div>
      <div className="  text-white font-[helvtica] text-2xl text-center">tuck</div>
      </div>
      <div className=" bg-black flex  px-24 pt-12 pb-6 ">
        <div className=" w-1/2 flex gap-[30px] text-white pt-6">
        <div className="">home</div>
        <a href="/menu" className="">menu</a>
        <div className="">Blog</div>
        <div className="">Pages</div>
        <div>About</div>
        <a href="/shop">Shop</a>
        <div>Contact</div>

        </div>
        <div className="text-white w-1/2 rounded-full border-2 border-[#ff9f0d] p-4 mr-22 mx-80 flex gap-[160px]">search
        <Image className="ml-24 mr-12" src={"/image/vector.svg"} alt="hero" width={24} height={24}/>
        </div>
        <a href='/chekout'><Image className="mr-32" src={"/image/handbag.svg"} alt="hero" width={24} height={24}/></a>
      </div>

      <div className="flex h-80% bg-black px-16">
        <div className="m-24">
        <div className="w-1/2 font-[greatvibes] text-[#ff9f0d] text-[32px] pb-4">Its Quick & Amusing!</div>
        <div className="flex pb-10">
        <div className="text-[#ff9f0d] text-6xl">Th</div>
        <div className="text-white text-6xl">e Art of speed food Quality</div>
        
        </div>
        <div className="text-white text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</div>
        <button className="bg-[#ff9f0d] rounded-full m-8 pb-4 pt-4 px-12 text-white">See Menu</button>
        </div>
        <div className="w-1/2"> <Image src={"/image/image1.svg"} alt="hero" width={877.8} height={670}/></div>
        
      </div>

      <div className="bg-black text-white flex px-16 p-12">
        <div className="w-1/2 m-12 flex-col justify-center item-start">
        <div className="text-[#ff9f0d] text-[32px] pb-4">About us</div>
        <div className="flex pb-4 ">
        <div className="text-[#ff9f0d] text-5xl ">We</div>
        <div className="text-5xl">Create the best foody product</div>
        </div>
        <div className="text-[16px] font-inter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat 
          fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. 
          Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
          <div className="flex gap-[24px]">
            <Image className="pt-12" src={"/image/check1.svg"} alt="hero" width={17} height={12.24}/>
            <div className="pt-12"> Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
          </div>
          <div className="flex gap-[24px]">
            <Image className="pt-8" src={"/image/check1.svg"} alt="hero" width={17} height={12.24}/>
            <div className="pt-8">  Quisque diam pellentesque bibendum non dui volutpat fringilla </div>
          </div>
          <div className="flex gap-[24px]">
            <Image className="pt-8" src={"/image/check1.svg"} alt="hero" width={17} height={12.24}/>
            <div className="pt-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
          <button className="bg-[#ff9f0d] rounded-full m-8 pb-4 pt-4 px-12 text-white">Read More</button>
         </div>
        <div className="w-1/2">
        <Image className="pb-4" src={"/image/unss.svg"}alt="hero" width={660} height={330} />
        <div className="flex gap-[24px]">
        <Image src={"/image/unsss.svg"} alt="hero" width={322} height={194} />
        <Image src={"/image/unsp.svg"} alt="hero" width={322} height={194}/></div>
        </div>

      </div>
      <div className="justify-center flex bg-black">
        <div className="bg-black">
          <div className="text-[#ff9f0d] text-3xl pl-32 pb-4"> Food Category</div>
          <div className="flex text-6xl">
            <div className="text-[#ff9f0d]">Ch</div>
            <div className="text-white">oose Food Iteam</div>
            </div>
          </div>
        </div>
      <div className="bg-black justify-center flex p-12">
          <Image src={"/image/image box.svg"} alt="hero" width={1320} height={329}/>
        </div>

        <div className="bg-black flex p-16 pl-32 pt-32 ">
          <div className="w-1/2 ">
          <div className="flex justify-center gap-[22px]">
          <Image src={"/image/unsplash1.svg"} alt="hero" width={362} height={356}/>
          <Image src={"/image/unsplash2.svg"} alt="hero" width={281} height={231}/></div>
          <div className="flex justify-center gap-[22px]">
          <Image src={"/image/unsplash3.svg"} alt="hero" width={244} height={306}/>
          <Image src={"/image/unsplash4.svg"} alt="hero" width={221} height={226}/>
          <div className="">
          <Image src={"/image/unsplash5.svg"} alt="hero" width={161} height={168}/>
          <Image className="pt-2" src={"/image/unsplash6.svg"} alt="hero" width={161} height={168}/></div>
          </div>
          </div>
          <div className="w-1/2 felx justify-center pl-32">
          <div  className="text-[#ff9f0d] text-[32px] pb-4">Why Choose us</div>
          <div className="flex ">
          <div className="text-[#ff9f0d] text-[48px]">Ex</div>
          <div className="text-white text-[48px]">ta ordinary taste And Experienced </div>
          </div>
          <div className="text-white pt-8 pr-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
             Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
             <div className="flex gap-[36px]">
             <div className="pt-8 orange-box ">
              <Image  src={"/image/recta.svg"} alt="hero" width={102} height={100}/>
             
             <div className="burger"> <Image src={"/image/hamburger.svg"} alt="hero" width={56} height={56}/></div>
             </div>
             <div className="pt-8 orange-box ">
              <Image src={"/image/recta.svg"} alt="hero" width={102} height={100}/>
             
             <div className="cookies"> <Image src={"/image/cookie.svg"} alt="hero" width={56} height={56}/></div>
             </div>
             <div className="pt-8 orange-box ">
              <Image src={"/image/recta.svg"} alt="hero" width={102} height={100}/>
             
             <div className="wine"> <Image src={"/image/wine.svg"} alt="hero" width={56} height={56}/></div>
             </div>
             </div>

             <div className=" flex gap-[56px] pl-4 pt-4">
             <div className="text-white">Fast Food</div>
             <div className="text-white pl-6">Lunch</div>
             <div className="text-white pl-8">Dinner</div>
             </div>
             <Image className="pt-12" src={"/image/years.svg"} alt="hero" width={374} height={93}/>
        </div>
        
      
    

    </div>
    <div className="bg-black p-12">
          <Image className="bg-black pl-44" src={"/image/menu.svg"} alt="hero" width={1320} height={656}/></div>


        <div className="  bg-black justify-center flex">
          <div className="text-[#ff9f0d] text-[32px] pt-4 ">chef</div></div>
          <div className="flex bg-black justify-center">
          <div className=" text-[#ff9f0d] text-[48px]">Me</div>
          <div className="text-white bg-black justify-center flex text-[48px]"> et Our Chef</div></div>

          <div className="flex bg-black gap-[32px] pl-44 pt-12">
            <div><Image src={"/image/chef card.svg"} alt="hero" width={312} height={391}/></div>
            <div><Image src={"/image/card 2.svg"} alt="hero" width={312} height={391}/></div>
            <div><Image src={"/image/card 3.svg"} alt="hero" width={312} height={391}/></div>
            <div><Image src={"/image/card 4.svg"} alt="hero" width={312} height={391}/></div>
          </div>
          <div className="bg-black justify-center flex">
          <button className="bg-black rounded-full border-[#ff9f0d]  border-2 m-8 pb-4 pt-4 px-12 text-white">See More</button></div>
        
        <div className="bg-black">
          <div className="text-[#ff9f0d] text-[32px] pl-44">Testimonials</div>
          <div className="text-white text-[48px] pl-44">What our client are saying</div>
        </div>
        <div className="bg-black justify-center flex pt-12 "><Image className="bg-white " src={"/image/text.svg"} alt="hero" width={797} height={286}/></div>
        <div className="bg-black justify-center flex p-16"><Image src={"/image/dot.svg"} alt="hero" width={86} height={16}/></div>

        <div><Image src={"/image/rest.svg"} alt="hero" width={1918} height={558}/></div>
        <div>
        <div className="bg-black justify-center flex">
          <div  className="text-[#ff9f0d] text-[32px] pt-16">Blog Post</div></div>
          <div className="flex bg-black justify-center ">
          <div className="text-[#ff9f0d] text-[48px]">La</div>
          <div className="text-white text-[48px]"> test News & Blog</div>
          </div></div>

          <div className="flex bg-black gap-[18px] pl-44 pt-12">
            <div className="">
              <Image className="" src={"/image/place.svg"} alt="hero" width={423} height={349}/>
              <div className="border-2 border-grey text-[#ff9f0d] pt-12 pl-6">10 February 2022 
              <div className="text-white text-[18px] w-[338px] h-[64px] pt-6">Pellentesque Non Efficitur Mi 
                Aliquam Convallis Mi Quis</div>
                <div>
                  <div className="flex">
                  <div className="text-white pt-12 w-1/2">Learn More</div>
                  <div className="w-1/2 p-12 flex gap-[8px]">
                    <Image src={"/image/thumbsup.svg"} alt="hero" width={20}height={20}/>
                    <Image src={"/image/shar2.svg"} alt="hero" width={20}height={20}/>
                    <Image src={"/image/shar1.svg"} alt="hero" width={20}height={20}/>
                  </div>
                  </div>
                </div>
                </div>
            </div>
            <div>
            <Image className="" src={"/image/place1.svg"} alt="hero" width={423} height={349}/>
            <div className="border-2 border-grey text-[#ff9f0d] pt-12 pl-6">10 February 2022 
              <div className="text-white text-[18px] w-[338px] h-[64px] pt-6">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</div>
                <div>
                  <div className="flex">
                  <div className="text-white pt-12 w-1/2">Learn More</div>
                  <div className="w-1/2 p-12 flex gap-[8px]">
                    <Image src={"/image/thumbsup.svg"} alt="hero" width={20}height={20}/>
                    <Image src={"/image/shar2.svg"} alt="hero" width={20}height={20}/>
                    <Image src={"/image/shar1.svg"} alt="hero" width={20}height={20}/>
                  </div>
                  </div>
                </div>
                </div>
            </div>
            <div><Image className="" src={"/image/place2.svg"} alt="hero" width={423} height={349}/>
            <div className="border-2 border-grey text-[#ff9f0d] pt-12 pl-6">10 February 2022 
              <div className="text-white text-[18px] w-[338px] h-[64px] pt-6">Curabitur rutrum velit ac congue malesuada</div>
                <div>
                  <div className="flex">
                  <div className="text-white pt-12 w-1/2">Learn More</div>
                  <div className="w-1/2 p-12 flex gap-[8px]">
                    <Image src={"/image/thumbsup.svg"} alt="hero" width={20}height={20}/>
                    <Image src={"/image/shar2.svg"} alt="hero" width={20}height={20}/>
                    <Image src={"/image/shar1.svg"} alt="hero" width={20}height={20}/>
                  </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
          <Footer/>
   </div>

        
        
          
       
  
  );
}