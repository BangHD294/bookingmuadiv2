import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../components/menubar/menubar.css";
import LeftSidebar from "..//components/menubar/LeftSidebar";
import FooterModal from "../components/menubar/FooterModal";
import Logobar from "../components/menubar/Logobar";
import { addDays } from 'date-fns';
import "../components/search/formSearch.css";
import "../components/search/PlaceSearch.css";
import "../components/search/Search.css";
import HeaderSearch from "../components/search/HeaderSearch";
import FilterSearch from "../components/search/FilterSearch";
import ViewSearch from "../components/search/ViewSearch";
import BaseForm from './formPassenger/BaseForm';
import { listAirport } from './filejson/listAirport';
import LanguageMD from "../components/menuTop/language";
import GitSP from './menuTop/gitSp';
import Notifications from './menuTop/Notifications';
import { empty } from 'object-path';


const DayPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
  const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
  const locale = {
    localize: {
      month: n => months[n],
      day: n => days[n]
    },
    formatLong: {}
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
      minDate={addDays(new Date(), 0)}
      locale={locale}
    />
  )
}


const Search = () => {
  // const status = useSelector(selectStatus);
  const [isActive, setActive] = useState('false');
  const [isActive1, setActive1] = useState('false');

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

// lấy chỉ số mảng của label
const handleAirposrt = (i) => {
  setAirport(i);
}
  const [airport12, setAirport] = useState();
  let i = 0
  if(!airport12){
    i = 0
  }else{
    i = airport12
  }
  let itemi = i
  console.log(airport12);
//lấy địa điểm bay
const [city, setCity] = useState();
const [code, setCode] = useState();
const [hideResult, setHideResult] = useState(false);
const handleLocation = (city, code) =>{
  setCity(city);
  setCode(code);
  if(!empty(code)){
    setHideResult(true);
  }
  
}
console.log(hideResult);
console.log(city);
console.log(code);
//show off form search from
const [hideFromSearch, setHideFromSearch] = useState(false);
const onclickF = () => setHideFromSearch(!hideFromSearch);
//show off form search to
const [hideToSearch, setHideToSearch] = useState(false)
const onclickT = () => setHideToSearch(!hideToSearch);


  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });




  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };
  // 
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  const handleToggle = () => {
    setActive(!isActive);
  };
  // click them so luong nguoi vao chuyen bay
  const handleToggle1 = () => {
    setActive1(!isActive1);
  }
  return (
    <div>
      <bodys className="mufsearch1  showSearch1" data-sidebar="dark">
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="navbar-header">
              <div className="d-flex">
                {/* LOGO */}
                <Logobar />
                <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                  <i className="fa fa-fw fa-bars" />
                </button>
                {/* App Search*/}
                <form className="app-search d-none d-lg-block">
                  <div className="position-relative">
                    <input type="text" className="form-control" placeholder="Search..." />

                    <span className="bx bx-search-alt" />
                  </div>
                </form>
              </div>  
              <div className="d-flex">
                <div className="dropdown d-inline-block d-lg-none ml-2">
                  <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="mdi mdi-magnify" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">
                    <form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dropdown d-inline-block">
                    {/* language */}
                    <LanguageMD />
                </div>
                <div className="dropdown d-none d-lg-inline-block ml-1">
                  <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="bx bx-customize" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    {/* git support */}
                    <GitSP />

                  </div>
                </div>
                <div className="dropdown d-none d-lg-inline-block ml-1">
                  <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i className="bx bx-fullscreen" />
                  </button>
                </div>
                <div className="dropdown d-inline-block">
                  {/* Notifications */}
                  <Notifications />

                </div>
                <div className="dropdown d-inline-block">
                  {/* profile */}
                  <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <img className="rounded-circle header-profile-user" src="assets\images\users\avatar-1.jpg" alt="Header Avatar" />
                    <span className="d-none d-xl-inline-block ml-1">Henry</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right" >
                    {/* item*/}
                    <a className="dropdown-item" href="# "><i className="bx bx-user font-size-16 align-middle mr-1" />
                      Search</a>
                    <a className="dropdown-item" href="# "><i className="bx bx-wallet font-size-16 align-middle mr-1" /> My Wallet</a>
                    <a className="dropdown-item d-block" href="# "><span className="badge badge-success float-right">11</span><i className="bx bx-wrench font-size-16 align-middle mr-1" /> Settings</a>
                    <a className="dropdown-item" href="# "><i className="bx bx-lock-open font-size-16 align-middle mr-1" /> Lock screen</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item text-danger" href="/login" onClick={logOut}><i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger" /> Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </header> {/* ========== Left Sidebar Start ========== */}
          <LeftSidebar />
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0 font-size-18">Tìm kiếm chuyến bay</h4>
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item"><a href="# ">Tìm kiếm chuyến bay</a></li>
                          <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end page title */}

                {/* search booking */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="">
                      <div className="">
                        <div id="__next">
                          <div id="back-to-top-anchor" />
                          <div className="jss23">
                            <div className=" jss24">
                              <div className=" jss25 ">
                                <div className="jss27">
                                  <div className=" jss29 ">
                                    <div className="jss30">
                                      <div className="jss32">

                                        <div className="jss57 jss31 jss33 " >
                                          <div className="jss58" onClick={onclickF}>
                                            <div className="jss59"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z">
                                              </path>
                                            </svg></div>
                                            <div className="jss60"><label className="jss61">Từ</label>
                                              <p className=" jss62 ">
                                                {city} ({code})</p>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="jss35">
                                          <button className=" jss36 mud36" tabIndex={0} type="button" aria-label="Đổi sân bay">
                                            <span className=""><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="jss1 jss39" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                              </path>
                                            </svg></span>
                                          </button>
                                        </div>

                                        <div className="jss57 jss31 jss34 " >
                                          <div className="jss58" onClick={onclickT}>
                                            <div className="jss60"><label className="jss61">Đến</label>
                                              <p className=" jss62 ">
                                                {city} ({code})</p>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                      <div className="jss40">
                                        <div className="jss57 jss31 jss41 " >
                                          <div className="jss58">
                                            <div className="jss59"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <g>
                                                <path fill="none" d="M0 0h24v24H0z" />
                                                <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z">
                                                </path>
                                              </g>
                                            </svg></div>
                                            <div className="jss60">
                                              <label className="jss61">Ngày đi</label>
                                              <p className=" jss62 no-css">
                                                <div className="daypicker-1">
                                                  <DayPicker />
                                                </div>
                                              </p>
                                            </div>
                                          </div>
                                          <div className="jss74">
                                            <label className=" jss50 ">
                                              <span className="MuiSwitch-root">
                                                <span className=" jss79 " aria-disabled="false">
                                                  <span className="">
                                                    <input type="checkbox" className="jss82" name="round-trip" />
                                                    <span className="" />
                                                  </span>
                                                </span>
                                                <span className="" />
                                              </span>
                                              <span className=" jss51">Khứ
                                                hồi</span>
                                            </label>
                                          </div>
                                        </div>
                                        {/* khu hoi */}

                                        <div className="jss42" >
                                          <div className="jss72" onClick={handleToggle}>
                                            {/* <div className="MuiCollapse-container MuiCollapse-entered" style={{ minHeight: '0px' }}> */}
                                            <div className={isActive ? "MuiCollapse-entered MuiCollapse-container" : "MuiCollapse-hidden MuiCollapse-container"}>
                                              <div className="">
                                                <div className="">
                                                  <div className="mudkhuhoi">+ Khứ hồi</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          {/* <div className="MuiCollapse-container MuiCollapse-hidden" style={{ minHeight: '0px' }}> */}
                                          <div className={isActive ? "MuiCollapse-hidden  MuiCollapse-container" : "MuiCollapse-entered  MuiCollapse-container"}>
                                            <div className="">
                                              <div className="">
                                                <div className="jss57 jss31 jss43 ">
                                                  <div className="jss58">
                                                    <div className="jss59"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                      <g>
                                                        <path fill="none" d="M0 0h24v24H0z">
                                                        </path>
                                                        <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z">
                                                        </path>
                                                      </g>
                                                    </svg></div>
                                                    <div className="jss60"><label className="jss61">Ngày về</label>
                                                      <p className=" jss62 ">
                                                        <DayPicker />
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div className="jss72 mudsclose" onClick={handleToggle}>
                                                    <button className=" mudbtnclose" tabIndex={0} type="button" >
                                                      <span className="">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss46" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                          <g>
                                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"></path>
                                                          </g>
                                                        </svg>
                                                      </span>
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                        </div>

                                        {/* end khu hoi */}
                                      </div>

                                      <div className="jss57 jss31 jss47 " onClick={handleToggle1}>
                                        <div className="jss58">
                                          <div className="jss59"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <circle fill="none" cx={12} cy={7} r={3} />
                                            <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z">
                                            </path>
                                          </svg></div>
                                          <div className="jss60"><label className="jss61">Khách</label>
                                            <p className=" jss62 ">
                                              1</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="jss48">
                                      <button className=" jss49 jss85 mud48btnsearch" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Tìm chuyến bay</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end search booking*/}
                {/* nguoi lon tre em */}
                <div className={isActive1 ? " mudformHidden" : "mudformShow"}>
                  <div className="mud52 mud55 mudform">
                    <div className="mud374">
                      <div className="mud387 mud375">
                        <button className="MuiButtonBase-root MuiIconButton-root mud388  MuiIconButton-colorSecondary" tabIndex={0} type="button">
                          <span className="MuiIconButton-label">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="mud1 mud390 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                              </path>
                            </svg>
                          </span>
                          <span className="MuiTouchRipple-root" />
                        </button>
                        <div className="mud389">Hành khách</div>
                      </div>
                      <div className="mud376">
                        <h6 className="MuiTypography-root MuiTypography-subtitle2">Vui lòng chọn số lượng hành khách chính xác để xem được mức giá tốt nhất</h6>


                        <div className="mud377">
                          <div>
                            <h6 className="MuiTypography-root MuiTypography-subtitle1">Người lớn</h6>
                            <p className="MuiTypography-root mud378 MuiTypography-body2">từ 12 tuổi</p>
                          </div>
                          <div className="mud380">
                            <button className="MuiButtonBase-root MuiIconButton-root mud381 mud382 MuiIconButton-colorSecondary Mui-disabled Mui-disabled" tabIndex={-1} type="button" disabled>
                              <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="mud1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 11H19V13H5z" />
                                </svg>
                              </span>
                            </button>
                            <p className="MuiTypography-root mud379 MuiTypography-body1">1</p>
                            <button className="MuiButtonBase-root MuiIconButton-root mud381  MuiIconButton-colorSecondary" tabIndex={0} type="button">
                              <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="mud1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z" />
                                </svg>
                              </span>
                              <span className="MuiTouchRipple-root" />
                            </button>
                          </div>
                        </div>


                        <div className="mud377">
                          <div>
                            <h6 className="MuiTypography-root MuiTypography-subtitle1">Trẻ em</h6>
                            <p className="MuiTypography-root mud378 MuiTypography-body2">2 - 12 tuổi</p>
                          </div>
                          <div className="mud380">
                            <button className="MuiButtonBase-root MuiIconButton-root mud381 mud382 MuiIconButton-colorSecondary Mui-disabled Mui-disabled" tabIndex={-1} type="button" disabled>
                              <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="mud1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 11H19V13H5z" />
                                </svg>
                              </span>
                            </button>
                            <p className="MuiTypography-root mud379 MuiTypography-body1">0</p>
                            <button className="MuiButtonBase-root MuiIconButton-root mud381  MuiIconButton-colorSecondary" tabIndex={0} type="button">
                              <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z" />
                                </svg>
                              </span>
                              <span className="MuiTouchRipple-root" />
                            </button>
                          </div>
                        </div>


                        <div className="mud377">
                          <div>
                            <h6 className="MuiTypography-root MuiTypography-subtitle1">Em bé</h6>
                            <p className="MuiTypography-root mud378 MuiTypography-body2">dưới 2 tuổi</p>
                          </div>
                          <div className="mud380">
                            <button className="MuiButtonBase-root MuiIconButton-root mud381 mud382 MuiIconButton-colorSecondary Mui-disabled Mui-disabled" tabIndex={-1} type="button" disabled>
                              <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="mud1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 11H19V13H5z" />
                                </svg>
                              </span>
                            </button>
                            <p className="MuiTypography-root mud379 MuiTypography-body1">0</p>
                            <button className="MuiButtonBase-root MuiIconButton-root mud381  MuiIconButton-colorSecondary" tabIndex={0} type="button">
                              <span className="MuiIconButton-label">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z" />
                                </svg>
                              </span>
                              <span className="MuiTouchRipple-root" />
                            </button>
                          </div>
                        </div>

                      </div>
                      <div className="mud383">
                        <button className="MuiButtonBase-root MuiButton-root mud384 MuiButton-contained MuiButton-containedSecondary" tabIndex={0} type="button" onClick={handleToggle1}>
                          <span className="MuiButton-label mud385">
                            <p className="MuiTypography-root MuiTypography-body1">Hoàn thành</p>
                            <p className="MuiTypography-root mud386 MuiTypography-body2">(1 người lớn)</p>
                          </span>
                          <span className="MuiTouchRipple-root" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*end nguoi lon tre em */}
                
                {/* place search */}
                <div className={hideFromSearch || hideToSearch || hideResult === true ? "placeShow":"placeHidden"}>
                  <div className={hideResult === false ? "placeShow" : "placeHidden"}>
                  <div className="muds52 muds53">
                    <div className="muds405">
                      <div className="muds414 ">
                        <button className="mud1MuiButtonBase-root mud1MuiIconButton-root muds415  mud1MuiIconButton-colorSecondary" tabIndex={0} type="button">
                          <span className="mud1MuiIconButton-label">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="mud1 mud417 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                              </path>
                            </svg>
                          </span>
                          <span className="mud1MuiTouchRipple-root" />
                        </button>

                        <div className="muds416">
                          <div className="muds406">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="muds1 muds407" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                              </path>
                            </svg>
                            <div className="mud1MuiFormControl-root mud1MuiTextField-root muds408">
                              <div className="mud1MuiInputBase-root mud1MuiInput-root mud1MuiInput-underline muds412 mud1MuiInputBase-formControl MuiInput-formControl">
                                <input aria-invalid="false" placeholder="Tìm điểm đi" type="text" className="mud1MuiInputBase-input mud1MuiInput-input muds409"  />
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                      
                      <div className="muds413 muds418">
                          {/* Khu vực bay */}
                          <div className="muds419">
                            <div className="muds421" >
                              {listAirport.map((item, i) => {
                                return (
                                  <a role="button" className="mud1MuiChip-root muds422 mud1MuiChip-outlined mud1MuiChip-clickable" href='# ' tabIndex={0} onClick={()=>handleAirposrt(i)} >
                                    <span className="mud1MuiChip-label">{item.label}</span>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                          {/* Địa điểm bay/ Sân bay */}
                          <div className="muds420">
                            {
                                <div className="muds420 ">
                                {
                                  listAirport[itemi].airports.map((item) => {
                                        return (
                                          <div className="muds423 " onClick={()=>handleLocation(item.city, item.code)}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="muds1 muds424" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10.18 9" />
                                              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z">
                                              </path>
                                            </svg>
                                            <div className="muds426">
                                              <div className="muds427">{item.city}, {item.country} ({item.code})</div>
                                              <div className="muds428">{item.name}</div>
                                            </div>
                                          </div>
                                        )
                                      }
                                      ) 
                                }
                              </div>
                            }
                          </div>
                        </div>

                    </div>
                  </div>
                  </div>
                </div>

                {/* end place search*/}
                {/* view search */}

                <div>
                  <div className="MuiPaper-root MuiAppBar-root MuiAppBar-positionSticky MuiAppBar-colorTransparent jss1753 jss1754 MuiPaper-elevation0">
                    <HeaderSearch />
                  </div>

                  <div className="jss1767">
                    <div className="MuiContainer-root jss1768 MuiContainer-maxWidthLg">
                      <FilterSearch />
                      <ViewSearch />
                    </div>
                  </div>
                </div>

                {/* end view search */}


              </div>
              {/* container-fluid */}
            </div>
            {/* End Page-content */}
            {/* Modal */}
            <div className="modal fade exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Order Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
                    <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>
                    <div className="table-responsive">
                      <table className="table table-centered table-nowrap">
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <div>
                                <img src="assets\images\product\img-7.png" alt="" className="avatar-sm" />
                              </div>
                            </th>
                            <td>
                              <div>
                                <h5 className="text-truncate font-size-14">Wireless Headphone (Black)
                                </h5>
                                <p className="text-muted mb-0">$ 225 x 1</p>
                              </div>
                            </td>
                            <td>$ 255</td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div>
                                <img src="assets\images\product\img-4.png" alt="" className="avatar-sm" />
                              </div>
                            </th>
                            <td>
                              <div>
                                <h5 className="text-truncate font-size-14">Phone patterned cases</h5>
                                <p className="text-muted mb-0">$ 145 x 1</p>
                              </div>
                            </td>
                            <td>$ 145</td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <h6 className="m-0 text-right">Sub Total:</h6>
                            </td>
                            <td>
                              $ 400
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <h6 className="m-0 text-right">Shipping:</h6>
                            </td>
                            <td>
                              Free
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <h6 className="m-0 text-right">Total:</h6>
                            </td>
                            <td>
                              $ 400
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            {/* end modal */}
            {/* footer modal*/}
            <FooterModal />
            {/*end footer modal*/}
          </div>
          {/* end main content*/}
        </div>
        <div className="right-bar">
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <a href="# " className="right-bar-toggle float-right">
                <i className="mdi mdi-close noti-icon" />
              </a>
              <h5 className="m-0">Settings</h5>
            </div>
            {/* Settings */}
            <hr className="mt-0" />
            <h6 className="text-center mb-0">Choose Layouts</h6>
            <div className="p-4">
              <div className="mb-2">
                <img src="assets\images\layouts\layout-1.jpg" className="img-fluid img-thumbnail" alt="" />
              </div>
              <div className="custom-control custom-switch mb-3">
                <input type="checkbox" className="custom-control-input theme-choice" id="light-mode-switch" defaultChecked />
                <label className="custom-control-label" htmlFor="light-mode-switch">Light Mode</label>
              </div>
              <div className="mb-2">
                <img src="assets\images\layouts\layout-2.jpg" className="img-fluid img-thumbnail" alt="" />
              </div>
              <div className="custom-control custom-switch mb-3">
                <input type="checkbox" className="custom-control-input theme-choice" id="dark-mode-switch" data-bsstyle="assets/css/bootstrap-dark.min.css" data-appstyle="assets/css/app-dark.min.css" />
                <label className="custom-control-label" htmlFor="dark-mode-switch">Dark Mode</label>
              </div>
              <div className="mb-2">
                <img src="assets\images\layouts\layout-3.jpg" className="img-fluid img-thumbnail" alt="" />
              </div>
              <div className="custom-control custom-switch mb-5">
                <input type="checkbox" className="custom-control-input theme-choice" id="rtl-mode-switch" data-appstyle="assets/css/app-rtl.min.css" />
                <label className="custom-control-label" htmlFor="rtl-mode-switch">RTL Mode</label>
              </div>
            </div>
          </div>
        </div>
        <div className="rightbar-overlay" />

      </bodys>
      <div className="main-content  showInformation">
        <div className="page-content">
          <div className="mufpassenger">
            <BaseForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
