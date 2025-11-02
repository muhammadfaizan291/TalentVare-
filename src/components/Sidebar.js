import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-[346px] bg-[#F4F4F4]">
      
      <div className="bg-white rounded-[10px] border overflow-hidden mb-[10px]">
      
        <div className="h-[100px]  relative">
          <img src="/banner.svg" alt="Banner" className="w-full h-full " />
        </div>

  
        <div className="relative px-[55px] pb-[20px]">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 rounded-full border border-white overflow-hidden bg-white">
            
              <img src="/profile.svg" alt="Profile" className=' w-[86px] h-[86px] ' />
            
          </div>

        
          <div className="pt-[51px] text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Albert Flores</h2>
            <p className="text-sm text-gray-700 mb-1 leading-tight">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
            </p>
            <p className="text-sm text-gray-500">Clinton, Maryland</p>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-[10px] border border-gray-200 p-[20px] mb-[10px]">
      
          <div className="flex items-center justify-between">
            <span className="text-[15px] text-gray-700">Profile Visitors</span>
            <span className="text-[15px] font-semibold text-primary">140</span>
          </div>
          <hr className='m-[10px] '/>
          <div className="flex items-center justify-between">
            <span className="text-[15px] text-gray-700">Resume Viewers</span>
            <span className="text-[15px] font-semibold text-primary">20</span>
          </div>
            <hr className='m-[10px] '/>
          <div className="flex items-center justify-between">
            <span className="text-[15px] text-gray-700">My Jobs</span>
            <span className="text-[15px] font-semibold text-primary">88</span>
          </div>
       
      </div>

    
      <div className="bg-white rounded-[10px] border  p-[10px]">
        <div className="flex items-center justify-between cursor-pointer">
          <div>
            <h3 className="text-[15px] font-semibold text-gray-900">My calendar</h3>
            <p className="text-sm text-gray-500">Upcoming interviews</p>
          </div>
          <img src="/dropdown.svg" alt="Dropdown" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


