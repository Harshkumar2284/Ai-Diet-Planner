import React, { useState } from 'react';

const Body = () => {
  return (
    <div className=' w-full h-fit flex flex-col items-center mb-20'>
      <div className='border border-black mt-20 w-4/5 h-96 rounded-2xl flex justify-between'>
        <div className='mt-10 ml-16'>
          <h1 className='text-6xl text-zinc-800 w-96 font-medium'>Put your diet on <span style={{ color: "#f07651" }}>autopilot.</span></h1>
          <p style={{width:"540px"}} className='text-md mt-5 text-zinc-600 font-semibold'>BiteBot creates personalized meal plans based on your food preferences, budget, and schedule. Reach your diet and nutritional goals with our calorie calculator, weekly meal plans, grocery lists and more.</p>
        </div>
        <img src="https://th.bing.com/th/id/OIP.qL95q2itDCWglyaiDuATJAHaE8?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
      </div>
      <div className='mt-20 w-4/5 flex flex-col items-center'>
        <h1 className='text-4xl text-zinc-700 font-bold'>Eating smart has never been easier</h1>
        <div className='ml-16 w-full mt-10 flex'>
          <div className='w-1/2 ml-5'>
            <div className='flex ml-10'>
              <div className='mt-4'>
                <img height={"100px"} width={"100px"} src="https://miro.medium.com/v2/resize:fit:1200/1*MGltW-LBO7Lm_RRnD6CkSw.jpeg" alt="" />
              </div>
              <div className='w-60'>
                <h1 className='mt-1 text-xl font-bold text-zinc-700'>Follow any eating style or create your own</h1>
                <p className='w-92'>
                  You can customize popular eating styles like vegan and paleo to match your needs and preferences.
                </p>
              </div>
            </div>
            <div className=' flex ml-10 mt-20'>
              <div className='ml-5'>
                <img src="https://www.freeiconspng.com/uploads/calendar-icon-png--0.png" height={"60px"} width={"60px"} alt="" />
              </div>
              <div className='w-60 ml-5'>
                <h1 className='text-xl font-bold text-zinc-700'>Take the anxiety out of picking what to eat</h1>
                <p className='w-92 mt-2'>
                  Make the important decisions ahead of time and on your own schedule. Then there's nothing to worry about when it's time to eat.
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex '>
              <div className='mt-4'>
                <img src="https://th.bing.com/th/id/OIP.fAOIfB-xMCjJfvyan_dlYgHaFj?w=256&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" width={"90px"} height={"90px"} alt="" />
              </div>
              <div style={{ top: "-50px" }}>
                <h1 className='mt-1 text-xl font-bold text-zinc-700'>Reduce food waste</h1>
                <p className='w-92'>
                  Planning ahead means less produce going bad in the fridge. Add what you already own to the virtual pantry and our algorithms will use it up with priority.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='mt-9'>
                <img src="https://www.bing.com/th/id/OIP.S_9z64VzAlWJwciXoEvl1QHaHa?w=184&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc5&dpr=1.3&pid=3.1&rm=2" width={"90px"} height={"90px"} alt="" />
              </div>
              <div>
                <h1 className='mt-14 text-xl font-bold text-zinc-700'>Automatic Grocery Lists</h1>
                <p className='w-92 mt-2'>No more skipping meals because you're missing ingredients. Review your meals for the week and the grocery list automatically updates. Then get it delivered with our Instacart or AmazonFresh integration.</p>
              </div>
            </div>
          </div>
        </div>
        <button className='text-2xl mt-10 pt-1 pb-2 font-semibold px-7 rounded-xl text-white hover:cursor-pointer' style={{ backgroundColor: "#f07651" }}>Create a free account</button>
      </div>
    </div>
  );
};

export default Body;