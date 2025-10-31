import React from 'react'

const Card = () => {
  return (
    <div className='relative max-w-[346px] rounded-[10px] border pb-[20px] mx-auto  '>
        <div >
           <img
  alt='Banner'
  src="/banner.svg" 
  className=' rounded-t-[8px]'
/>

            </div>
            <div className='mt-[51px]' >
           <img
  alt='Profile'
  src="/profile.svg" 
  className='absolute top-[50px] left-[120px]'
/>

            </div>
            <div className='text-center'>

<h1 className='font-bold'>Albert Flores
    </h1>
    <p>
        Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...
    </p>
    <p className='text-[gray]'>
        Clinton, Maryland
    </p>




                     </div>
                     



    </div>
  )
}

export default Card