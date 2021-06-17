import React from 'react';
// import './passenger.css';
import Information from './Information';
import SelectedFlight from './SelectedFlight';
import TotalFare from './TotalFare';
import InputPassenger from './InputPassenger';
import Contact from './Contact';
import Service from './Service';
import TotalPayment from './TotalPayment';
const BaseForm = () => {


    return (
        <div className="mufpassenger">
            <div className>
                <form action="#" autoComplete="off" noValidate>
                    <div className="mudp2152">
                        {/* thong tin khach hang */}
                            <Information/>
                        <div className="mudpContainer mudp2157 mudpContainer-maxWidth">
                            <div className="mudp2158">
                                {/* chuyen bay da chon */}
                                    <SelectedFlight/>
                                {/* Tong gia ve */}
                                    <TotalFare/>
                            </div>
                            <div className="mudp2159">
                                {/* Nhap thong tin hanh khach */}
                                    <InputPassenger/>
                                {/* nguoi lien he */}
                                    <Contact/>
                                {/* dich vu bo sung */}
                                    <Service/>
                                {/* Tong gia ve PC */}
                                    <TotalPayment/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default BaseForm;