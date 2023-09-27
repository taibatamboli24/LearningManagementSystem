import React from 'react'
import './Certificates.css'

function Certificates() {
  return (
    <div className='certificate-main'>
        <div className="certificate-heading">
                <p>Certificate</p>
            </div>
            <div className="certificate-module">
                <div className="certificate-box">
                    <div className="certificate-image">
                        <img src="./images/certificates.jpg" />
                    </div>
                    <div className="certificate-info">
                        <div className="certificate-details">
                            <h2>React Js</h2>
                            <h3>
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="File / Download_Package">
                                        <path id="Vector"
                                            d="M4 8V16.8C4 17.9201 4 18.4798 4.21799 18.9076C4.40973 19.2839 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V8M4 8H20M4 8L5.36518 5.61089C5.7002 5.0246 5.86768 4.73151 6.10325 4.51807C6.31184 4.32907 6.55859 4.18605 6.82617 4.09871C7.12861 4 7.46623 4 8.14258 4H15.8571C16.5334 4 16.8723 4 17.1747 4.09871C17.4423 4.18605 17.6879 4.32907 17.8965 4.51807C18.1322 4.73168 18.3002 5.02507 18.6357 5.6123L20 8M12 11V17M12 17L15 15M12 17L9 15"
                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </g>
                                </svg>
                                Download
                            </h3>
                        </div>
                        <p className="certificate-date">12/02/2023</p>
                    </div>  
                </div>
            </div>
    </div>
  )
}

export default Certificates