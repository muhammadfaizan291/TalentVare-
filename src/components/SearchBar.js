import React from 'react';

const SearchBar = () => {
  return (
    <div className=" pt-[14px]">

      <div className="mb-[21px]">
        <h1 className="section-heading font-medium mb-[5px]">
          Find your Dream Job, <span className="text-primary section-heading font-semibold">Albert!</span>
        </h1>
        <p className="font-normal description text-[#585D6E]">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>


      <div className="flex items-center justify-between mb-[21px] bg-white p-[20px] rounded-[10px] ">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="w-full py-[10px] border border-white  description font-normal focus:outline-none focus:border-primary"
          />
        </div>
        <div className="w-[200px] relative">
          <select className="w-full px-[28px] py-[9.5px] border  description font-normal text-[#585D6E] focus:outline-none appearance-none bg-white">
            <option>Select Location</option>

          </select>

          <img
            src="/dropdown.svg"
            alt="Location Icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="w-[200px] relative">
          <select className="w-full px-[28px] py-[9.5px] border description font-normal text-sm text-[#585D6E] focus:outline-none  appearance-none bg-white">
            <option>Job Type</option>

          </select>
          <img
            src="/dropdown.svg"
            alt="Location Icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <button className="bg-primary text-white px-[35.75px] py-[10px] rounded-[8px] description font-normal  transition-colors flex items-center gap-[10px]">
          <img
            src="/search-white.svg"
            alt="Search Icon"
            className="w-[15.5px] h-[15.52px]"
          />
          Search
        </button>
      </div>

      <div className="flex items-center gap-[15px]">
        <span className="font-medium description text-[#737A91]">Similar:</span>
        <div className="flex gap-[12px]">
          <button className="px-[15px] py-[8px] border border-gray-300 rounded-[5px] jobs font-normal text-[#737A91] ">
            Frontend
          </button>
          <button className="px-[15px] py-[8px] border border-gray-300 rounded-[5px]  jobs font-normal text-[#737A91] ">
            Backend
          </button>
          <button className="px-[15px] py-[8px] border border-gray-300 rounded-[5px]  jobs font-normal text-[#737A91] ">
            Graphic Designer
          </button>
        </div>
      </div>
      <hr className='my-[18px]' />
    </div>
  );
};

export default SearchBar;


