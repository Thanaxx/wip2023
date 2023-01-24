import React from 'react'
import '../style/about.css';
import {IoMdArrowDropright} from 'react-icons/io';

function aboutinfo() {
  return (
    <>
        <div className="about-wrap" >
            <div className="about-grid">
                <div className="about-info">
                    <p>About</p>
                    <h1>Get to know more <br/> <span>about me as dev</span> </h1>
                    <button>View Resume</button>
                </div>

                <div className="about-desc">
                    <div className="about-intro">
                        <p>
                            We believe in access to opportunity As the world evolves,
                            so does the way we work. Joining a distributed team offers
                            tech talent access to thousands of new job opportunities
                            while companies stay ahead of the curve with remote work.
                        </p>
                        <p>
                            We believe in access to opportunity As the world evolves,
                            so does the way we work.
                        </p>
                    </div>

                    <div className="about-personal-info">
                        <div className="info-col">
                            <p>Email <IoMdArrowDropright className="icon" /></p>
                            <p>abordajechristeljoy@gmail.com</p>
                        </div>

                        <div className="info-col">
                            <p>Phone <IoMdArrowDropright className="icon"  /></p>
                            <p>+63 930 3009 243</p>
                        </div>

                        <div className="info-col">
                            <p>City <IoMdArrowDropright className="icon" /></p>
                            <p>Iloilo City, Philippines</p>
                        </div>

                        <div className="info-col">
                            <p>Course <IoMdArrowDropright className="icon" /></p>
                            <p>Bachelor of Science in Computer Science</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </>
  )
}

export default aboutinfo