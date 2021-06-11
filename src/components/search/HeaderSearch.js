import React from "react";
// import "../search/ViewSearch.css"

const HeaderSearch = () =>{
 return (
    <div className="MuiToolbar-root MuiToolbar-regular jss1755">
    <button className="MuiButtonBase-root MuiIconButton-root  " tabIndex={0} type="button">
      <span className="MuiIconButton-label">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="jss1 jss1763 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </span>
      <span className="MuiTouchRipple-root" />
    </button>
    <div>
      <div className="jss1756">
        <span>Hà Nội</span>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1757" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd">
          </path>
          <path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd">
          </path>
        </svg>
        <span>Hồ Chí Minh</span>
      </div>
      <div className="jss1758">
        <span>10 Thg6</span>
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" className="jss1 jss1760" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd">
          </path>
        </svg>
        <span>1 khách</span>
        <button className="MuiButtonBase-root MuiIconButton-root jss1761 MuiIconButton-sizeSmall" tabIndex={0} type="button">
          <span className="MuiIconButton-label">
            <svg stroke="currentColor" fill="currentColor" strokeWidth={0} version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="jss1 jss1762" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z">
              </path>
            </svg>
          </span>
          <span className="MuiTouchRipple-root" />
        </button>
      </div>
    </div>
    <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss1764" tabIndex={0} type="button">
      <span className="MuiButton-label">
        <svg stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="jss1 jss1765" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
        <span className="jss1766">Bộ lọc</span>
      </span>
      <span className="MuiTouchRipple-root" />
    </button>
  </div>
 )
}
export default HeaderSearch;