import * as React from 'react';

const DashboardHome: React.FunctionComponent = () => {
    return (
        <div className="dashboard-home">
            <h2>Welcome to the MagicHat Ticket Viewer</h2>
            <p>A micro application developed from scratch by Mugundh Muthuvel.</p>
            <p>I have used <code>react</code> to build this application as it is really light for very small applications</p>
            <p>Adding to the base framework, I have used <code>react-router-dom</code> to handle the routing.</p>
            <p>Click on the <i className="fas fa-home"></i>  to come to this page</p>
            <p>Click on the <i className="fas fa-ticket-alt"></i>  to come to visit the tickets list page</p>
        </div>
    );
}

export default DashboardHome;