// import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { history } from "../helpers/history";
import { clearMessage } from "../actions/message";
//
import DatePicker from "react-datepicker";
import { addMonths } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
const Profile = () => {
  const [startDate, setStartDate] = useState(new Date());

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


  return (
    <bodys data-sidebar="dark">
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets\images\logomini.png" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets\images\logomini.png" alt="" height={17} />
                  </span>
                </a>
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets\images\logo-light.svg" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets\images\logomini.png" alt="" height={19} />
                  </span>
                </a>
              </div>
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
                  Profile</a>
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
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            {/*- Sidemenu */}
            <div id="sidebar-menu">
              {/* Left Menu Start */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>
                <li>
                  <a href=" " className="waves-effect">
                    <i className="bx bx-home-circle" /><span className="badge badge-pill badge-info float-right">03</span>
                    <span>Dashboards</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="index.html">Default</a></li>
                    <li><a href="dashboard-saas.html">Saas</a></li>
                    <li><a href="dashboard-crypto.html">Crypto</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-layout" />
                    <span>Layouts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="layouts-horizontal.html">Horizontal</a></li>
                    <li><a href="layouts-light-sidebar.html">Light Sidebar</a></li>
                    <li><a href="layouts-compact-sidebar.html">Compact Sidebar</a></li>
                    <li><a href="layouts-icon-sidebar.html">Icon Sidebar</a></li>
                    <li><a href="layouts-boxed.html">Boxed Width</a></li>
                    <li><a href="layouts-preloader.html">Preloader</a></li>
                    <li><a href="layouts-colored-sidebar.html">Colored Sidebar</a></li>
                  </ul>
                </li>
                <li className="menu-title">Apps</li>
                <li>
                  <a href="calendar.html" className=" waves-effect">
                    <i className="bx bx-calendar" />
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="chat.html" className=" waves-effect">
                    <i className="bx bx-chat" />
                    <span className="badge badge-pill badge-success float-right">New</span>
                    <span>Chat</span>
                  </a>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-store" />
                    <span>Ecommerce</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="ecommerce-products.html">Products</a></li>
                    <li><a href="ecommerce-product-detail.html">Product Detail</a></li>
                    <li><a href="ecommerce-orders.html">Orders</a></li>
                    <li><a href="ecommerce-customers.html">Customers</a></li>
                    <li><a href="ecommerce-cart.html">Cart</a></li>
                    <li><a href="ecommerce-checkout.html">Checkout</a></li>
                    <li><a href="ecommerce-shops.html">Shops</a></li>
                    <li><a href="ecommerce-add-product.html">Add Product</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-bitcoin" />
                    <span>Crypto</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="crypto-wallet.html">Wallet</a></li>
                    <li><a href="crypto-buy-sell.html">Buy/Sell</a></li>
                    <li><a href="crypto-exchange.html">Exchange</a></li>
                    <li><a href="crypto-lending.html">Lending</a></li>
                    <li><a href="crypto-orders.html">Orders</a></li>
                    <li><a href="crypto-kyc-application.html">KYC Application</a></li>
                    <li><a href="crypto-ico-landing.html">ICO Landing</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-envelope" />
                    <span>Email</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="email-inbox.html">Inbox</a></li>
                    <li><a href="email-read.html">Read Email</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-receipt" />
                    <span>Invoices</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="invoices-list.html">Invoice List</a></li>
                    <li><a href="invoices-detail.html">Invoice Detail</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-briefcase-alt-2" />
                    <span>Projects</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="projects-grid.html">Projects Grid</a></li>
                    <li><a href="projects-list.html">Projects List</a></li>
                    <li><a href="projects-overview.html">Project Overview</a></li>
                    <li><a href="projects-create.html">Create New</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-task" />
                    <span>Tasks</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="tasks-list.html">Task List</a></li>
                    <li><a href="tasks-kanban.html">Kanban Board</a></li>
                    <li><a href="tasks-create.html">Create Task</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bxs-user-detail" />
                    <span>Contacts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="contacts-grid.html">User Grid</a></li>
                    <li><a href="contacts-list.html">User List</a></li>
                    <li><a href="contacts-profile.html">Profile</a></li>
                  </ul>
                </li>
                <li className="menu-title">Pages</li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-user-circle" />
                    <span>Authentication</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="auth-login.html">Login</a></li>
                    <li><a href="auth-register.html">Register</a></li>
                    <li><a href="auth-recoverpw.html">Recover Password</a></li>
                    <li><a href="auth-lock-screen.html">Lock Screen</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-file" />
                    <span>Utility</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="pages-starter.html">Starter Page</a></li>
                    <li><a href="pages-maintenance.html">Maintenance</a></li>
                    <li><a href="pages-comingsoon.html">Coming Soon</a></li>
                    <li><a href="pages-timeline.html">Timeline</a></li>
                    <li><a href="pages-faqs.html">FAQs</a></li>
                    <li><a href="pages-pricing.html">Pricing</a></li>
                    <li><a href="pages-404.html">Error 404</a></li>
                    <li><a href="pages-500.html">Error 500</a></li>
                  </ul>
                </li>
                <li className="menu-title">Components</li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-tone" />
                    <span>UI Elements</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="ui-alerts.html">Alerts</a></li>
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-cards.html">Cards</a></li>
                    <li><a href="ui-carousel.html">Carousel</a></li>
                    <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                    <li><a href="ui-grid.html">Grid</a></li>
                    <li><a href="ui-images.html">Images</a></li>
                    <li><a href="ui-lightbox.html">Lightbox</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-rangeslider.html">Range Slider</a></li>
                    <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                    <li><a href="ui-sweet-alert.html">Sweet-Alert</a></li>
                    <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                    <li><a href="ui-video.html">Video</a></li>
                    <li><a href="ui-general.html">General</a></li>
                    <li><a href="ui-colors.html">Colors</a></li>
                    <li><a href="ui-rating.html">Rating</a></li>
                    <li><a href="ui-notifications.html">Notifications</a></li>
                    <li><a href="ui-image-cropper.html">Image Cropper</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="waves-effect">
                    <i className="bx bxs-eraser" />
                    <span className="badge badge-pill badge-danger float-right">10</span>
                    <span>Forms</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="form-elements.html">Form Elements</a></li>
                    <li><a href="form-layouts.html">Form Layouts</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-advanced.html">Form Advanced</a></li>
                    <li><a href="form-editors.html">Form Editors</a></li>
                    <li><a href="form-uploads.html">Form File Upload</a></li>
                    <li><a href="form-xeditable.html">Form Xeditable</a></li>
                    <li><a href="form-repeater.html">Form Repeater</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-mask.html">Form Mask</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-list-ul" />
                    <span>Tables</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="tables-basic.html">Basic Tables</a></li>
                    <li><a href="tables-datatable.html">Data Tables</a></li>
                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                    <li><a href="tables-editable.html">Editable Table</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bxs-bar-chart-alt-2" />
                    <span>Charts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="charts-apex.html">Apex Charts</a></li>
                    <li><a href="charts-echart.html">E Charts</a></li>
                    <li><a href="charts-chartjs.html">Chartjs Chart</a></li>
                    <li><a href="charts-flot.html">Flot Chart</a></li>
                    <li><a href="charts-tui.html">Toast UI Chart</a></li>
                    <li><a href="charts-knob.html">Jquery Knob Chart</a></li>
                    <li><a href="charts-sparkline.html">Sparkline Chart</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-aperture" />
                    <span>Icons</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="icons-boxicons.html">Boxicons</a></li>
                    <li><a href="icons-materialdesign.html">Material Design</a></li>
                    <li><a href="icons-dripicons.html">Dripicons</a></li>
                    <li><a href="icons-fontawesome.html">Font awesome</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-map" />
                    <span>Maps</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="maps-google.html">Google Maps</a></li>
                    <li><a href="maps-vector.html">Vector Maps</a></li>
                    <li><a href="maps-leaflet.html">Leaflet Maps</a></li>
                  </ul>
                </li>
                <li>
                  <a href=" " className="has-arrow waves-effect">
                    <i className="bx bx-share-alt" />
                    <span>Multi Level</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li><a href=" ">Level 1.1</a></li>
                    <li><a href=" " className="has-arrow">Level 1.2</a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a href=" ">Level 2.1</a></li>
                        <li><a href=" ">Level 2.2</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
          </div>
        </div>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Dashboard</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href=" ">Dashboards</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              {/*  */}
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
                                      <div className="jss57 jss31 jss41 ">
                                        <div className="jss58">
                                          <div className="jss59"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                              <path fill="none" d="M0 0h24v24H0z" />
                                              <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z">
                                              </path>
                                            </g>
                                          </svg></div>
                                          <div className="jss60"><label className="jss61">Ngày
                                            đi</label>
                                            <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap">
                                              <DatePicker
                                                selected={startDate}
                                                onChange={date => setStartDate(date)}
                                                minDate={new Date()}
                                                maxDate={addMonths(new Date(), 5)}
                                                showDisabledMonthNavigation
                                              />
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
                                      <div className="jss42">
                                        <div className="jss72">
                                          <div className="MuiCollapse-container MuiCollapse-entered" style={{ minHeight: '0px' }}>
                                            <div className="MuiCollapse-wrapper">
                                              <div className="MuiCollapse-wrapperInner">
                                                <div className="jss44">+ Khứ hồi
                                              </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="MuiCollapse-container MuiCollapse-hidden" style={{ minHeight: '0px' }}>
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
                                                  <div className="jss60"><label className="jss61">Ngày
                                                    về</label>
                                                    <p className="MuiTypography-root jss62 MuiTypography-body1 MuiTypography-noWrap">
                                                      26/05/2021</p>
                                                  </div>
                                                </div>
                                                <div className="jss72"><button className="MuiButtonBase-root MuiIconButton-root jss45 MuiIconButton-colorPrimary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss46" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                  <g>
                                                    <path fill="none" d="M0 0h24v24H0z">
                                                    </path>
                                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z">
                                                    </path>
                                                  </g>
                                                </svg></span></button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="jss57 jss31 jss47 ">
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
                                  <div className="jss48"><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss49 jss85 MuiButton-containedSecondary MuiButton-fullWidth" tabIndex={0} type="button"><span className="MuiButton-label">Tìm chuyến
                                      bay</span></button></div>
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
              {/*  */}
              {/*  search booking*/}

              {/* end row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Latest Transaction</h4>
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
                                05 Oct, 2019
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
          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  © Skote.
              </div>
                <div className="col-sm-6">
                  <div className="text-sm-right d-none d-sm-block">
                    Design &amp; Develop by Themesbrand
                </div>
                </div>
              </div>
            </div>
          </footer>
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

export default Profile;
