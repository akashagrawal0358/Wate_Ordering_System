import React from 'react'
import '../App.css'
import styles from "../styles/BookingPage.module.css"

const Bookingpage = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <span className='text-center '><h1>Water Order Request</h1></span>
                </div>
                {/* <div classNameName='px-5 py-5 ' style={BookingPagestyle}>
               </div> */}


                <div className={styles.container2}>
                    <form action='https://formspree.io/f/xyyqzngl' method='post'>

                        <div className={styles.formEntry} >
                            <label htmlFor="name">Name<superscript>*</superscript> </label>
                            <input type="text"  className="form-control" name='Name' id="name" placeholder="Enter Your Name" />
                        </div>
                        <div className={styles.formEntry}>
                            <label htmlFor="number">Mobile No.<superscript>*</superscript></label>
                            <input type="text" className="form-control"  name='Mobile_No'id="number" placeholder="Enter Mobile Number" />

                        </div>
                        <div className={styles.formEntry}>
                            <label htmlFor="number">Quantity<superscript>*</superscript></label>
                            <input type="number" className="form-control" name='Quantiy' id="number" placeholder="Enter Mobile Number" min="1" />

                        </div>
                        <div className={styles.formEntry}>
                            <label htmlFor="email">Email address(Optional)</label>
                            <input type="email" className="form-control"  name='Email'id="email" placeholder="Enter email" />

                        </div> 
                        <div className={styles.formEntry}>
                            <label htmlFor="passcode">Passcode</label>
                            <input type="passcode" className="form-control" name='Passcode' id="passcode" placeholder="Enter passcode" />

                        </div>
                     <div className= {styles.formbutton}>

                        <button type="submit" className="btn btn-primary" >Submit</button>
                     </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Bookingpage;