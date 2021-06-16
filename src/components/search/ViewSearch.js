import React from 'react';
import "../search/ViewSearch.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 771,
    },
}));
const ViewSearch = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // 
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    // 
    return (
        <div className="jss1770">
            <div className="jss1771">
                <div className="mufMuiTabs-root jss1773 mufoverflow">
                    <div className="mufMuiButtonBase-root mufMuiTabScrollButton-root mufMuiTabs-scrollButtons mufMuiTabs-scrollButtonsDesktop" aria-disabled="false">
                        <svg className="mufMuiSvgIcon-root mufMuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                        </svg>
                        <span className="mufMuiTouchRipple-root" /></div>
                    <div className="mufMuiTabs-scrollable" style={{ width: '99px', height: '99px', position: 'absolute', top: '-9999px', overflow: 'scroll' }}>
                    </div>
                    <div className="mufMuiTabs-scroller mufMuiTabs-scrollable" style={{ marginBottom: '0px' }}>
                        <div className="mufMuiTabs-flexContainer" role="tablist">
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T3, 8/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T4, 9/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774 jss1775" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T5, 10/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T6, 11/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T7, 12/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774 Mui-selected" tabIndex={0} type="button" role="tab" aria-selected="true">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">CN, 13/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span><span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T2, 14/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T3, 15/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T4, 16/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T5, 17/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T6, 18/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T7, 19/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">CN, 20/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T2, 21/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T3, 22/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T4, 23/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T5, 24/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T6, 25/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T7, 26/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">CN, 27/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T2, 28/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T3, 29/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T4, 30/6</span>
                                    <span className="jss1780">598,900 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T5, 1/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T6, 2/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T7, 3/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">CN, 4/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T2, 5/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T3, 6/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                            <button className="mufMuiButtonBase-root mufMuiTab-root mufMuiTab-textColorInherit jss1774" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                <span className="mufMuiTab-wrapper">
                                    <span className="jss1779">T4, 7/7</span>
                                    <span className="jss1780">829,000 ₫</span>
                                </span>
                                <span className="mufMuiTouchRipple-root" />
                            </button>
                        </div>
                        <span className="jss1782 jss1784 mufMuiTabs-indicator jss1777" style={{ left: '551.109px', width: '101.422px' }} />
                    </div>
                    <div className="mufMuiButtonBase-root mufMuiTabScrollButton-root mufMuiTabs-scrollButtons mufMuiTabs-scrollButtonsDesktop mufMui-disabled" aria-disabled="false">
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                        </svg>
                        <span className="MuiTouchRipple-root" />
                    </div>
                </div>
            </div>
            <div className="jss1772">
                <div className="jss1786 muf1786">
                    <Button className="jss1788 jss28 muf28">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1791" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z" clipRule="evenodd" />
                        </svg>
                        <span>Sắp xếp</span>
                    </Button>

                    <Button className="jss1792">
                        <span>Giờ bay</span>
                    </Button>

                    <Button className="jss1792">
                        <span>Giá vé</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1794" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clipRule="evenodd" />
                        </svg>
                    </Button>

                </div>
            </div>
            <div className="jss1795" id="one-way-list">
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                </div>
                            </div>
                            <p className=" jss1973  jss28">VJ127</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className=" jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span className="mufViewTime">06:45</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span className="mufViewTime">09:00</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className=" jss1980  jss28 ">
                                    <span className="jss1981">2g 15p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985 muf1985">
                                <p className=" jss1986 mufprice ">598,900 ₫</p>
                                <Button variant="contained" color="primary">Chọn</Button>
                            </div>
                        </div>
                    </div>
                    {/* chi tiết */}

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="jss1964">

                        <AccordionSummary>
                            <div className="jss1965 muf1965">
                                <Button className="jss1966">
                                    <span className="MuiButton-label">
                                        <span>Chi tiết</span>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                        </svg>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="MuiTouchRipple-root" />
                                </Button>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">

                                </button>
                                <div />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className={classes.root}>
                                <div className="jss1969">
                                    <div className="jss1993">
                                        <div className=" jss1995">
                                            <div className="" style={{ overflow: 'hidden' }}>
                                                <div className="muf1997" role="tablist">
                                                    <AppBar position="static" color="default">
                                                        <Tabs
                                                            value={value}
                                                            onChange={handleChange1}
                                                            indicatorColor="primary"
                                                            textColor="primary"
                                                            variant="fullWidth"
                                                            aria-label="full width tabs example"
                                                        >
                                                            <Tab className="jss1997 " label="Chuyến bay" {...a11yProps(0)} />
                                                            <Tab className="jss1997" label="Chi tiết giá" {...a11yProps(1)} />

                                                        </Tabs>
                                                    </AppBar>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jss1998 jss1999">
                                        <SwipeableViews
                                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                            index={value}
                                            onChangeIndex={handleChangeIndex}
                                        >
                                            <TabPanel value={value} index={0} dir={theme.direction}>
                                                {/* chuyến bay */}
                                                <div className>
                                                    <div>
                                                        <div className="jss2007">
                                                            <div>
                                                                <div className="jss2008">
                                                                    <div className="jss2009">
                                                                        <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" /></div>
                                                                        <p className=" jss2010  jss28 ">
                                                                            VJ127</p>
                                                                    </div>
                                                                    <div className="jss2011">
                                                                        <p className=" jss2012">
                                                                            Vietjet Air</p>
                                                                        <p className=" jss2013  jss28 ">
                                                                            <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                            </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                            </svg><span>Hạng E1_ECO</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="jss2014">
                                                                    <div className="jss2015 jss2016">
                                                                        <div className="jss2017">
                                                                            <div>
                                                                                <p className=" jss2018 ">
                                                                                    06:45</p>
                                                                                <p className="">
                                                                                    10 Thg6</p>
                                                                            </div>
                                                                            <div>
                                                                                <p className=" jss2018 ">
                                                                                    09:00</p>
                                                                                <p className="">
                                                                                    10 Thg6</p>
                                                                            </div>
                                                                            <div className="jss2019" />
                                                                        </div>
                                                                        <div className="jss2020 jss2021">
                                                                            <div className="jss2023">
                                                                                <p className=" jss2022 ">
                                                                                    Hà Nội (HAN)</p>
                                                                                <p className=" jss28">
                                                                                    Sân bay quốc tế Nội Bài</p>
                                                                            </div>
                                                                            <div className="jss2023">
                                                                                <p className=" jss2022 ">
                                                                                    Hồ Chí Minh (SGN)</p>
                                                                                <p className="jss28 ">
                                                                                    Sân bay quốc tế Tân Sơn Nhất</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="jss2028 jss2029">
                                                                        <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                            </svg> Xách tay 7kg
                                                                        </p>
                                                                        <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                                </path>
                                                                            </svg> Không hoàn vé
                                                                        </p>
                                                                        <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                                </path>
                                                                            </svg> Không ký gửi
                                                                        </p>
                                                                        <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                                </path>
                                                                            </svg> Không đổi ngày
                                                                        </p>
                                                                        <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                                </path>
                                                                            </svg> Không ăn nhẹ
                                                                        </p>
                                                                        <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                                <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                            </svg> Airbus 321
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel className="mufDetail" value={value} index={1} dir={theme.direction}>
                                                  {/* chi tiết giá */}
                                                <div  className="">
                                                    <div className="jss2035 ">
                                                        <div className="jss2036">
                                                            <div className="jss2037">
                                                                <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                    </svg> Người lớn
                                                                </p>
                                                                <p className="MuiTypography-root MuiTypography-body1">
                                                                    <span>1 người x </span><span className="jss2040">598,900₫</span>
                                                                </p>
                                                            </div>
                                                            <div className="jss2037 muf2037">
                                                                <p className=" jss2039 jss2038 muf2037">
                                                                    Bạn thanh toán</p>
                                                                <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">598,900 ₫</span></p>
                                                            </div>
                                                        </div>
                                                        <div className="jss2042 jss2043 muf2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                            <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                            </path>
                                                        </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </SwipeableViews>

                                      


                                    </div>
                                    <div className="jss2058 jss2001">
                                        <div className="jss2061">
                                            <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                                598,900 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                    </path>
                                                </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                            <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                (1 người lớn)</p>
                                        </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                    </div>
                                    <div className="jss2059 jss2001">
                                        <div className="jss2060">
                                            <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                                <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                </svg><span>Vietjet Air</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                </svg><span>VJ127</span>
                                            </p>
                                            <div className="jss2069">
                                                <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                    <span>06:45</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                    </svg><span>09:00</span>
                                                </h4>
                                                <h4 className="MuiTypography-root jss2071 MuiTypography-h4">598,900
                                                    ₫</h4>
                                            </div>
                                        </div>
                                        <div className="jss2060" />
                                        <div className="jss2060">
                                            <div className="jss2062">
                                                <h4 className="MuiTypography-root jss2061 MuiTypography-h4">598,900
                                                    ₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionDetails>

                    </Accordion>
                    {/*  */}
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VJ153</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>08:50</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>11:10</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 20p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">598,900 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div />
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994">
                                        <button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button">
                                            <span className="MuiIconButton-label">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="MuiTouchRipple-root" />
                                        </button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4>
                                        <span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true">
                                                    <span className="MuiTab-wrapper">Chuyến bay</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Chi tiết giá</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958">
                                                                <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                                            </div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">VJ153</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">Vietjet Air</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 20p</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Bay thẳng</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Hạng E1_ECO</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">08:50</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4"> 11:10</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">  Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4"> Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 7kg </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ăn nhẹ </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn  </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span>
                                                        <span className="jss2040">598,900₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">598,900 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                    <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                    </path>
                                                </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">598,900 ₫
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"></path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">(1 người lớn)</p>
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Đặt</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>Vietjet Air</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VJ153</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>08:50</span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>11:10</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">598,900₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">598,900₫</h4>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                                <span className="MuiButton-label">Chọn</span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                </div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VJ133</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>10:15</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>12:25</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 10p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">598,900 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div />
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994">
                                        <button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button">
                                            <span className="MuiIconButton-label">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="MuiTouchRipple-root" />
                                        </button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn</h4>
                                        <span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true">
                                                    <span className="MuiTab-wrapper">Chuyến bay</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Chi tiết giá</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958">
                                                                <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                                            </div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> VJ133</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">Vietjet Air</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 10p</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Bay thẳng</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Hạng E1_ECO</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">10:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">12:25</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4"> Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 7kg</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ăn nhẹ </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn</p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span>
                                                        <span className="jss2040">598,900₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">598,900 ₫</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                    <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                    </path>
                                                </svg> Giá cuối cùng (Đã bao gồm thuế phí)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">598,900 ₫
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"></path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">(1 người lớn)</p>
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Đặt</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>Vietjet Air</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>VJ133</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>10:15</span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>12:25</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">598,900₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">598,900₫</h4>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                                <span className="MuiButton-label">Chọn</span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                </div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VJ121</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>12:20</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>14:30</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 10p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">598,900 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div />
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994">
                                        <button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button">
                                            <span className="MuiIconButton-label">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="MuiTouchRipple-root" />
                                        </button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn</h4>
                                        <span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true">
                                                    <span className="MuiTab-wrapper">Chuyến bay</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Chi tiết giá</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958">
                                                                <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                                            </div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">VJ121</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">Vietjet Air</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 10p</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Bay thẳng</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Hạng E1_ECO</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">12:20</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">14:30</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1"> 10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 7kg</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ăn nhẹ</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span>
                                                        <span className="jss2040">598,900₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span className="jss2040 jss2041">598,900 ₫</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                    <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                    </path>
                                                </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">598,900 ₫
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"></path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">(1 người lớn)</p>
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Đặt</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>Vietjet Air</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>VJ121</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>12:20</span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>14:30</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">598,900₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">598,900₫</h4>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                                <span className="MuiButton-label">Chọn</span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VJ189</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>16:15</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>18:25</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 10p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">598,900 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div />
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994">
                                        <button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button">
                                            <span className="MuiIconButton-label">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="MuiTouchRipple-root" />
                                        </button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn</h4>
                                        <span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true">
                                                    <span className="MuiTab-wrapper">Chuyến bay</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Chi tiết giá</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958">
                                                                <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                                            </div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">VJ189</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1"> Vietjet Air</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 10p</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Bay thẳng</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Hạng E1_ECO</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">16:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">18:25</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4"> Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4"> Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 7kg</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ăn nhẹ  </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span>
                                                        <span className="jss2040">598,900 ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1"> Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span className="jss2040 jss2041">598,900 ₫</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">598,900 ₫
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z"></path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">(1 người lớn)</p>
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Đặt</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>Vietjet Air</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>VJ189</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>16:15</span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>18:25</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">598,900₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">598,900₫</h4>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                                <span className="MuiButton-label">Chọn</span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                </div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VJ151</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>21:00</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>23:10</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 10p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">598,900 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div />
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994">
                                        <button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button">
                                            <span className="MuiIconButton-label">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="MuiTouchRipple-root" />
                                        </button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn</h4>
                                        <span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true">
                                                    <span className="MuiTab-wrapper">Chuyến bay</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Chi tiết giá</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958">
                                                                <img src="https://cdn.justfly.vn/media/flights/logo/VJ.png" alt="Vietjet Air" loading="eager" className="jss143 jss1959" />
                                                            </div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> VJ151</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">Vietjet Air</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 10p</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Bay thẳng</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Hạng E1_ECO</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">21:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">23:10</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary"> Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 7kg </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ăn nhẹ</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">598,900₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">598,900 ₫</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                    <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                    </path>
                                                </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">598,900 ₫
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">(1 người lớn)</p>
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Đặt</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>Vietjet Air</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>VJ151</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>21:00</span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>23:10</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">598,900₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">598,900₫</h4>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                                <span className="MuiButton-label">Chọn</span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/BL.png" alt="Pacific Airlines" loading="eager" className="jss143 jss1959" />
                                </div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN6017</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>17:40</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>19:45</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 5p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary"> 620,000 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div />
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994">
                                        <button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button">
                                            <span className="MuiIconButton-label">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span className="MuiTouchRipple-root" />
                                        </button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn</h4>
                                        <span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist">
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true">
                                                    <span className="MuiTab-wrapper">Chuyến bay</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Chi tiết giá</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false">
                                                    <span className="MuiTab-wrapper">Điềubkiện vé</span>
                                                    <span className="MuiTouchRipple-root" />
                                                </button>
                                            </div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958">
                                                                <img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">VN6017</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 5p</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Bay thẳng</span>
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Phổ thông</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">17:40</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4"> 19:45</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4"> Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2024">
                                                                    <div className="jss2025">
                                                                        <div className="jss1958">
                                                                            <img src="https://cdn.justfly.vn/media/flights/logo/BL.png" alt="Pacific Airlines" loading="eager" className="jss143 jss1959" />
                                                                        </div>
                                                                    </div>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28">Pacific Airlines vận chuyển</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 7kg </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ăn nhẹ</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 320
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn
                                                    </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span>
                                                        <span className="jss2040">620,000 ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span className="jss2040 jss2041">620,000 ₫</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                    <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                    </path>
                                                </svg> Giá cuối cùng (Đã bao gồm thuế phí)
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2045">
                                            <div className="jss2049 jss2050">
                                                <div className="jss2051">
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span className="jss2052">Hoàn hủy</span>
                                                        <span className="jss2053">(trên mỗi khách)</span>
                                                    </p>
                                                    <div className="jss2054">
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">Trước bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">Không được phép</p>
                                                        </div>
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">Sau bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1"> Không được phép</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jss2051">
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span className="jss2052">Phí thay đổi</span>
                                                        <span className="jss2053">(trên mỗi khách)</span>
                                                    </p>
                                                    <div className="jss2054">
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1"> Trước bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1"> Không được phép</p>
                                                        </div>
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">Sau bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1"> Không được phép</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jss2051">
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span className="jss2052">Phí chuyển nhượng</span>
                                                        <span className="jss2053">(trên mỗi khách)</span>
                                                    </p>
                                                    <div className="jss2054">
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">Trước bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">Không được phép</p>
                                                        </div>
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">Sau bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1"> Không được phép</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jss2046 jss2047">
                                                <p className="MuiTypography-root jss2048 MuiTypography-body2 jss28">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                    </svg> Justfly.vn không tính thêm phí dịch vụ. Chính
                                                    sách hủy và thay đổi dựa trên loại vé; bất kỳ khoản phí
                                                    bổ sung nào được xác định bởi các hãng hàng không hoặc </p>
                                                <p className="MuiTypography-root jss2048 MuiTypography-body2 jss28">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                    </svg> Mọi thay đổi phải được thực hiện trước 12 tiếng
                                                    so với giờ khởi hành </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError"> 620,000 ₫
                                            <button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button">
                                                <span className="MuiIconButton-label">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">(1 người lớn)</p>
                                    </div>
                                    <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                        <span className="MuiButton-label">Đặt</span>
                                        <span className="MuiTouchRipple-root" />
                                    </button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>Pacific Airlines</span>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg>
                                            <span>VN6017</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>17:40</span>
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg>
                                                <span>19:45</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">620,000₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">620,000₫</h4>
                                            <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button">
                                                <span className="MuiButton-label">Chọn</span>
                                                <span className="MuiTouchRipple-root" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958">
                                    <img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" />
                                </div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN207</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4">
                                    <span className="jss1977">
                                        <span>07:00</span>
                                        <span className="jss1979">HAN</span>
                                    </span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                    </svg>
                                    <span className="jss1977">
                                        <span>09:15</span>
                                        <span className="jss1979">SGN</span>
                                    </span>
                                </p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span>
                                    <span className="jss1982" />
                                    <span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary"> 639,000 ₫</p>
                                <button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button">
                                    <span className="MuiButton-label">Chọn</span>
                                    <span className="MuiTouchRipple-root" />
                                </button>
                            </div>
                            <div className="jss1988">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                    </path>
                                </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965">
                            <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button">
                                <span className="MuiButton-label">
                                    <span>Chi tiết</span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                                    </svg>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="MuiTouchRipple-root" />
                            </button>
                            <div>
                                <span>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                        </path>
                                    </svg> Có ăn nhẹ</span>
                            </div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN207</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Hạng G</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        07:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        09:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 359
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn
                                                    </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">639,000
                                                            ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">639,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            639,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN207</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>07:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>09:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">639,000
                                                ₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">639,000
                                                ₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN209</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4"><span className="jss1977"><span>09:00</span><span className="jss1979">HAN</span></span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg><span className="jss1977"><span>11:15</span><span className="jss1979">SGN</span></span></p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span><span className="jss1982" /><span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">
                                    639,000 ₫</p><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                            </div>
                            <div className="jss1988"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965"><button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button"><span className="MuiButton-label"><span>Chi
                            tiết</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg></span><span className="MuiTouchRipple-root" /></button>
                            <div><span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg> Có ăn nhẹ</span></div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN209</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Hạng G</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        09:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        11:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn
                                                    </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">639,000
                                                            ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">639,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            639,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN209</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>09:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>11:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">639,000
                                                ₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">639,000
                                                ₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN251</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4"><span className="jss1977"><span>10:00</span><span className="jss1979">HAN</span></span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg><span className="jss1977"><span>12:15</span><span className="jss1979">SGN</span></span></p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span><span className="jss1982" /><span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">
                                    639,000 ₫</p><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                            </div>
                            <div className="jss1988"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965"><button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button"><span className="MuiButton-label"><span>Chi
                            tiết</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg></span><span className="MuiTouchRipple-root" /></button>
                            <div><span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg> Có ăn nhẹ</span></div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN251</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Hạng G</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        10:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        12:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Boeing 787
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn
                                                    </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">639,000
                                                            ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">639,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            639,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN251</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>10:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>12:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">639,000
                                                ₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">639,000
                                                ₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN215</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4"><span className="jss1977"><span>15:00</span><span className="jss1979">HAN</span></span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg><span className="jss1977"><span>17:15</span><span className="jss1979">SGN</span></span></p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span><span className="jss1982" /><span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">
                                    639,000 ₫</p><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                            </div>
                            <div className="jss1988"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965"><button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button"><span className="MuiButton-label"><span>Chi
                            tiết</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg></span><span className="MuiTouchRipple-root" /></button>
                            <div><span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg> Có ăn nhẹ</span></div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN215</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Hạng G</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        15:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        17:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ
                                                            </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Boeing 787
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn
                                                    </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">639,000
                                                            ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">639,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            639,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN215</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>15:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>17:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">639,000
                                                ₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">639,000
                                                ₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN217</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4"><span className="jss1977"><span>17:00</span><span className="jss1979">HAN</span></span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg><span className="jss1977"><span>19:15</span><span className="jss1979">SGN</span></span></p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span><span className="jss1982" /><span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">
                                    639,000 ₫</p><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                            </div>
                            <div className="jss1988"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965"><button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button"><span className="MuiButton-label"><span>Chi
                            tiết</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg></span><span className="MuiTouchRipple-root" /></button>
                            <div><span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg> Có ăn nhẹ</span></div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN217</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Hạng G</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        17:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        19:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Boeing 787</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">639,000₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">639,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            639,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN217</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>17:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>19:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">639,000₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">639,000₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN221</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4"><span className="jss1977"><span>21:00</span><span className="jss1979">HAN</span></span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg><span className="jss1977"><span>23:15</span><span className="jss1979">SGN</span></span></p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span><span className="jss1982" /><span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">
                                    639,000 ₫</p><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                            </div>
                            <div className="jss1988"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965"><button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button"><span className="MuiButton-label"><span>Chi
                            tiết</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg></span><span className="MuiTouchRipple-root" /></button>
                            <div><span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg> Có ăn nhẹ</span></div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN221</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Hạng G</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        21:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        23:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 350 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn </p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">639,000 ₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">639,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            639,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN221</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>21:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>23:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">639,000₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">639,000 ₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jss1962 jss1796">
                    <div className="jss1970">
                        <div className="jss1971">
                            <div className="jss1972">
                                <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                            </div>
                            <p className="MuiTypography-root jss1973 MuiTypography-body2 jss28">VN263</p>
                        </div>
                        <div className="jss1974">
                            <div className="jss1975">
                                <p className="MuiTypography-root jss1976 MuiTypography-h4"><span className="jss1977"><span>14:00</span><span className="jss1979">HAN</span></span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1978" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                </svg><span className="jss1977"><span>16:15</span><span className="jss1979">SGN</span></span></p>
                                <p className="MuiTypography-root jss1980 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                    <span className="jss1981">2g 15p</span><span className="jss1982" /><span className="jss1983">Bay thẳng</span>
                                </p>
                            </div>
                        </div>
                        <div className="jss1984">
                            <div className="jss1985">
                                <p className="MuiTypography-root jss1986 MuiTypography-h4 MuiTypography-colorSecondary">
                                    719,000 ₫</p><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss1987 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                            </div>
                            <div className="jss1988"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1989" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg></div>
                        </div>
                    </div>
                    <div className="jss1964">
                        <div className="jss1965"><button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1966 MuiButton-textSecondary" tabIndex={0} type="button"><span className="MuiButton-label"><span>Chi
                            tiết</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967 jss1968" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd" />
                            </svg><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1967" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd" />
                            </svg></span><span className="MuiTouchRipple-root" /></button>
                            <div><span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="jss1 jss1963" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M250.97 29.357c-106.557-.21-211.806 52.74-203.48 164.053 138.91 11.4 276.71 8.893 414.174.662 10.58-107.69-100.753-164.498-210.693-164.715zm59.876 23.996c11.165 0 20.216 4.468 20.216 9.98 0 5.513-9.051 9.981-20.216 9.981-11.166 0-20.217-4.468-20.217-9.98 0-5.513 9.051-9.98 20.217-9.98zm-111.852 19.83c11.165 0 20.217 4.469 20.217 9.98 0 5.513-9.052 9.981-20.217 9.981s-20.216-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm178.057 34.02c11.165 0 20.216 4.468 20.217 9.98 0 5.512-9.052 9.98-20.217 9.98s-20.217-4.468-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm-273.59 21.535c11.165 0 20.216 4.468 20.217 9.98 0 5.513-9.052 9.98-20.217 9.98s-20.217-4.467-20.217-9.98c0-5.512 9.052-9.98 20.217-9.98zm313.77 30.043c11.165 0 20.216 4.468 20.216 9.98 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98 0-5.512 9.051-9.98 20.216-9.98zm-137.91 8.045c11.166 0 20.218 4.47 20.216 9.982 0 5.512-9.051 9.98-20.217 9.98-11.165 0-20.216-4.468-20.216-9.98-.002-5.513 9.05-9.982 20.216-9.982zM57.618 212.339c-18.964.405-9.028 24.485 14.383 24.573 128.554 10.208 236.673 9.686 372.117-2.42 16.096-2.708 25.212-13.087 10.824-21.969-131.579 7.67-263.81 10.045-397.324-.184zm403.024 40.612c-131.224 13.6-277.594 10.525-390.065 1.904-46.983-6.226-47.875 46.785-17.014 52.309 146.18 14.663 271.826 10.735 415.137-.53 25.007-1.144 14.554-55.328-8.058-53.683zM20.986 366.679l15.332 9.434c6.342-8.416 17.876-32.05 33.319-32.192 19.122-.174 22.345 39.302 41.98 39.103 22.607-.228 37.828-31.548 52.447-30.882 22.09 1.008 26.333 35.9 43.557 35.928 24.089.04 31.439-36.39 46.805-35.334 21.458 1.475 33.246 28.274 50.879 29.178 19.004.974 30.654-33.027 43.265-32.748 16.61.366 28.31 32.46 54.24 33.193 15.345.434 29.694-37.411 37.005-36.815 14.417 1.174 26.549 20.548 36.085 34.835l15.114-9.776c-12.029-16.216-30.117-44.428-52.558-44.017-20.907.382-25.948 38.114-38.102 37.943-23.28-.328-33.756-32.164-52.598-33.346-19.356-1.214-30.475 33.636-43.353 32.768-18.954-1.277-27.303-29.16-49.475-29.917-19.62-.67-34.121 37.669-46.793 36.044-18.139-2.326-20.226-36.378-43.317-37.836-19.11-1.207-37.562 30.604-50.314 29.999-17.525-.833-25.243-40.224-45.41-39.986-21.826.258-39.145 30.34-48.108 44.424zm47.553 36.174c-8.342.686-18.198 4.251-21.85 12.424-2.452 6.662 19.173 8.558 21.114 8.695 128.615 8.104 254.354 8.26 389.8-1.345 9.225-.655 13.935-3.147 15.252-4.414 3.124-8.208-23.168-13.935-25.818-14.004-185.01-1.178-279.257 2.209-378.498-1.356zm395.555 37.192c-126.786 6.957-283.18 9.384-408.123.707l.521 38.67c135.917 4.617 275.647 3.99 406.658-.088z">
                                </path>
                            </svg> Có ăn nhẹ</span></div>
                        </div>
                        <div hidden className>
                            <div className="jss1969">
                                <div className="jss1993">
                                    <div className="jss1870 jss1994"><button className="MuiButtonBase-root MuiIconButton-root   MuiIconButton-colorSecondary" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1873 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                        </path>
                                    </svg></span><span className="MuiTouchRipple-root" /></button>
                                        <h4 className="MuiTypography-root MuiTypography-h4">Chuyến bay đã chọn
                                        </h4><span className="jss1871" />
                                    </div>
                                    <div className="MuiTabs-root jss1995">
                                        <div className="MuiTabs-scroller MuiTabs-fixed" style={{ overflow: 'hidden' }}>
                                            <div className="MuiTabs-flexContainer MuiTabs-centered" role="tablist"><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 Mui-selected MuiTab-fullWidth" tabIndex={0} type="button" role="tab" aria-selected="true"><span className="MuiTab-wrapper">Chuyến
                                                bay</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Chi
                                                    tiết giá</span><span className="MuiTouchRipple-root" /></button><button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss1997 MuiTab-fullWidth" tabIndex={-1} type="button" role="tab" aria-selected="false"><span className="MuiTab-wrapper">Điều
                                                        kiện vé</span><span className="MuiTouchRipple-root" /></button></div>
                                            <span className="jss1782 jss1783 MuiTabs-indicator jss1996" style={{ left: '0px', width: '0px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="jss1998 jss1999">
                                    <div className>
                                        <div>
                                            <div className="jss2007">
                                                <div>
                                                    <div className="jss2008">
                                                        <div className="jss2009">
                                                            <div className="jss1958"><img src="https://cdn.justfly.vn/media/flights/logo/VN.png" alt="Vietnam Airlines" loading="eager" className="jss143 jss1959" /></div>
                                                            <p className="MuiTypography-root jss2010 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                VN263</p>
                                                        </div>
                                                        <div className="jss2011">
                                                            <p className="MuiTypography-root jss2012 MuiTypography-body1">
                                                                Vietnam Airlines</p>
                                                            <p className="MuiTypography-root jss2013 MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                <span>2g 15p</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Bay thẳng</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                                </svg><span>Phổ thông</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="jss2014">
                                                        <div className="jss2015 jss2016">
                                                            <div className="jss2017">
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        14:00</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div>
                                                                    <p className="MuiTypography-root jss2018 MuiTypography-h4">
                                                                        16:15</p>
                                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                                        10 Thg6</p>
                                                                </div>
                                                                <div className="jss2019" />
                                                            </div>
                                                            <div className="jss2020 jss2021">
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hà Nội (HAN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Nội Bài</p>
                                                                </div>
                                                                <div className="jss2023">
                                                                    <p className="MuiTypography-root jss2022 MuiTypography-h4">
                                                                        Hồ Chí Minh (SGN)</p>
                                                                    <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                                                        Sân bay quốc tế Tân Sơn Nhất</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jss2028 jss2029">
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Xách tay 1 x 12kg </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không hoàn vé</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không ký gửi</p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorPrimary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                                                                    </path>
                                                                </svg> Không đổi ngày </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Có ăn nhẹ </p>
                                                            <p className="MuiTypography-root jss2033 jss2030 MuiTypography-body1 MuiTypography-colorSecondary">
                                                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2034" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                                                                </svg> Airbus 321 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2035">
                                            <div className="jss2036">
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2038 MuiTypography-body1">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                        </svg> Người lớn</p>
                                                    <p className="MuiTypography-root MuiTypography-body1">
                                                        <span>1 người x </span><span className="jss2040">719,000₫</span>
                                                    </p>
                                                </div>
                                                <div className="jss2037">
                                                    <p className="MuiTypography-root jss2039 jss2038 MuiTypography-body1">
                                                        Bạn thanh toán</p>
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2040 jss2041">719,000 ₫</span></p>
                                                </div>
                                            </div>
                                            <div className="jss2042 jss2043"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2044" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd" />
                                                <path d="M7.002 11a1 1 0 112 0 1 1 0 01-2 0zM7.1 4.995a.905.905 0 111.8 0l-.35 3.507a.552.552 0 01-1.1 0L7.1 4.995z">
                                                </path>
                                            </svg> Giá cuối cùng (Đã bao gồm thuế phí)</div>
                                        </div>
                                    </div>
                                    <div hidden className>
                                        <div className="jss2045">
                                            <div className="jss2049 jss2050">
                                                <div className="jss2051">
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2052">Hoàn hủy</span><span className="jss2053">(trên mỗi khách)</span></p>
                                                    <div className="jss2054">
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">
                                                                Trước bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">
                                                                Không được phép</p>
                                                        </div>
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">
                                                                Sau bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">
                                                                Không được phép</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jss2051">
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2052">Phí thay đổi</span><span className="jss2053">(trên mỗi khách)</span></p>
                                                    <div className="jss2054">
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">
                                                                Trước bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">
                                                                Không được phép</p>
                                                        </div>
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">
                                                                Sau bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">
                                                                Không được phép</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="jss2051">
                                                    <p className="MuiTypography-root MuiTypography-body1"><span className="jss2052">Phí chuyển nhượng</span><span className="jss2053">(trên mỗi khách)</span></p>
                                                    <div className="jss2054">
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">
                                                                Trước bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">
                                                                Không được phép</p>
                                                        </div>
                                                        <div className="jss2055">
                                                            <p className="MuiTypography-root jss2057 jss2056 MuiTypography-body1">
                                                                Sau bay</p>
                                                            <p className="MuiTypography-root jss2056 MuiTypography-body1">
                                                                Không được phép</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jss2046 jss2047">
                                                <p className="MuiTypography-root jss2048 MuiTypography-body2 jss28">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                    </svg> Justfly.vn không tính thêm phí dịch vụ. Chính sách hủy và thay đổi dựa trên loại vé; bất kỳ khoản phí
                                                    bổ sung nào được xác định bởi các hãng hàng không hoặc</p>
                                                <p className="MuiTypography-root jss2048 MuiTypography-body2 jss28">
                                                    <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                                    </svg> Mọi thay đổi phải được thực hiện trước 12 tiếng
                                                    so với giờ khởi hành</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jss2058 jss2001">
                                    <div className="jss2061">
                                        <p className="MuiTypography-root MuiTypography-h3 MuiTypography-colorError">
                                            719,000 ₫<button className="MuiButtonBase-root MuiIconButton-root" tabIndex={0} type="button"><span className="MuiIconButton-label"><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.293 13.293L7.707 14.707 12 10.414 16.293 14.707 17.707 13.293 12 7.586z">
                                                </path>
                                            </svg></span><span className="MuiTouchRipple-root" /></button></p>
                                        <p className="MuiTypography-root MuiTypography-body2 jss28 MuiTypography-colorTextSecondary">
                                            (1 người lớn)</p>
                                    </div><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Đặt</span><span className="MuiTouchRipple-root" /></button>
                                </div>
                                <div className="jss2059 jss2001">
                                    <div className="jss2060">
                                        <p className="MuiTypography-root jss2066 MuiTypography-body2 jss28">
                                            <span className="jss2067">Chiều đi</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>Vietnam Airlines</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2068" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                            </svg><span>VN263</span>
                                        </p>
                                        <div className="jss2069">
                                            <h4 className="MuiTypography-root jss2070 MuiTypography-h4">
                                                <span>14:00</span><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss2072" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.5 8a.5.5 0 01.5-.5h8a.5.5 0 010 1H4a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                                                </svg><span>16:15</span>
                                            </h4>
                                            <h4 className="MuiTypography-root jss2071 MuiTypography-h4">719,000₫</h4>
                                        </div>
                                    </div>
                                    <div className="jss2060" />
                                    <div className="jss2060">
                                        <div className="jss2062">
                                            <h4 className="MuiTypography-root jss2061 MuiTypography-h4">719,000₫</h4><button className="MuiButtonBase-root MuiButton-root MuiButton-contained jss2063 MuiButton-containedSecondary" tabIndex={0} type="button"><span className="MuiButton-label">Chọn</span><span className="MuiTouchRipple-root" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewSearch;