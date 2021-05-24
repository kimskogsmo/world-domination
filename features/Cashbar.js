import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/database'

const Cashbar = ({ money }) => {
    return (
        <span style={{fontFamily: "Helvetica Neue, Helvetica, sans-serif", fontWeight: "900", fontSize: "1.35rem", transform: "scaleY(0.95)", color: "green"}}>
            ${money}
        </span>
    )
}

export default Cashbar