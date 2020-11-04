import React from 'react'

export function Footer({ style }) {
    return (
        <footer className="flex w100">
            <div className="flex space-between align-center w100 container">
                <p style={{ color: style.p.color }}>All rights reserved 2020.</p>
                <div className="creators flex align-center ">
                    <div className="creator flex column align-center">
                        <p style={{ color: style.p.color }}>Liam Zety</p>
                        <div className="social-container space-between flex align-center">
                            <div className="social-temp"></div>
                            <div className="social-temp"></div>
                            <div className="social-temp"></div>
                        </div>
                    </div>
                    <div className="creator flex column align-center">
                        <p style={{ color: style.p.color }}>Idan Rokach</p>
                        <div className="social-container space-between flex align-center">
                            <div className="social-temp"></div>
                            <div className="social-temp"></div>
                            <div className="social-temp"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
