import React from "react";

const Notifications = () => {
    return (
        <div>
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
                        <a href="# " className="small"> View All</a>
                    </div>
                </div>
            </div>
            <div data-simplebar style={{ maxHeight: '230px' }}>
                <a href="# " className="text-reset notification-item">
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
                <a href="# " className="text-reset notification-item">
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
                <a href="# " className="text-reset notification-item">
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
                <a href="# " className="text-reset notification-item">
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
                <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="# ">
                    <i className="mdi mdi-arrow-right-circle mr-1" /> View More..
                </a>
            </div>
        </div>
    </div>
    );
}
export default Notifications;