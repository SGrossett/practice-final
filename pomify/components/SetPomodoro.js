import { useState } from 'react';
  
const SetPomodoro = ({startPomodoro,
  setStartPomodoro,
  studyTime,
  setStudyTime,
  breakTime,
  setBreakTime,
  longBreak,
  setLongBreak,}) => {
  const [timer, setTimer] = useState({
    pomodoro: 25,
    short: 5,
    long: 15,
    active: 'pomodoro'
  });

  const changeTime = (time) => {
    const { name, value } = time.target;

    if (name === 'timer') {
      setTimer({ ...timer, pomodoro: parseInt(value) });
    } else if (name === 'shortBreak') {
      setTimer({ ...timer, short: parseInt(value) });
    } else if (name === 'longBreak') {
      setTimer({ ...timer, long: parseInt(value) });
    }
  };
  console.log(timer)
  
  const submitTimer = (event) => {
    event.preventDefault();
  }

  return (
    <div className=''>
      <form className='flex flex-col' onCLick={submitTimer} noValidate>
        <div className={`w-36 lg:w-40 h-full border-outer rounded-3xl flex flex-col justify-center items-center border-gray-800 text-gray-500 text-center`}>
          <div className='m-3'>
            <label className=''>
              <span className=''>Pomodoro</span>
                <input
                  name='timer'
                  type='number'
                  min='25'
                  max='60'
                  className='timer-input'
                  onChange={changeTime}
                  value={timer.pomodoro}
                />
            </label>
          </div>
          <div className='m-3'>
            <label className=''>
              <span className=''>Short Break</span>
                <input
                  name='shortBreak'
                  type='number'
                  min='5'
                  max='30'
                  className='timer-input'
                  onChange={changeTime}
                  value={timer.short}
                />
            </label>
          </div>
          <div className='mt-3 mb-2'>
            <label className=''>
              <span className=''>Long Break</span>
                <input
                  name='longBreak'
                  type='number'
                  min='15'
                  max='60'
                  className='timer-input'
                  onChange={changeTime}
                  value={timer.long}
                />
            </label>
          </div>
          <br />
          
        </div>
        <div>
          <p className='text-center mt-9 text-xl '>Start Timer</p>
        </div>
        <button className='timer-button mt-4' onClick={() => {
          
          setStartPomodoro(!startPomodoro)
          setStudyTime(timer['pomodoro'])
          }}>
          Pomodoro
        </button>
        <button className='timer-button mt-8' onClick={() => {
          
          setStartPomodoro(!startPomodoro)
          setStudyTime(timer['short'])
          }}>
          Short Break 
        </button>
        <button className='timer-button mt-8' onClick={() => {
          
          setStartPomodoro(!startPomodoro)
          setStudyTime(timer['long'])
          }}>
          Long Break
        </button>
      </form>
    </div>
  )
}

export default SetPomodoro;