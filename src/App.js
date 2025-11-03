import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import ScreenContainer from './components/screenContainer';

function App() {
  const featuredJobs = Array(5).fill(true);
  const recommendedJobs = Array(10).fill(false);
  const latestJobs = Array(10).fill(false);

  return (
    <>
      <Header />
      <div className='bg-[#F4F4F4]'>
        <ScreenContainer>
          <div className="flex flex-col lg:flex-row gap-[24px] pt-[25px] ">
            <div className='w-full lg:w-[26%]'>
              <Sidebar />
            </div>

            <div className="w-full lg:w-[73%]">
              <SearchBar />

              
              <div className="mb-[36px]">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <h2 className="profile font-normal text-[#333333]">Featured Jobs</h2>
                  <a href="#" className="description text-primary font-normal underline">
                    See Featured Jobs
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[16px]">
                  {featuredJobs.map((_, index) => (
                    <JobCard key={index} promoted={true} />
                  ))}
                </div>
              </div>

            
              <div className="mb-[50px]">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <h2 className="profile font-normal text-[#333333]">Recommended Jobs</h2>
                  <a href="#" className="description text-primary font-normal underline">
                    See Recommended Jobs
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[16px] mb-[15px]">
                  {recommendedJobs.slice(0, 5).map((_, index) => (
                    <JobCard key={index} />
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[16px]">
                  {recommendedJobs.slice(5).map((_, index) => (
                    <JobCard key={index} />
                  ))}
                </div>
              </div>

            
              <div className="mb-[70px]">
                <div className="flex items-center gap-[15px] mb-[15px]">
                  <h2 className="profile font-normal text-[#333333]">Latest Jobs</h2>
                  <a href="#" className="description text-primary font-normal underline">
                    See Latest Jobs
                  </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[16px] mb-[15px]">
                  {latestJobs.slice(0, 5).map((_, index) => (
                    <JobCard key={index} />
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[16px]">
                  {latestJobs.slice(5).map((_, index) => (
                    <JobCard key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScreenContainer>
      </div>
    </>
  );
}

export default App;
