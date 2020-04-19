import React from 'react';
import '../scss/header.scss'
const DownloadReportButton = () => {
  // if (location.pathname !== '/') {
  //   return null;
  // }

  return (
    <li>
      <div className="btn btn-success btn_download btndownload " onClick={() => console.log('download-report')}>
        Download Report
      </div>
    </li>);
};

export default DownloadReportButton;
