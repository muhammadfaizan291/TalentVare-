import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b pr-[50.1px] pl-[49px] pt-[15px] pb-[16px] max-w-[1443px]">
      
      
 <div className="flex items-center justify-between">

        <div className="flex items-center gap-[37.81px]">
          
    
          <div className="flex items-center">
            <div className="w-[41.09px] h-[38.45px] text-center">
              <img
                alt='Logo'
                src="/logo.svg" 
              />
            </div>
          </div>
            
     < div className='flex gap-[63px]'>
          <nav className="flex items-center gap-[25px]">
            <a 
              href="#" 
              className="text-[16px] font-medium text-[#0154AA] whitespace-nowrap">
              Find Jobs
            </a>
            <a 
              href="#" 
              className="text-[16px] text-[#737A91] hover:text-gray-900 whitespace-nowrap">
              Top Companies
            </a>
            <a 
              href="#" 
              className="text-[16px] text-[#737A91] hover:text-gray-900 whitespace-nowrap">
              Job Tracker
            </a>
            <a 
              href="#" 
              className="text-[16px] text-[#737A91] hover:text-gray-900 whitespace-nowrap" >
              My Calendar
            </a>
             <a href="#" className="text-[16px] text-[#737A91] hover:text-gray-900">Documents</a>
            <a href="#" className="text-[16px] text-[#737A91] hover:text-gray-900">Messages</a>
            <a href="#" className="text-[16px] text-[#737A91] hover:text-gray-900">Notifications</a>
          </nav>
        
           <div className='flex gap-[15px]' >
          <div className="flex items-center gap-[20px] py-[11px] px-[20px] border border-[#F6F9FF] bg-[#F6F9FF] rounded-[8px] text-sm">
            <div className='text-center w-[15.5px] h-[15.52px] flex-shrink-0'>
              <img
                alt='Search Icon'
                src="/search.svg" 
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className='bg-[#F6F9FF] focus:outline-none w-[200px]'
              />
            </div>
          </div>
         
          <div className='flex gap-[13px] items-center'>
            <button className="bg-[#0154AA] text-white px-[20px] py-[10px] rounded-[8px] text-sm font-medium whitespace-nowrap">
              Resume Builder
            </button>
            <div className="w-[38px] h-[38px] rounded-full overflow-hidden flex-shrink-0">
              <img src="/hicon.svg" alt="Profile" className="object-cover" />
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        
      
    </header>
  );
};

export default Header;