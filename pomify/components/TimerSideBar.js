import SetPomodoro from './SetPomodoro';

function TimerSidebar() {
  
  return (
    <div className='container flex flex-col space-y-12 items-center text-white p-5 h-screen border-gray-900 text-xs lg:text-sm border-l overflow-y-scroll scrollbar-hide max-w-[12rem] lg:max-w-[15rem] md:inline-flex pb-40'>
      <div className='mt-5'>
        <p className='text-xs'>Maximize your time with</p>
        <h1 className='text-5xl'>Pomify</h1>
      </div>

      <div className=''>
        <SetPomodoro />
      </div>
    </div>
  )
}

export default TimerSidebar;