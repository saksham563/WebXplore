// import React from 'react'
import { useEffect, useState } from 'react'
import top from '../assets/stt.png'


function BackToTop() {

    const [BackToTop, setBackToTopButton] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {BackToTop && (
                <button style={{ position: "fixed", bottom: "50px", right: "50px", height: "50px", fontSize: "30px" , color:"red", borderRadius:"20px", border:"2px solid white"}} onClick={scrollUp}> <img src={top} alt="" style={{height:"50px",}}/></button>
            )}

        </div>
    )
}

export default BackToTop