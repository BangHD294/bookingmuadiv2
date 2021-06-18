import React from "react";
import "./passenger.css";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
const year = [
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
    { year: "2016" },
    { year: "2015" },
    { year: "2014" },
    { year: "2013" },
    { year: "2012" },
    { year: "2011" },
    { year: "2010" }
];

const month = [
    { month: '1' },
    { month: '2' },
    { month: '3' },
    { month: '4' },
    { month: '5' },
    { month: '6' },
    { month: '7' },
    { month: '8' },
    { month: '9' },
    { month: '10' },
    { month: '11' },
    { month: '12' },
]

const day = [
    { day: '1' },
    { day: '2' },
    { day: '3' },
    { day: '4' },
    { day: '5' },
    { day: '6' },
    { day: '7' },
    { day: '8' },
    { day: '9' },
    { day: '10' },
    { day: '11' },
    { day: '12' },
    { day: '13' },
    { day: '14' },
    { day: '15' },
    { day: '16' },
    { day: '17' },
    { day: '18' },
    { day: '19' },
    { day: '20' },
    { day: '21' },
    { day: '22' },
    { day: '23' },
    { day: '24' },
    { day: '25' },
    { day: '26' },
    { day: '27' },
    { day: '28' },
    { day: '29' },
    { day: '30' },
    { day: '31' },

]


