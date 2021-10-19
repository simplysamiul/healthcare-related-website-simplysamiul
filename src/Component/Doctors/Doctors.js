import React from 'react';
import './Doctors.css';

const Doctors = () => {
    return (
            <div className="doctors-container">
                <div className="doctors-details">
                    <div className="doctor-info">
                        <h5>PROFESSOR DR. MD. YEAQUB ALI</h5>
                        <p> <span>Qualification</span>: MBBS, FCPS, FRSH ( London), IAEA</p>
                        <p><span>Expertise</span>: Neurology</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Dr. Rafat Nawaz</h5>
                        <p> <span>Qualification</span>: MBBS, MRCOG(London), FRCOG(London)</p>
                        <p><span>Expertise</span>: Dental</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Dr. Towfica Hossain</h5>
                        <p> <span>Qualification</span>: MBBS, FCPS, MS</p>
                        <p><span>Expertise</span>: Cardiology</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Dr. Sikder Md. Ruhul Kuddus</h5>
                        <p> <span>Qualification</span>: MBBS, MS (Neuro-Surgery)</p>
                        <p><span>Expertise</span>: Neurology &#38; Surgery</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Dr. Md. Abdul Bari</h5>
                        <p> <span>Qualification</span>: MBBS, SSMC, CCD (Birdem), MD (Neurology)</p>
                        <p><span>Expertise</span>: Neurology</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Prof. Dr. ABM Khorsed Alam</h5>
                        <p> <span>Qualification</span>: MBBS,FCPS</p>
                        <p><span>Expertise</span>: Cardiology</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Asst. Prof. Dr. Muhammad. Salah Uddin</h5>
                        <p> <span>Qualification</span>: MBBS, FCPS </p>
                        <p><span>Expertise</span>: Orthopedic</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Prof. Dr. Mahmudul Hasan</h5>
                        <p> <span>Qualification</span>: MBBS, FCPS</p>
                        <p><span>Expertise</span>: Dermatolijist</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Dr. Toponkar Biswas</h5>
                        <p> <span>Qualification</span>: MBBS, FCPS</p>
                        <p><span>Expertise</span>: Orthopedic</p>
                    </div>
                    <div className="doctor-info">
                        <h5>Dr. Mahmud Hossain</h5>
                        <p> <span>Qualification</span>: MBBS, DCH</p>
                        <p><span>Expertise</span>: Surgery</p>
                    </div>
                </div>
                <div className="doctors-schedule">
                <table>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Specialist</th>
                        <th>Day</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Dr. Mahmud Hossain</td>
                        <td>Surgery</td>
                        <td>Monday, Wednesday, Friday</td>
                        <td>15:00 - 19:00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Dr. Toponkar Biswas</td>
                        <td>Orthopedic</td>
                        <td>Tuesday, Wednesday</td>
                        <td>16:00 - 20:00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Prof. Dr. Mahmudul Hasan</td>
                        <td>Dermatolojist</td>
                        <td>Monday, Tuesday, Thrusday</td>
                        <td>13:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Prof. Dr. Muhammad. Salah</td>
                        <td>Orthopedic</td>
                        <td>Thrusday, Friday</td>
                        <td>14:00 - 19:00</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Prof. Dr. ABM Khorsed Alam</td>
                        <td>Cardiology</td>
                        <td>Monday, Wednesday, Thrusday</td>
                        <td>15:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Dr. Md. Abdul Bari</td>
                        <td>Neurology</td>
                        <td>Wednesday, friday</td>
                        <td>16:00 - 20:00</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Dr. Sikder Md. Ruhul</td>
                        <td>Thrusday, Friday</td>
                        <td>Neurology &#38; Surgery</td>
                        <td>15:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Dr. Towfica Hossain</td>
                        <td>Cardiology</td>
                        <td>Monday, Thruday, Friday</td>
                        <td>14:00 - 18:00</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Dr. Rafat Nawaz</td>
                        <td>Dental</td>
                        <td>Tuesday, Wednesday, Thrusday</td>
                        <td>18:00 - 21:00</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Prof. DR. YEAQUB ALI</td>
                        <td>Neurology</td>
                        <td>Monday, Thrusday, Friday</td>
                        <td>14:00 - 18:00</td>
                    </tr>
                    </table>
                </div>
            </div>
    );
};

export default Doctors;