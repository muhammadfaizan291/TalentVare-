import React from 'react';

const JobCard = ({ promoted = false }) => {
  return (
    <div className="bg-white rounded-[10px]  py-[10px] px-[20px] ">


      {promoted && (
        <div className="mb-[5px]">
          <span className="promoted font-medium text-gray-600  ">
            Promoted
          </span>
        </div>
      )}

      <div className="flex gap-[10px] items-center  mb-[5px]">
        <div className=''>
          <img
            src="/teamslogo.svg"
            alt="Microsoft Teams"
            className='w-[50px] h-[50px] '
          />
        </div>
        <div>
          <h3 className="description font-normal  text-gray-900 mb-[2px] whitespace-nowrap">UI/UX Designer</h3>
          <p className="font-medium jobs text-[#333333]">Teams</p>
        </div>
      </div>

      <div className="flex items-center gap-[10px] mb-[5px]">
        <img
          src='/location.svg'
          alt='Location'
          className='w-[9.6px] h-[12px] shrink-0'
        />
        <span className="jobs font-normal text-[#585D6E] whitespace-nowrap">Seattle, USA (Remote)</span>
      </div>

      <div className="flex items-center gap-[10px] mb-[15px]">
        <img
          src='/time.svg'
          alt='Time'
          className='w-[12px] h-[12px] shrink-0'
        />
        <span className="jobs font-normal  text-[#585D6E] whitespace-nowrap">
          1 day ago | <span className="jobs font-normal  text-primary">22 applicants</span>
        </span>
      </div>

      <div className="flex items-center gap-[20px]">
        <button className=" bg-primary text-white py-[10px] px-[20px] rounded-[6.13px] jobs font-normal whitespace-nowrap">
          Apply Now
        </button>
        <button className='w-[12px] h-[16px] shrink-0'>
          <img
            src='./save.svg'
            alt='Save'
            className='w-full h-full'
          />
        </button>
      </div>
    </div>
  );
};

export default JobCard;