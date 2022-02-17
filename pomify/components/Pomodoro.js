import React from 'react'

const Pomodoro = () => {
  return (
    <div className=''>
      <form noValidate>
        <div className=''>
          <input type='text' name='timer' value="" />
          <input type='text' name='shortBreak' value="" />
          <input type='text' name='longBreak' value="" />
        </div>
      </form>
    </div>
  )
}

export default Pomodoro;