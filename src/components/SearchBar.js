import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-[#F4F4F4] pt-[14px]">
      
      <div className="mb-[21px]">
        <h1 className="text-2xl font-bold mb-[5px]">
          Find your Dream Job, <span className="text-primary">Albert!</span>
        </h1>
        <p className="text-sm text-gray-600">
          Explore the latest job openings and apply for the best opportunities available today!
        </p>
      </div>

  
      <div className="flex items-center justify-between mb-[21px] bg-white p-[20px] rounded-[10px] ">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="w-full py-[10px] border border-white rounded-lg text-sm focus:outline-none focus:border-primary"
          />
        </div>
      <div className="w-[200px] relative">
  <select className="w-full px-[28px] py-[9.5px] border rounded-lg text-sm text-gray-600 focus:outline-none appearance-none bg-white">
    <option>Select Location</option>
   
  </select>
  
  <img
    src="/dropdown.svg"
    alt="Location Icon"
    className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" 
  />
</div>
         <div className="w-[200px] relative">
  <select className="w-full px-[28px] py-[9.5px] border rounded-lg text-sm text-gray-600 focus:outline-none  appearance-none bg-white">
            <option>Job Type</option>
           
          </select>
          <img
    src="/dropdown.svg"
    alt="Location Icon"
    className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" 
  />
        </div>
        <button className="bg-primary text-white px-[35.75px] py-[10px] rounded-[8px] text-sm font-medium  transition-colors flex items-center gap-[10px]">
          <img
            src="/search-white.svg"
            alt="Search Icon"
            className="w-[15.5px] h-[15.52px]"
          />
          Search
        </button>
      </div>

      <div className="flex items-center gap-[15px]">
        <span className="text-sm text-gray-600">Similar:</span>
        <div className="flex gap-[12px]">
          <button className="px-[15px] py-[8px] border border-gray-300 rounded-[5px] text-sm text-gray-700 ">
            Frontend
          </button>
          <button className="px-[15px] py-[8px] border border-gray-300 rounded-[5px] text-sm text-gray-700 ">
            Backend
          </button>
          <button className="px-[15px] py-[8px] border border-gray-300 rounded-[5px] text-sm text-gray-700 ">
            Graphic Designer
          </button>
        </div>
      </div>
      <hr className='my-[18px]'/>
    </div>
  );
};

export default SearchBar;


