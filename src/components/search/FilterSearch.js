import React from "react";
import "../search/ViewSearch.css"
const FilterSearch = () => {
    return (
        <div>
            <div className="jss1769">
                <div className="jss1859">
                    <div className="jss1870 jss1860">
                        <button className="MuiButtonBase-root MuiIconButton-root jss1861  MuiIconButton-colorSecondary" tabIndex={0} type="button">
                            <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                    </path>
                                </svg>
                            </span>
                            <span className="MuiTouchRipple-root" />
                        </button>
                        <h4 className="MuiTypography-root jss1862 MuiTypography-h4">Bộ lọc</h4>
                        <span className="jss1871">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1863" tabIndex={0} type="button">
                                <span className="MuiButton-label">Xóa chọn</span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                        </span>
                    </div>
                    <div className="jss1864">
                        <div className="jss1874 jss1866">
                            <div className="jss1875">
                                <p className="MuiTypography-root jss1876 MuiTypography-subtitle1">Giá vé</p>
                                <p className="MuiTypography-root jss1877 MuiTypography-body1 MuiTypography-colorSecondary">598,900 ₫ - 719,000 ₫</p>
                            </div>
                            <div className="jss1879">
                                <span className="MuiSlider-root jss1878 MuiSlider-colorSecondary">
                                    <span className="MuiSlider-rail jss1881" />
                                    <span className="MuiSlider-track jss1880" style={{ left: '0%', width: '100%' }}>
                                    </span>
                                    <input type="hidden" defaultValue="598900,719000" />
                                    <span className="MuiSlider-thumb jss1882 MuiSlider-thumbColorSecondary" tabIndex={0} role="slider" data-index={0} aria-orientation="horizontal" aria-valuemax={719000} aria-valuemin={598900} aria-valuenow={598900} style={{ left: '0%' }}>
                                    </span>
                                    <span className="MuiSlider-thumb jss1882 MuiSlider-thumbColorSecondary" tabIndex={0} role="slider" data-index={1} aria-orientation="horizontal" aria-valuemax={719000} aria-valuemin={598900} aria-valuenow={719000} style={{ left: '100%' }}>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="jss1866 jss1867">
                            <p className="MuiTypography-root jss1868 MuiTypography-subtitle1">Khung giờ bay</p>
                            <div className="jss1889">
                                <div className="jss1891">
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1892 jss1893" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <div className="jss1895">
                                                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="jss1 jss1896" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 18a5 5 0 0 0-10 0" />
                                                    <line x1={12} y1={2} x2={12} y2={9} />
                                                    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
                                                    <line x1={1} y1={18} x2={3} y2={18} />
                                                    <line x1={21} y1={18} x2={23} y2={18} />
                                                    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
                                                    <line x1={23} y1={22} x2={1} y2={22} />
                                                    <polyline points="8 6 12 2 16 6" />
                                                </svg>
                                                <span>0h-6h</span>
                                            </div>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1892" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <div className="jss1895">
                                                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="jss1 jss1896" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx={12} cy={12} r={5} />
                                                    <line x1={12} y1={1} x2={12} y2={3} />
                                                    <line x1={12} y1={21} x2={12} y2={23} />
                                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                                    <line x1={1} y1={12} x2={3} y2={12} />
                                                    <line x1={21} y1={12} x2={23} y2={12} />
                                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                                </svg>
                                                <span>6h-12h</span>
                                            </div>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1892" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <div className="jss1895">
                                                <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="jss1 jss1896" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 18a5 5 0 0 0-10 0" />
                                                    <line x1={12} y1={9} x2={12} y2={2} />
                                                    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
                                                    <line x1={1} y1={18} x2={3} y2={18} />
                                                    <line x1={21} y1={18} x2={23} y2={18} />
                                                    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
                                                    <line x1={23} y1={22} x2={1} y2={22} />
                                                    <polyline points="16 5 12 9 8 5" />
                                                </svg>
                                                <span>12h-18h</span>
                                            </div>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1892" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <div className="jss1895">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1896" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M277.8 294.8c-.5 0-1.1-.1-1.6-.1-2.6 0-5.2 0-7.8.3-9.3-40.8-45.9-71.5-89.7-71.5-50.8 0-91.9 40.9-91.9 91.4 0 3.1.2 6.1.5 9.1-31 2.7-55.3 30.1-55.3 61.6C32 419 58.8 448 92.3 448h185.5c41.9 0 75.8-34.7 75.8-76.3 0-41.6-33.9-76.9-75.8-76.9z">
                                                    </path>
                                                    <path d="M452.1 305.4c-2.5.1-5 .2-7.6.2-41.7 0-80.8-15.7-110.3-44.3-29.5-28.5-45.7-66.5-45.7-106.8 0-23 5.3-45.2 15.2-65.3L315.4 70c1.7-2.9-.8-6.5-4.1-6-7.6 1.2-15.7 4-23.2 6.3-59.5 18.2-104.4 68.1-113.7 129.3 1.4-.1 2.9-.1 4.3-.1 26.5 0 52.4 9.2 73 25.9 15.1 12.2 26.9 28 34.2 45.7 23.7 2 45.7 12.4 62.7 29.8 18.7 19.1 29 44.2 29 70.7 0 2.3-.1 4.6-.2 6.8 34.2-8.1 64.3-26.6 86.4-51.8 4.8-5.5 11.3-12.8 15.3-18.5 2-2.8-.3-6.7-3.8-6.3-6.8 1-15.9 3.2-23.2 3.6z">
                                                    </path>
                                                </svg>
                                                <span>18h-24h</span>
                                            </div>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="jss1897 jss1866">
                            <p className="MuiTypography-root jss1898 MuiTypography-subtitle1">Hãng bay</p>
                            <label className="MuiFormControlLabel-root jss1899 MuiFormControlLabel-labelPlacementStart">
                                <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span className="MuiIconButton-label">
                                        <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue="[object Object]" />
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className="MuiTouchRipple-root" />
                                </span>
                                <span className="MuiTypography-root MuiFormControlLabel-label jss1900 MuiTypography-body1">
                                    <span>Pacificb Airlines</span>
                                    <div className="jss1901">
                                        <div className="jss1958">
                                            <img src="https://cdn.justfly.vn/media/flights/logo/BL.png" alt="Pacific Airlines" loading="eager" className="jss143 jss1959" />
                                        </div>
                                    </div>
                                </span>
                            </label>
                            <label className="MuiFormControlLabel-root jss1899 MuiFormControlLabel-labelPlacementStart">
                                <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span className="MuiIconButton-label">
                                        <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue="[object Object]" />
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                        </svg>
                                    </span>
                                    <span className="MuiTouchRipple-root" />
                                </span>
                                <span className="MuiTypography-root MuiFormControlLabel-label jss1900 MuiTypography-body1">
                                    <span>Vietnam Airlines</span>
                                    <div className="jss1901">
                                        <div className="jss1958">
                                            <img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" />
                                        </div>
                                    </div>
                                </span>
                            </label>
                            <label className="MuiFormControlLabel-root jss1899 MuiFormControlLabel-labelPlacementStart">
                                <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                    <span className="MuiIconButton-label"><input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue="[object Object]" />
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                                        </svg>
                                    </span>
                                    <span className="MuiTouchRipple-root" />
                                </span>
                                <span className="MuiTypography-root MuiFormControlLabel-label jss1900 MuiTypography-body1">
                                    <span>Vietjet Air</span>
                                    <div className="jss1901">
                                        <div className="jss1958">
                                            <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                        </div>
                                    </div>
                                </span>
                            </label>
                        </div>
                        <div className="jss1904 jss1866">
                            <p className="MuiTypography-root jss1905 MuiTypography-subtitle1">Tàu bay</p>
                            <div className="MuiCollapse-container" style={{ minHeight: '126px' }}>
                                <div className="MuiCollapse-wrapper">
                                    <div className="MuiCollapse-wrapperInner">
                                        <label className="MuiFormControlLabel-root jss1906 MuiFormControlLabel-labelPlacementStart">
                                            <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                <span className="MuiIconButton-label">
                                                    <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue={320} />
                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </span>
                                            <span className="MuiTypography-root MuiFormControlLabel-label jss1907 MuiTypography-body1">
                                                <span>Airbus 320</span>
                                            </span>
                                        </label>
                                        <label className="MuiFormControlLabel-root jss1906 MuiFormControlLabel-labelPlacementStart">
                                            <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                <span className="MuiIconButton-label">
                                                    <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue={321} />
                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </span>
                                            <span className="MuiTypography-root MuiFormControlLabel-label jss1907 MuiTypography-body1">
                                                <span>Airbus 321</span>
                                            </span>
                                        </label>
                                        <label className="MuiFormControlLabel-root jss1906 MuiFormControlLabel-labelPlacementStart">
                                            <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                <span className="MuiIconButton-label">
                                                    <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue={350} />
                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </span>
                                            <span className="MuiTypography-root MuiFormControlLabel-label jss1907 MuiTypography-body1">
                                                <span>Airbus 350</span>
                                            </span>
                                        </label>
                                        <label className="MuiFormControlLabel-root jss1906 MuiFormControlLabel-labelPlacementStart">
                                            <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                <span className="MuiIconButton-label">
                                                    <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue={359} />
                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </span>
                                            <span className="MuiTypography-root MuiFormControlLabel-label jss1907 MuiTypography-body1">
                                                <span>Airbus 359</span>
                                            </span>
                                        </label>
                                        <label className="MuiFormControlLabel-root jss1906 MuiFormControlLabel-labelPlacementStart">
                                            <span className="MuiButtonBase-root MuiIconButton-root jss1852 MuiCheckbox-root MuiCheckbox-colorSecondary MuiIconButton-colorSecondary" aria-disabled="false">
                                                <span className="MuiIconButton-label">
                                                    <input className="jss1855" type="checkbox" data-indeterminate="false" defaultValue={787} />
                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </span>
                                            <span className="MuiTypography-root MuiFormControlLabel-label jss1907 MuiTypography-body1">
                                                <span>Boeing 787</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button className="MuiButtonBase-root MuiButton-root jss1908 MuiButton-text MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label jss1909">Xem thêm</span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                        </div>
                        <div className="jss1867">
                            <p className="MuiTypography-root jss1868 MuiTypography-subtitle1">Điểm dừng</p>
                            <div className="jss1910">
                                <div className="jss1912">
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1913" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <span className="jss1916">Bay thẳng</span>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1913 jss1914" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <span className="jss1916">1 điểm dừng</span>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1913 jss1914" tabIndex={0} type="button">
                                        <span className="MuiButton-label">
                                            <span className="jss1916">2+ điểm dừng</span>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jss1869">
                        <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1858 MuiButton-containedSecondary MuiButton-fullWidth" tabIndex={0} type="button">
                            <span className="MuiButton-label">Áp dụng</span>
                            <span className="MuiTouchRipple-root" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterSearch;