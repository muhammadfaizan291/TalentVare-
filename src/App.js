import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      
      <Header /> 

      <div className="flex gap-[24px] pt-[25px] pl-[50px] pr-[49px]">
        <Sidebar /> 

      
         <div className="flex-1">
        
          <SearchBar />
           <div className="mb-[36px]">
            <div className="flex items-center gap-[15px] mb-[15px]">
              <h2 className="text-xl font-bold text-gray-900">Featured Jobs</h2>
              <a href="#" className="text-sm text-primary font-medium underline">
                See Featured Jobs
              </a>
            </div>

            <div className="grid grid-cols-5 gap-[16px]">
              <JobCard promoted={true} />
              <JobCard promoted={true} />
              <JobCard promoted={true} />
              <JobCard promoted={true} />
              <JobCard promoted={true} />
            </div>
          </div>
          
          <div className="mb-[50px]">
            <div className="flex items-center gap-[15px] mb-[15px]">
              <h2 className="text-xl font-bold text-gray-900">Recommended Jobs</h2>
              <a href="#" className="text-sm text-primary font-medium underline">
                See Recommended Jobs
              </a>
            </div>
            <div className="grid grid-cols-5 gap-[16px] mb-[15px]">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>

            <div className="grid grid-cols-5 gap-[16px]">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>

          <div className="mb-[70px]">
         <div className="flex items-center gap-[15px] mb-[15px]">
              <h2 className="text-xl font-bold text-gray-900">Latest Jobs</h2>
              <a href="#" className="text-sm text-primary font-medium underline">
                See Latest Jobs
              </a>
            </div>

            <div className="grid grid-cols-5 gap-[16px] mb-[15px]">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>

            <div className="grid grid-cols-5 gap-[16px]">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default App;
