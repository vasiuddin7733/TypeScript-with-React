import { useState } from 'react';
import Calendar from 'react-calendar';
import "../styles/calendar.css"

function Calendars() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='app'>
            <h1 className='text-center text-4xl pt-10 text-green-500'>React Calendar</h1>
            <div className='calendar-container flex justify-center items-center py-10'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            <div className="flex justify-center items-center pt-10">
                <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/">
                    Home page
                </a>
            </div>
        </div>
    );
}

export default Calendars;