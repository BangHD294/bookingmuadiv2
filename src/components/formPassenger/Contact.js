import React from "react";
import "./passenger.css";
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//             height: '9ch'
//         },
//     },
// }));

const Contact = () => {
    // const classes = useStyles();
    return (
        <div className="mudp2160">
            <div className="mudp2161">
                <h4 className="mudpTg-root mudp2162 mudpTg-h4">Người liên hệ</h4>
            </div>
            <div className="mudp2164">
                <div className="mudp2232">
                    <div>
                        <p className="mudpTg-root Mudptg-body1">Liên hệ</p>
                    </div>
                    <button className="mudpbtnbase-root mudpiconbtn-root mudpiconbtn-colorSecondary mudpiconbtn-sizeSmall" tabIndex={0} type="button">
                        <span className="mudpiconbtn-label">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="mudp1 mudp2235" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z">
                                </path>
                            </svg>
                        </span>
                        <span className="mudpTR-root" />
                    </button>
                </div>
                <div className="mudp2236">
                    <div className="mudp2243">
                        <div className="mudpform-root mudpTextField-root mudp2244">
                            {/* <label className="mudpformlb-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-marginDense mudpInputLabel-outlined mudp-required mudp-required" data-shrink="false">Họ và tên
                                <span aria-hidden="true" className="mudpFormLabel-asterisk mudpInputLabel-asterisk"> *</span>
                            </label> */}
                            {/* <form className={classes.root} noValidate autoComplete="off"> */}
                            <TextField 
                            className="inputName1"
                            id="outlined-basic" 
                            label="Họ và tên *" 
                            variant="outlined" />
                            {/* </form> */}
                        </div>
                        <div className="mudpform-root mudpTextField-root mudp2244">
                            {/* <label className="mudpformlb-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-marginDense mudpInputLabel-outlined mudp-required mudp-required" data-shrink="false">Số điện thoại
                                <span aria-hidden="true" className="mudpFormLabel-asterisk mudpInputLabel-asterisk"> *</span>
                            </label>
                            <div className="mudpInputBase-root mudpOutlinedInput-root mudpInputBase-formControl mudpInputBase-marginDense mudpOutlinedInput-marginDense"> */}
                            <TextField
                                className="inputName1"
                                id="outlined-basic"
                                label="Số điện thoại *"
                                variant="outlined"
                            />
                            {/* </div> */}
                        </div>
                        <div className="mudpform-root mudpTextField-root mudp2244">
                            {/* <label className="mudpformlb-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-marginDense mudpInputLabel-outlined" data-shrink="false">Email</label>
                            <div className="mudpInputBase-root mudpOutlinedInput-root mudpInputBase-formControl mudpInputBase-marginDense mudpOutlinedInput-marginDense"> */}
                            <TextField
                                className="inputName1"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;