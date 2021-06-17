import React from 'react';
import './passenger.css';

const SelectedFlight = () => {
    return (
        <div className="mudp2160">
        <div className="mudp2161">
            <h4 className="mudpTg-root mudp2162 mudpTg-h4">Chuyến bay đã chọn</h4>
            <button className="mudpbtnbase-root Mudpbtn-root mudpbtn-text mudp2163 mudpbtn-textSecondary" tabIndex={0} type="button">
                <span className="mudpbtn-label">Chọn lại</span>
                <span className="mudpTR-root" />
            </button>
        </div>
        <div className="mudp2172">
            <div className="mudp2173">
                <p className="mudpTg-root mudp2175 Mudptg-body1">
                    <span>Hà Nội</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="mudp1 mudp2176" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd" />
                    </svg>
                    <span>Hồ Chí Minh</span>
                </p>
                <button className="mudpbtnbase-root Mudpbtn-root mudpbtn-text mudp2177 mudpbtn-textSecondary" tabIndex={0} type="button">
                    <span className="mudpbtn-label-label">Chi tiết</span>
                    <span className="mudpTR-root" />
                </button>
            </div>
            <div className="mudp2174">
                <div className="mudp2178">
                    <p className="mudpTg-root Mudptg-body1">
                        <span className="mudp2179">Chiều đi</span>
                        <span className="mudpTg-root mudp2183 mudpTg-h4">
                            <span>06:55 - 09:00</span>
                        </span>
                    </p>
                    <p className="mudpTg-root mudp2181 mudptg-body2 mudp28">
                        <span>13 Thg6</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="mudp1 mudp2182" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span>Bay thẳng</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="mudp1 mudp2182" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span>Vietjet Air</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default SelectedFlight;