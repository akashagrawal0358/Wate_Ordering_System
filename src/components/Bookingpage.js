import React from 'react'
import '../App.css'
import styles from "../styles/BookingPage.module.css"

const Bookingpage = () => {

    const BookingPagestyle = {
        width: '60vw',
        height: '55vh',
        backgroundColor: '#60AFCC',
        marginLeft: '20vw',
        marginTop: '4vh',
        borderRadius: '10px',
        boxShadow: '10px 12px 9px #0F303B'
    }
    return (
        <>
            <div className={styles.container}>
                <div>
                    <span className='text-center'><h1>Water Order Request</h1></span>
                </div>
                {/* <div classNameName='px-5 py-5 ' style={BookingPagestyle}>
               </div> */}


                <div className={styles.container2}>
                    <form action='https://formspree.io/f/xyyqzngl' method='post'>

                        <div className={styles.formEntry} >
                            <label for="name">Name<superscript>*</superscript> </label>
                            <input type="text"  className="form-control" name='Name' id="name" placeholder="Enter Your Name" />
                        </div>
                        <div className={styles.formEntry}>
                            <label for="number">Mobile No.<superscript>*</superscript></label>
                            <input type="text" className="form-control"  name='Mobile_No'id="number" placeholder="Enter Mobile Number" />

                        </div>
                        <div className={styles.formEntry}>
                            <label for="number">Quantity<superscript>*</superscript></label>
                            <input type="number" className="form-control" name='Quantiy' id="number" placeholder="Enter Mobile Number" min="1" />

                        </div>
                        <div className={styles.formEntry}>
                            <label for="email">Email address(Optional)</label>
                            <input type="email" className="form-control"  name='Email'id="email" placeholder="Enter email" />

                        </div>
                        <div className={styles.formEntry}>
                            <label for="passcode">Passcode</label>
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