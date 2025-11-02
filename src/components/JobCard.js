import React from 'react';

const JobCard = ({ promoted = false }) => {
  return (
    <div className="bg-white rounded-[10px]  py-[10px] px-[20px] ">
      
    
      {promoted && (
        <div className="mb-[5px]">
          <span className=" text-xs font-medium text-gray-600  ">
            Promoted
          </span>
        </div>
      )}
  
      <div className="flex gap-[10px]  mb-[5px]">
        <div className='text-start'> 
         <img
          src="/teamslogo.svg"
          alt="Microsoft Teams"
          className='w-[50px] h-[50px]'
         /> 
        </div>
        <div>
         <h3 className="text-[15px] font-semibold text-gray-900 mb-[2px] whitespace-nowrap">UI/UX Designer</h3>
          <p className="text-sm text-gray-600">Teams</p>
        </div>
      </div>
  
      <div className="flex items-center gap-[10px] mb-[5px]">
       <img
        src='/location.svg'
        alt='Location'
        className='w-[9.6px] h-[12px]'
       />
        <span className="text-sm text-gray-600 whitespace-nowrap">Seattle, USA (Remote)</span>
      </div>
  
      <div className="flex items-center gap-[10px] mb-[5px]">
       <img
        src='/time.svg'
        alt='Time'
        className='w-[12px] h-[12px]'
       />
        <span className="text-sm text-gray-600 whitespace-nowrap">
          1 day ago | <span className="text-primary">22 applicants</span>
        </span>
      </div>
  
      <div className="flex items-center gap-[20px]">
        <button className="flex-1 bg-primary text-white py-[10px] px-[30px] rounded-[6.13px] text-sm font-medium  whitespace-nowrap">
          Apply Now
        </button>
        <button>
          <img
            src='./save.svg'
            alt='Save'
            className='w-[11.43px] h-[16px]'
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;