const InputPassenger = () => {
    const [value, setValue] = React.useState('nam');
    const [value1, setValue1] = React.useState('nam1');
    const [value2, setValue2] = React.useState('nam2');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
    return (
        <div className="mudp2160">
            <div className="mudp2161">
                <h4 className="mudpTypography-root mudp2162 mudpTypography-h4">Hành khách</h4>
            </div>
            <div className="mudp2164">
                <div className="mudp2165">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="mudp1 mudp2166" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                        <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                        </path>
                    </svg>
                    <p className="mudpTypography-root mudpTypography-body2 mudp28">Vui lòng nhập tên hành
                        khách chính xác như trên giấy tờ tùy thân. Sau khi đặt vé hoàn tất, hầu như
                        sẽ không được đổi tên hoặc nếu có phải trả thêm phí.</p>
                </div>
                {/*  */}
                <div className="mudp2199">
                    <div>
                        <p className="mudpTypography-root mudpTypography-body1">Người lớn 1</p>
                    </div>
                    <button className="mudpButtonBase-root mudpIconButton-root mudpIconButton-colorSecondary mudpIconButton-sizeSmall" tabIndex={0} type="button">
                        <span className="mudpIconButton-label">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="mudp1 mudp2204" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z">
                                </path>
                            </svg>
                        </span>
                        <span className="mudpTouchRipple-root" />
                    </button>
                </div>
                {/*  */}
                <div className="mudp2205">
                    <div className="mudp2212">
                        <div className="mudpFormControl-root mudp2213">
                            <label className="mudpFormLabel-root mudp2216">Người lớn 1</label>
                            <div className="mudpGrid-root mudp2214 mudpGrid-container mudpGrid-spacing-xs-1 inputName2">

                                <div className="mudpGrid-root mudpGrid-item mudpGrid-grid-xs-4">
                                    <div className="mudpFormControl-root mudpTextField-root">
                                        <TextField
                                            className="inputName1"
                                            id="outlined-basic"
                                            label="Họ *"
                                            variant="outlined" />
                                    </div>
                                </div>

                                <div className="mudpGrid-root mudpGrid-item mudpGrid-grid-xs-8">
                                    <div className="mudpFormControl-root mudpTextField-root mudp2215">
                                        <TextField
                                            className="inputName1"
                                            id="outlined-basic"
                                            label="Tên đệm & Tên*"
                                            variant="outlined" />
                                    </div>
                                </div>

                            </div>
                            <p className="mudpFormHelperText-root mudp2217">Vui lòng nhập họ tên không dấu
                                chính xác như trên CMT / CCCD</p>
                        </div>


                        <div className="mudpFormControl-root mudp2218 inputAdults">
                            <FormControl component="fieldset">
                                <FormLabel className="mudp2219" component="legend">Giới tính *</FormLabel>
                                <RadioGroup className="mudpcheckrd" aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                    <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
                                    <FormControlLabel value="nam" control={<Radio />} label="Nam" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="mudp2199">
                    <div>
                        <p className="mudpTypography-root mudpTypography-body1">Trẻ em 1</p>
                    </div>
                    <button className="mudpButtonBase-root mudpIconButton-root mudpIconButton-colorSecondary mudpIconButton-sizeSmall" tabIndex={0} type="button">
                        <span className="mudpIconButton-label">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="mudp1 mudp2204" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z">
                                </path>
                            </svg>
                        </span>
                        <span className="mudpTouchRipple-root" />
                    </button>
                </div>

                {/*  */}
                <div className="mudp2205">
                    <div className="mudp2212">
                        <div className="mudpFormControl-root mudp2213">
                            <label className="mudpFormLabel-root mudp2216">Trẻ em 1</label>
                            <div className="mudpGrid-root mudp2214 mudpGrid-container mudpGrid-spacing-xs-1 inputName2">
                                <div className="mudpGrid-root mudpGrid-item mudpGrid-grid-xs-4">
                                    <div className="mudpFormControl-root mudpTextField-root">
                                        <TextField
                                            className="inputName1"
                                            id="outlined-basic"
                                            label="Họ *"
                                            variant="outlined" />
                                    </div>
                                </div>

                                <div className="mudpGrid-root mudpGrid-item mudpGrid-grid-xs-8">
                                    <div className="mudpFormControl-root mudpTextField-root mudp2215">
                                        <TextField
                                            className="inputName1"
                                            id="outlined-basic"
                                            label="Tên đệm & Tên*"
                                            variant="outlined" />
                                    </div>
                                </div>
                            </div>
                            <p className="mudpFormHelperText-root mudp2217">Vui lòng nhập họ tên không dấu
                                chính xác như trên CMT / CCCD</p>
                        </div>
                        <div className="mudpFormControl-root mudp2218">
                            <div className="mudpFormControl-root mudp2218 inputAdults">
                                <FormControl component="fieldset">
                                    <FormLabel className="mudp2219" component="legend">Giới tính *</FormLabel>
                                    <RadioGroup className="mudpcheckrd" aria-label="gender" name="gender2" value={value1} onChange={handleChange1}>
                                        <FormControlLabel value="nu1" control={<Radio />} label="Nữ" />
                                        <FormControlLabel value="nam1" control={<Radio />} label="Nam" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="mudpFormControl-root mudp2228 mudp2220 inputacplt">
                            <label className="mudpFormLabel-root mudp2229">Ngày sinh</label>
                            <div className="mudp2230">

                                <div className="mudpAutocomplete-root mudp2231 mudpAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false">
                                    <div className="mudpFormControl-root mudpTextField-root mudpFormControl-fullWidth">
                                        <label className="mudpFormLabel-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-shrink mudpInputLabel-marginDense mudpInputLabel-outlined mudpFormLabel-filled" data-shrink="true" id="mudp-46143-label" htmlFor="mudp-46143">Năm sinh</label>
                                        <div className="inputName2 mudpInputBase-root mudpOutlinedInput-root mudpAutocomplete-inputRoot mudpInputBase-fullWidth mudpInputBase-formControl mudpInputBase-adornedEnd mudpOutlinedInput-adornedEnd mudpInputBase-marginDense mudpOutlinedInput-marginDense inputdmy">
                                            <Autocomplete
                                                id="country-select-demo"
                                                style={{ width: 400 }}
                                                options={year}

                                                autoHighlight
                                                getOptionLabel={(option) => option.year}
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {option.year}
                                                    </React.Fragment>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Năm sinh"
                                                        variant="outlined"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: "new-password" // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mudpAutocomplete-root mudp2231 mudpAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false">
                                    <div className="mudpFormControl-root mudpTextField-root mudpFormControl-fullWidth">
                                        <label className="mudpFormLabel-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-shrink mudpInputLabel-marginDense mudpInputLabel-outlined mudpFormLabel-filled" data-shrink="true" id="mudp-91813-label" htmlFor="mudp-91813">Tháng sinh</label>
                                        <div className="inputName2 mudpInputBase-root mudpOutlinedInput-root mudpAutocomplete-inputRoot mudpInputBase-fullWidth mudpInputBase-formControl mudpInputBase-adornedEnd mudpOutlinedInput-adornedEnd mudpInputBase-marginDense mudpOutlinedInput-marginDense inputdmy">
                                            <Autocomplete
                                                id="country-select-demo"
                                                style={{ width: 400 }}
                                                options={month}

                                                autoHighlight
                                                getOptionLabel={(option) => option.month}
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {option.month}
                                                    </React.Fragment>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Tháng sinh"
                                                        variant="outlined"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: "new-password" // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mudpAutocomplete-root mudp2231 mudpAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false">
                                    <div className="mudpFormControl-root mudpTextField-root mudpFormControl-fullWidth">
                                        <label className="mudpFormLabel-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-shrink mudpInputLabel-marginDense mudpInputLabel-outlined mudpFormLabel-filled" data-shrink="true" id="mudp-24980-label" htmlFor="mudp-24980">Ngày sinh</label>
                                        <div className="inputName2 mudpInputBase-root mudpOutlinedInput-root mudpAutocomplete-inputRoot mudpInputBase-fullWidth mudpInputBase-formControl mudpInputBase-adornedEnd mudpOutlinedInput-adornedEnd mudpInputBase-marginDense mudpOutlinedInput-marginDense inputdmy">
                                            <Autocomplete
                                                id="country-select-demo"
                                                style={{ width: 400 }}
                                                options={day}

                                                autoHighlight
                                                getOptionLabel={(option) => option.day}
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {option.day}
                                                    </React.Fragment>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Năm sinh"
                                                        variant="outlined"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: "new-password" // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Em bé */}
                <div className="mudp2199">
                    <div>
                        <p className="mudpTypography-root mudpTypography-body1">Em bé 1</p>
                    </div>
                    <button className="mudpButtonBase-root mudpIconButton-root mudpIconButton-colorSecondary mudpIconButton-sizeSmall" tabIndex={0} type="button">
                        <span className="mudpIconButton-label">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="mudp1 mudp2204" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z">
                                </path>
                            </svg>
                        </span>
                        <span className="mudpTouchRipple-root" />
                    </button>
                </div>

                <div className="mudp2205">
                    <div className="mudp2212">
                    <div className="mudpFormControl-root mudp2213">
                            <label className="mudpFormLabel-root mudp2216">Em bé 1</label>
                            <div className="mudpGrid-root mudp2214 mudpGrid-container mudpGrid-spacing-xs-1 inputName2">
                                <div className="mudpGrid-root mudpGrid-item mudpGrid-grid-xs-4">
                                    <div className="mudpFormControl-root mudpTextField-root">
                                        <TextField
                                            className="inputName1"
                                            id="outlined-basic"
                                            label="Họ *"
                                            variant="outlined" />
                                    </div>
                                </div>

                                <div className="mudpGrid-root mudpGrid-item mudpGrid-grid-xs-8">
                                    <div className="mudpFormControl-root mudpTextField-root mudp2215">
                                        <TextField
                                            className="inputName1"
                                            id="outlined-basic"
                                            label="Tên đệm & Tên*"
                                            variant="outlined" />
                                    </div>
                                </div>
                            </div>
                            <p className="mudpFormHelperText-root mudp2217">Vui lòng nhập họ tên không dấu
                                chính xác như trên CMT / CCCD</p>
                        </div>
                        <div className="mudpFormControl-root mudp2218">
                            <div className="mudpFormControl-root mudp2218 inputAdults">
                                <FormControl component="fieldset">
                                    <FormLabel className="mudp2219" component="legend">Giới tính *</FormLabel>
                                    <RadioGroup className="mudpcheckrd" aria-label="gender" name="gender2" value={value2} onChange={handleChange2}>
                                        <FormControlLabel value="nu2" control={<Radio />} label="Nữ" />
                                        <FormControlLabel value="nam2" control={<Radio />} label="Nam" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="mudpFormControl-root mudp2228 mudp2220 inputacplt">
                            <label className="mudpFormLabel-root mudp2229">Ngày sinh</label>
                            <div className="mudp2230">

                                <div className="mudpAutocomplete-root mudp2231 mudpAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false">
                                    <div className="mudpFormControl-root mudpTextField-root mudpFormControl-fullWidth">
                                        <label className="mudpFormLabel-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-shrink mudpInputLabel-marginDense mudpInputLabel-outlined mudpFormLabel-filled" data-shrink="true" id="mudp-46143-label" htmlFor="mudp-46143">Năm sinh</label>
                                        <div className="inputName2 mudpInputBase-root mudpOutlinedInput-root mudpAutocomplete-inputRoot mudpInputBase-fullWidth mudpInputBase-formControl mudpInputBase-adornedEnd mudpOutlinedInput-adornedEnd mudpInputBase-marginDense mudpOutlinedInput-marginDense inputdmy">
                                            <Autocomplete
                                                id="country-select-demo"
                                                style={{ width: 400 }}
                                                options={year}

                                                autoHighlight
                                                getOptionLabel={(option) => option.year}
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {option.year}
                                                    </React.Fragment>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Năm sinh"
                                                        variant="outlined"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: "new-password" // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mudpAutocomplete-root mudp2231 mudpAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false">
                                    <div className="mudpFormControl-root mudpTextField-root mudpFormControl-fullWidth">
                                        <label className="mudpFormLabel-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-shrink mudpInputLabel-marginDense mudpInputLabel-outlined mudpFormLabel-filled" data-shrink="true" id="mudp-91813-label" htmlFor="mudp-91813">Tháng sinh</label>
                                        <div className="inputName2 mudpInputBase-root mudpOutlinedInput-root mudpAutocomplete-inputRoot mudpInputBase-fullWidth mudpInputBase-formControl mudpInputBase-adornedEnd mudpOutlinedInput-adornedEnd mudpInputBase-marginDense mudpOutlinedInput-marginDense inputdmy">
                                            <Autocomplete
                                                id="country-select-demo"
                                                style={{ width: 400 }}
                                                options={month}

                                                autoHighlight
                                                getOptionLabel={(option) => option.month}
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {option.month}
                                                    </React.Fragment>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Tháng sinh"
                                                        variant="outlined"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: "new-password" // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mudpAutocomplete-root mudp2231 mudpAutocomplete-hasPopupIcon" role="combobox" aria-expanded="false">
                                    <div className="mudpFormControl-root mudpTextField-root mudpFormControl-fullWidth">
                                        <label className="mudpFormLabel-root mudpInputLabel-root mudpInputLabel-formControl mudpInputLabel-animated mudpInputLabel-shrink mudpInputLabel-marginDense mudpInputLabel-outlined mudpFormLabel-filled" data-shrink="true" id="mudp-24980-label" htmlFor="mudp-24980">Ngày sinh</label>
                                        <div className="inputName2 mudpInputBase-root mudpOutlinedInput-root mudpAutocomplete-inputRoot mudpInputBase-fullWidth mudpInputBase-formControl mudpInputBase-adornedEnd mudpOutlinedInput-adornedEnd mudpInputBase-marginDense mudpOutlinedInput-marginDense inputdmy">
                                            <Autocomplete
                                                id="country-select-demo"
                                                style={{ width: 400 }}
                                                options={day}

                                                autoHighlight
                                                getOptionLabel={(option) => option.day}
                                                renderOption={(option) => (
                                                    <React.Fragment>
                                                        {option.day}
                                                    </React.Fragment>
                                                )}
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        label="Năm sinh"
                                                        variant="outlined"
                                                        inputProps={{
                                                            ...params.inputProps,
                                                            autoComplete: "new-password" // disable autocomplete and autofill
                                                        }}
                                                    />
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    );
}
export default InputPassenger;