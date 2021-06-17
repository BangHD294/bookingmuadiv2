import React from "react";
import "./passenger.css";

const TotalFare = () => {
    return (
        <div className="mudp2188 mudp2167">
            <div className="mudp2189">
                <div className="mudp2191">
                    <div className="mudp2192">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="mudp1 mudp2195" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                        </svg>
                        <p className="mudpTg-root Mudptg-body1">
                            <span>Tổng giá vé</span>
                            <span className="mudp2196">(đã bao gồm thuế phí)</span>
                        </p>
                    </div>
                    <p className="mudpTg-root mudp2193 mudptg-subtitle1">2,864,500 ₫</p>
                </div>
                <div className="mudp2191">
                    <p className="mudpTg-root mudp2194 Mudptg-body1">Bạn thanh toán</p>
                    <p className="mudpTg-root mudpTg-h4 mudptg-colorError">2,864,500 ₫</p>
                </div>
            </div>
            <button className="mudpbtnbase-root Mudpbtn-root mudpbtn-label-contained mudp2197 mudp2198 mudp1941 mudpbtn-label-containedSecondary mudpbtn-label-fullWidth" tabIndex={0} type="submit">
                <span className="mudpbtn-label-label">Đến trang thanh toán</span>
                <span className="mudpTR-root" />
            </button>
        </div>
    );
}
export default TotalFare;