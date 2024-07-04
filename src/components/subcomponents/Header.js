import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-section">
                <div className="logo">
                    <div className="logo-text">iStock</div>
                </div>
                <div className="nav-links">
                    <div className="nav-link">Dashboard</div>
                    <div className="nav-link">SKU Scoring</div>
                </div>
            </div>
            <div className="right-section">
                <div className="refresh-button">
                        <div className="refresh-icon"></div>
                        <div className="refresh-label">Refresh</div>
                    </div>
                <div className="dark-mode">
                    <div className="dark-mode-switch">
                        <div className="switch-background">
                            <div className="switch-button"></div>
                        </div>
                    </div>
                    <img className="profile-image" src="https://via.placeholder.com/40x40" alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default Header;
