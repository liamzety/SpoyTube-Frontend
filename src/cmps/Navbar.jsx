import React, { Fragment } from 'react'

export function Navbar({ style, children }) {
    return (
        <nav className="flex justify-center align-center relative">
            <div className="nav-container flex space-between align-center w100 container">
                <h1 style={{ color: style.h1.color }}>Spoty<span>Tube</span></h1>
                <div className="nav-links flex align-center space-between ">
                    <a style={{ color: style.a.color }} href="">About</a>
                    <a style={{ color: style.a.color }} href="">Contact</a>
                </div>
            </div>
            {children &&
                <Fragment>
                    <div className="bg-shape-container1 absolute">
                        {children}
                    </div>
                    <div className="bg-shape-container2 absolute">
                        {children}
                    </div>
                </Fragment>
            }
        </nav >
    )
}
