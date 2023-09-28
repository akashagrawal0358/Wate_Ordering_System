import React, { useState } from 'react'
import Nav from './Nav'
import waterImg from '../Images/waterImg.jpg'
import styles from "../waterImg.module.css";
import { Link } from 'react-router-dom';
import '../App.css'


const Home = () => {
  const [btncolor, setBtncolor] = useState('#0d6efd');
  const btnstyle = {
    color: "white",
    backgroundColor: btncolor
    //`${btncolor}`
  }

  return (
    <>
      <Nav />
      <div>
        <div className={styles.article}  >
          <img className={styles.picture} src={waterImg} alt='Error Occurred' />
        </div>


        <div className={styles.header} >
          <p>
            <span style={{ color: 'white', fontSize: "1em", fontWeight: "bold" }}>For Booking </span>
            <span style={{ color: 'red', fontSize: "1.3em", fontWeight: "bold" }}>Water..!!</span>
          </p>
          <Link to='/bookingpage' >
            <button className="btn btn-outline-success fs-2 homeButton "
              style={btnstyle} type="submit"
              onMouseEnter={() => setBtncolor('red')}
              onMouseLeave={() => setBtncolor('#0d6efd')}
            >
              Click here
            </button>
          </Link>
        </div>



      </div >

    </>


  )
}

export default Home