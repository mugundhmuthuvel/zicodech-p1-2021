import * as React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import { useSnackbar } from 'notistack'
import ReactTooltip from 'react-tooltip';

const Sidebar: React.FunctionComponent = () => {
    const { enqueueSnackbar } = useSnackbar();
    return (
        <>
            <div className="sidebar">
                <div>
                    <button data-testid="sb-pawfi" data-tip="Paw-Fi" onClick={() => { enqueueSnackbar('Thanks for the Paw-Fi. I needed a logo. Used Paw icon instead :)') }} className="icon-btn logo">
                        <i className="icon-font fas fa-paw"></i>
                    </button>
                    <Link to="/" className="icon-btn" data-tip="Home" {...{"aria-label": "home-btn"}}>
                        <i className="icon-font fas fa-home"></i>
                    </Link>
                    <Link to="/tickets" className="icon-btn" data-tip="Tickets" {...{"aria-label": "tickets-btn"}}>
                        <i className="icon-font fas fa-ticket-alt"></i>
                    </Link>
                </div>
                <button data-testid="sb-info" onClick={() => { enqueueSnackbar('Built in love with React. A micro application by Mugundh Muthuvel') }} className="icon-btn">
                    <i className="icon-font fas fa-info"></i>
                </button>
            </div>
            <ReactTooltip place="right" effect="solid" type="dark" />
        </>
    );
}

export default Sidebar;