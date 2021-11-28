import * as React from 'react';

const DashboardHome: React.FunctionComponent = () => {
    return (
        <div className="dashboard-home">
            <div className="card shadow p-4 w-fit">
                <h2>Welcome to the Paw Ticket Viewer</h2>
                <p>A micro application developed from scratch by Mugundh Muthuvel.</p>
                <p>I have used <code>react</code> to build this application as it is really light for very small applications</p>
                <p>Adding to the base framework, I have used <code>react-router-dom</code> to handle the routing.</p>
                <p>And for writing test case I have used the recommended<code>testing-library</code></p>
                <p>Click on the <i className="fas fa-home"></i>  to come to this page</p>
                <p>Click on the <i className="fas fa-ticket-alt"></i>  to come to visit the tickets list page</p>
            </div>
            <div className="card shadow mt-4 p-4 w-fit">
                <p>Technologies Used:</p>
                <div className="d-flex">
                    <img className="tech-logos" alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                    <img className="tech-logos" alt="typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />
                    <img className="tech-logos" alt="react-router" src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" />
                    <img className="tech-logos" alt="axios" src="https://aiexpoafrica.com/wp-content/uploads/2020/02/Axios.png" />
                    <img className="tech-logos" alt="font-awesome" src="https://seeklogo.com/images/F/font-awesome-logo-3010FE2434-seeklogo.com.png" />
                    <img className="tech-logos" alt="bootstrap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" />
                    <img className="tech-logos" alt="testing-library" src="https://testing-library.com/img/octopus-128x128.png" />
                    <img className="tech-logos" alt="npm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" />
                    <img className="tech-logos" alt="stackoverflow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" />
                    <img className="tech-logos" alt="google" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" />
                </div>
                <div className="d-flex">
                    <img className="tech-logos" alt="html" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" />
                    <img className="tech-logos" alt="scss" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" />
                    <img className="tech-logos" alt="tsx" src="https://image.pngaaa.com/113/4609113-middle.png" />
                </div>
            </div>
        </div>
    );
}

export default DashboardHome;