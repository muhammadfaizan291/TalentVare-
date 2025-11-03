import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#F4F4F4]">

      <div className="bg-white rounded-[10px]  overflow-hidden mb-[10px]">

        <div className="h-[100px]   relative">
          <img src="/banner.svg" alt="Banner" className="w-full h-full " />
        </div>


        <div className="relative px-[55px] pb-[20px]">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 rounded-full border border-white overflow-hidden bg-white">

            <img src="/profile.svg" alt="Profile" className=' w-[86px] h-[86px] ' />

          </div>


          <div className="pt-[51px] text-center">
            <h2 className="profile font-medium text-[#333333] mb-1">Albert Flores</h2>
            <p className="description font-normal text-[#333333] mb-1 leading-tight">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
            </p>
            <p className="text-normal jobs text-[#585D6E]">Clinton, Maryland</p>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-[10px] border  p-[20px] mb-[10px]">

        <div className="flex items-center justify-between">
          <span className="description text-normal text-[#333333]">Profile Visitors</span>
          <span className="header text-normal text-primary">140</span>
        </div>
        <hr className='m-[10px] ' />
        <div className="flex items-center justify-between">
          <span className="description text-normal text-[#333333]">Resume Viewers</span>
          <span className="header text-normal text-primary">20</span>
        </div>
        <hr className='m-[10px] ' />
        <div className="flex items-center justify-between">
          <span className="description text-normal text-[#333333]">My Jobs</span>
          <span className="header text-normal text-primary">88</span>
        </div>

      </div>


      <div className="bg-white rounded-[10px] border  p-[10px]">
        <div className="flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="header font-medium  text-[#333333]">My calendar</h3>
            <p className="description font-normal text-[#737A91]">Upcoming interviews</p>
          </div>
          <img src="/dropdown.svg" alt="Dropdown" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


