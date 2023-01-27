import React from 'react';
import '../style/hero.css';

function hero() {
  return (
    <>
        <div className="hero-wrap">
            <div className="hero-text">
                <h1>CHANGING THE <br/> <span className="hero-text-span" > GAME IN TECH.</span> </h1>
                <p>As a self-taught front-end developer.</p>
                <button className="hero-btn" >Get to know me</button>
            </div>
        </div>

        <div className="hero-extra">
            <div className="extra-icons">
                <div>
                    <img src='/images/eat.png' alt="eat" />
                    <div className="extra-name">EAT</div>
                </div>

                <div>
                    <img src='/images/sleep.png' alt="eat" />
                    <div className="extra-name">SLEEP</div>
                </div>

                <div>
                    <img src='/images/code.png' alt="eat" />
                    <div className="extra-name">CODE</div>
                </div>

                <div>
                    <img src='/images/repeat.png' alt="eat" />
                    <div className="extra-name">REPEAT</div>
                </div>
            </div>

            <div className="hero-extra-desc">
                <p>
                    “I believe in access to opportunity As the world
                    evolves, so does the way we work. Joining a
                    distributed team offers tech talent access to
                    thousands of new job opportunities while companies
                    stay ahead of the curve with remote work.”
                </p>
            </div>
        </div>
    </>
  )
}

export default hero