import React from 'react'

function TrainTickets() {
  return (
    <>
        <h1>TrainTickets</h1>
        <h3>Download App</h3>
        <div className='downloadApp'>
        <ul type="none" className='steps'>
            <li>Step :1 Visit redRail and Choose Journey Date </li>
            <li>Step :2 Select Class and Look for Available Trains</li>
            <li>Step :3 Add IRCTC User ID and Passenger Information</li>
            <li>Step :4 Add IRCTC User ID and Passenger Information </li>
            <li>Step :5 Enter IRCTC Password to Confirm Booking </li>
        </ul>
        <img height={470} src="https://st.redbus.in/Images/redrail/irctc_pwd.png" alt="image" />
        </div>
    </>
  )
}

export default TrainTickets