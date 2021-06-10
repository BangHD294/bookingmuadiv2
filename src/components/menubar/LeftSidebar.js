import React from "react";

const LeftSidebar = () => {
    return (
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
                                <span>Tìm kiếm chuyến bay</span>
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
                                <li><a href="contacts-profile.html">Search</a></li>
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
    );
}
export default LeftSidebar;
