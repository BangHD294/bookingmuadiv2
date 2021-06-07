// import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";

import DatePicker from "react-datepicker";
// import { addMonths } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import "../components/menubar/menubar.css";
import LeftSidebar from "..//components/menubar/LeftSidebar";
import FooterModal from "../components/menubar/FooterModal";
import Logobar from "../components/menubar/Logobar";
import { addDays } from 'date-fns';
import "../components/search/formSearch.css"

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
  const [isActive, setActive] = useState('false');
  const [isActive1, setActive1] = useState('false');

  const { user: currentUser } = useSelector((state) => state.auth);
  // 
  const dispatch = useDispatch();

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

  //

  const handleToggle = () => {
    setActive(!isActive);
  };
  // click them so luong nguoi vao chuyen bay
  const handleToggle1 = () => {
    setActive1(!isActive1);
  }
  return (
    <bodys data-sidebar="dark">
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
                <button type="button" className="btn header-item waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className src="assets\images\flags\us.jpg" alt="Header Language" height={16} />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  {/* item*/}
                  <a href=" " className="dropdown-item notify-item">
                    <img src="assets\images\flags\spain.jpg" alt="img" className="mr-1" height={12} />
                    <span className="align-middle">Spanish</span>
                  </a>
                  {/* item*/}
                  <a href=" " className="dropdown-item notify-item">
                    <img src="assets\images\flags\germany.jpg" alt="img1" className="mr-1" height={12} />
                    <span className="align-middle">German</span>
                  </a>
                  {/* item*/}
                  <a href=" " className="dropdown-item notify-item">
                    <img src="assets\images\flags\italy.jpg" alt="img2" className="mr-1" height={12} />
                    <span className="align-middle">Italian</span>
                  </a>
                  {/* item*/}
                  <a href=" " className="dropdown-item notify-item">
                    <img src="assets\images\flags\russia.jpg" alt="img3" className="mr-1" height={12} />
                    <span className="align-middle">Russian</span>
                  </a>
                </div>
              </div>
              <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-customize" />
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <div className="px-lg-2">
                    <div className="row no-gutters">
                      <div className="col">
                        <a className="dropdown-icon-item" href=" ">
                          <img src="assets\images\brands\github.png" alt="Github" />
                          <span>GitHub</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href=" ">
                          <img src="assets\images\brands\bitbucket.png" alt="bitbucket" />
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href=" ">
                          <img src="assets\images\brands\dribbble.png" alt="dribbble" />
                          <span>Dribbble</span>
                        </a>
                      </div>
                    </div>
                    <div className="row no-gutters">
                      <div className="col">
                        <a className="dropdown-icon-item" href=" ">
                          <img src="assets\images\brands\dropbox.png" alt="dropbox" />
                          <span>Dropbox</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href=" ">
                          <img src="assets\images\brands\mail_chimp.png" alt="mail_chimp" />
                          <span>Mail Chimp</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href=" ">
                          <img src="assets\images\brands\slack.png" alt="slack" />
                          <span>Slack</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                  <i className="bx bx-fullscreen" />
                </button>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bx bx-bell bx-tada" />
                  <span className="badge badge-danger badge-pill">3</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0"> Notifications </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="small"> View All</a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{ maxHeight: '230px' }}>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="bx bx-cart" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Your order is placed</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">If several languages coalesce the grammar</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <img src="assets\images\users\avatar-3.jpg" className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">It will seem like simplified English.</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="bx bx-badge-check" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Your item is shipped</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">If several languages coalesce the grammar</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href className="text-reset notification-item">
                      <div className="media">
                        <img src="assets\images\users\avatar-4.jpg" className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top">
                    <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href=" ">
                      <i className="mdi mdi-arrow-right-circle mr-1" /> View More..
                  </a>
                  </div>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <img className="rounded-circle header-profile-user" src="assets\images\users\avatar-1.jpg" alt="Header Avatar" />
                  <span className="d-none d-xl-inline-block ml-1">Henry</span>
                  <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
                </button>
                <div className="dropdown-menu dropdown-menu-right" >
                  {/* item*/}
                  <a className="dropdown-item" href=" "><i className="bx bx-user font-size-16 align-middle mr-1" />
                  Search</a>
                  <a className="dropdown-item" href=" "><i className="bx bx-wallet font-size-16 align-middle mr-1" /> My Wallet</a>
                  <a className="dropdown-item d-block" href=" "><span className="badge badge-success float-right">11</span><i className="bx bx-wrench font-size-16 align-middle mr-1" /> Settings</a>
                  <a className="dropdown-item" href=" "><i className="bx bx-lock-open font-size-16 align-middle mr-1" /> Lock screen</a>
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
                        <li className="breadcrumb-item"><a href=" ">Tìm kiếm chuyến bay</a></li>
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
                          <div className="MuiContainer-root jss24 MuiContainer-disableGutters MuiContainer-maxWidthLg">
                            <div className="MuiPaper-root jss25 MuiPaper-elevation0 MuiPaper-rounded">
                              <div className="jss27">
                                <div className="MuiPaper-root jss29 MuiPaper-elevation4 MuiPaper-rounded">
                                  <div className="jss30">
                                    <div className="jss32">
                                      <div className="jss57 jss31 jss33 ">
                                        <div className="jss58">
                                          <div className="jss59"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z">
                                            </path>
                                          </svg></div>
                                          <div className="jss60"><label className="jss61">Từ</label>
                                            <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap">
                                              Hà Nội (HAN)</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="jss35">
                                        <button className="MuiButtonBase-root MuiIconButton-root jss36" tabIndex={0} type="button" aria-label="Đổi sân bay">
                                          <span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" className="jss1 jss39" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z">
                                            </path>
                                          </svg></span>
                                        </button>
                                      </div>
                                      <div className="jss57 jss31 jss34 ">
                                        <div className="jss58">
                                          <div className="jss60"><label className="jss61">Đến</label>
                                            <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap">
                                              Hồ Chí Minh (SGN)</p>
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
                                            <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap no-css">
                                              <div className="daypicker-1">
                                                <DayPicker />
                                              </div>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="jss74">
                                          <label className="MuiFormControlLabel-root jss50 MuiFormControlLabel-labelPlacementTop">
                                            <span className="MuiSwitch-root">
                                              <span className="MuiButtonBase-root MuiIconButton-root jss79 MuiSwitch-switchBase MuiSwitch-colorSecondary" aria-disabled="false">
                                                <span className="MuiIconButton-label">
                                                  <input type="checkbox" className="jss82 MuiSwitch-input" name="round-trip" />
                                                  <span className="MuiSwitch-thumb" />
                                                </span>
                                              </span>
                                              <span className="MuiSwitch-track" />
                                            </span>
                                            <span className="MuiTypography-root MuiFormControlLabel-label jss51 MuiTypography-body1">Khứ
                                            hồi</span>
                                          </label>
                                        </div>
                                      </div>
                                      {/* khu hoi */}

                                      <div className="jss42" >
                                        <div className="jss72" onClick={handleToggle}>
                                          {/* <div className="MuiCollapse-container MuiCollapse-entered" style={{ minHeight: '0px' }}> */}
                                          <div className={isActive ? "MuiCollapse-entered MuiCollapse-container" : "MuiCollapse-hidden MuiCollapse-container"}>
                                            <div className="MuiCollapse-wrapper">
                                              <div className="MuiCollapse-wrapperInner">
                                                <div className="jss44">+ Khứ hồi</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* <div className="MuiCollapse-container MuiCollapse-hidden" style={{ minHeight: '0px' }}> */}
                                        <div className={isActive ? "MuiCollapse-hidden  MuiCollapse-container" : "MuiCollapse-entered  MuiCollapse-container"}>
                                          <div className="MuiCollapse-wrapper">
                                            <div className="MuiCollapse-wrapperInner">
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
                                                    <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap">
                                                      <DayPicker />
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="jss72" onClick={handleToggle}>
                                                  <button className="MuiButtonBase-root MuiIconButton-root jss45 MuiIconButton-colorPrimary" tabIndex={0} type="button" >
                                                    <span className="MuiIconButton-label">
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
                                          <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap">
                                            1</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="jss48">
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss49 jss85 MuiButton-containedSecondary MuiButton-fullWidth" tabIndex={0} type="button">
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
              <div className={isActive1 ? " mudformHidden": "mudformShow"}>
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

              {/* nguoi lon tre em */}


              {/* end row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Search Booking</h4>
                      <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th style={{ width: '20px' }}>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                  <label className="custom-control-label" htmlFor="customCheck1">&nbsp;</label>
                                </div>
                              </th>
                              <th>Order ID</th>
                              <th>Billing Name</th>
                              <th>Date</th>
                              <th>Total</th>
                              <th>Payment Status</th>
                              <th>Payment Method</th>
                              <th>View Details</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                  <label className="custom-control-label" htmlFor="customCheck2">&nbsp;</label>
                                </div>
                              </td>
                              <td><a href=" " className="text-body font-weight-bold">#SK2540</a> </td>
                              <td>Neal Matthews</td>
                              <td>
                                07 Oct, 2019
                            </td>
                              <td>
                                $400
                            </td>
                              <td>
                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                              </td>
                              <td>
                                <i className="fab fa-cc-mastercard mr-1" /> Mastercard
                            </td>
                              <td>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                  View Details
                              </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                  <label className="custom-control-label" htmlFor="customCheck3">&nbsp;</label>
                                </div>
                              </td>
                              <td><a href=" " className="text-body font-weight-bold">#SK2541</a> </td>
                              <td>Jamal Burnett</td>
                              <td>
                                07 Oct, 2019
                            </td>
                              <td>
                                $380
                            </td>
                              <td>
                                <span className="badge badge-pill badge-soft-danger font-size-12">Chargeback</span>
                              </td>
                              <td>
                                <i className="fab fa-cc-visa mr-1" /> Visa
                            </td>
                              <td>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                  View Details
                              </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                  <label className="custom-control-label" htmlFor="customCheck4">&nbsp;</label>
                                </div>
                              </td>
                              <td><a href=" " className="text-body font-weight-bold">#SK2542</a> </td>
                              <td>Juan Mitchell</td>
                              <td>
                                06 Oct, 2019
                            </td>
                              <td>
                                $384
                            </td>
                              <td>
                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                              </td>
                              <td>
                                <i className="fab fa-cc-paypal mr-1" /> Paypal
                            </td>
                              <td>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                  View Details
                              </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                  <label className="custom-control-label" htmlFor="customCheck5">&nbsp;</label>
                                </div>
                              </td>
                              <td><a href=" " className="text-body font-weight-bold">#SK2543</a> </td>
                              <td>Barry Dick</td>
                              <td>
                                05 Oct, 2021
                            </td>
                              <td>
                                $412
                            </td>
                              <td>
                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                              </td>
                              <td>
                                <i className="fab fa-cc-mastercard mr-1" /> Mastercard
                            </td>
                              <td>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                  View Details
                              </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                  <label className="custom-control-label" htmlFor="customCheck6">&nbsp;</label>
                                </div>
                              </td>
                              <td><a href=" " className="text-body font-weight-bold">#SK2544</a> </td>
                              <td>Ronald Taylor</td>
                              <td>
                                04 Oct, 2019
                            </td>
                              <td>
                                $404
                            </td>
                              <td>
                                <span className="badge badge-pill badge-soft-warning font-size-12">Refund</span>
                              </td>
                              <td>
                                <i className="fab fa-cc-visa mr-1" /> Visa
                            </td>
                              <td>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                  View Details
                              </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                  <label className="custom-control-label" htmlFor="customCheck7">&nbsp;</label>
                                </div>
                              </td>
                              <td><a href=" " className="text-body font-weight-bold">#SK2545</a> </td>
                              <td>Jacob Hunter</td>
                              <td>
                                04 Oct, 2019
                            </td>
                              <td>
                                $392
                            </td>
                              <td>
                                <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                              </td>
                              <td>
                                <i className="fab fa-cc-paypal mr-1" /> Paypal
                            </td>
                              <td>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-toggle="modal" data-target=".exampleModal">
                                  View Details
                              </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* end table-responsive */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
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
            <a href=" " className="right-bar-toggle float-right">
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
  );
};

export default Search;
