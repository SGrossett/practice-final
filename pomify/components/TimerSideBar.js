import Pomodoro from '../components/Pomodoro';

function TimerSidebar() {
  
  return (
    <div className='container flex flex-col items-center text-white p-5 h-screen border-gray-900 text-xs lg:text-sm border-r overflow-y-scroll scrollbar-hide sm:max-w-[12rem] lg:max-w-[15rem] md:inline-flex pb-40'>
      <h1 className='text-lg'>Pomodoro Timer</h1>
      <p className='text-sm'>Catchy description</p>

      <Pomodoro />
    </div>
  )
}

export default TimerSidebar;