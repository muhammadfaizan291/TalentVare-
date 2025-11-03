'use client';
import React, { useState } from 'react';
import ScreenContainer from './screenContainer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: 'Find Jobs', href: '#', active: true },
    { name: 'Top Companies', href: '#' },
    { name: 'Job Tracker', href: '#' },
    { name: 'My Calendar', href: '#' },
    { name: 'Documents', href: '#' },
    { name: 'Messages', href: '#' },
    { name: 'Notifications', href: '#' },
  ];

  return (
    <header className="py-[16px] bg-white shadow-sm relative">
      <ScreenContainer>
        <div className="flex justify-between items-center gap-[10px]">
          
          <div className="w-[41px] h-[38px] text-center shrink-0">
            <img alt="Logo" src="/logo.svg" />
          </div>

          
          <div className="hidden lg:flex gap-[63px]">
            <nav className="flex items-center gap-[25px]">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`header font-medium whitespace-nowrap hover:text-gray-900 ${
                    item.active
                      ? 'text-[#0154AA] font-medium'
                      : 'text-[#737A91] font-normal'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex gap-[8px]">
            <div className="flex items-center gap-[20px] py-[11px] px-[20px] border border-[#F6F9FF] bg-[#F6F9FF] rounded-[8px] font-normal description">
              <div className="text-center w-[15.5px] h-[15.52px] flex-shrink-0">
                <img alt="Search Icon" src="/search.svg" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-[#F6F9FF] focus:outline-none max-w-[160px] w-full font-normal description"
                />
              </div>
            </div>

            <div className="flex gap-[13px] items-center">
              <button className="bg-[#0154AA] text-white px-[10px] py-[10px] rounded-[8px] header font-normal whitespace-nowrap">
                Resume Builder
              </button>
              <div className="w-[38px] h-[38px] rounded-full overflow-hidden flex-shrink-0">
                <img src="/hicon.svg" alt="Profile" className="object-cover" />
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-[10px] text-[#0154AA]"
          >
            =
          </button>
        </div>
      </ScreenContainer>
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
          <div className="fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-[#0154AA]">Menu</h2>
              <button onClick={() => setIsDrawerOpen(false)}>
x
              </button>
            </div>

            <nav className="flex flex-col gap-[10px]">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-normal ${
                    item.active
                      ? 'text-[#0154AA]'
                      : 'text-[#737A91] hover:text-[#0154AA]'
                  }`}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-[30px] border-t border-gray-200">
              <button className="w-full bg-[#0154AA] text-white py-[10px] rounded-[8px] font-normal">
                Resume Builder
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
