import React from 'react'

function Header({ text }) {
    return (
        <header>
            <h3 data-testid="h1tag" className="fancy-h1">{text}</h3>
        </header>
    )
}

export default Header