import * as React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { useSnackbar } from 'react-simple-snackbar'

const Sidebar: React.FunctionComponent = () => {
    const [openSnackbar] = useSnackbar();
    return (
        <div className="sidebar">
            <div>
                <button title="Paw-Fi" onClick={() => { openSnackbar('Thanks for the Paw-Fi. I needed a logo. Used Paw icon instead :)') }} className="icon-btn logo">
                    <i className="icon-font fas fa-paw"></i>
                </button>
                <Link title="Home" to="/" className="icon-btn">
                    <i className="icon-font fas fa-home"></i>
                </Link>
                <Link title="Tickets" to="/tickets" className="icon-btn">
                    <i className="icon-font fas fa-ticket-alt"></i>
                </Link>
            </div>
            <button onClick={() => { openSnackbar('Built in love with React. A micro application by Mugundh Muthuvel') }} className="icon-btn">
                <i className="icon-font fas fa-info"></i>
            </button>
        </div>
    );
}

export default Sidebar;