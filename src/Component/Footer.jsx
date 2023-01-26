import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                ©2023 All Copyright Reserved By :
                <a className="text-dark" href="https://github.com/" style={{ textDecoration: 'none' }}>  <span style={{ textDecoration: 'underline' }}>Vedant</span> With ❤️ </a>
            </div>
        </footer>
    )
}

export default Footer