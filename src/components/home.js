import React  from 'react'
import Nav from './Nav'
import waterImg from '../Images/waterImg.jpg'
//import styles from "../waterImg.module.css";
import '../App.css'
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css'


const Home = () => {

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
            <button className = { `${styles.button}  btn btn-primary btn-lg` }
              
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