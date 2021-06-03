// import { useState, useEffect } from 'react'
// import firebase from 'firebase/app'
// import 'firebase/database'
// import useUser from './../firebase/useUser';

const Toolbar = ({ assets, compressed }) => {
    // const { user, logout } = useUser()

    if (!compressed) {
        return (
            <div style={{ display: "inline-flex", alignItems: 'center', height: '100%' }}>
                <div style={{ height: '25px', border: "1px solid rgba(255,255,255,0.2)" }}>
                    <span style={{ padding: "0.25rem 0.5rem", fontFamily: "Segoe UI, Helvetica, Helvetica, sans-serif", borderRight: "1px solid rgba(255,255,255,0.2)", fontWeight: "400", fontSize: "0.8rem", textTransform: "uppercase" }}>Wallet: </span>
                    <span style={{ padding: "0.25rem 0.5rem", fontFamily: "Segoe UI, Helvetica, Helvetica, sans-serif", fontWeight: "700", fontSize: "0.8rem", color: "#99ff99" }}>
                        €{Number(assets.money).toLocaleString()}
                    </span>
                </div>
            </div>
           
        )
    }
    else if (compressed) {
        return (
            <div style={{display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem'}}>
                <span style={{ padding: '13px 34px', backgroundColor: 'rgba(255,255,255,0.075)', marginBottom: '0.25rem', fontWeight: '800', fontFamily: 'Segoe UI, Helvetica, sans-serif', fontSize: '3.8rem', marginTop: '2rem', color: 'white' }}>€{Number(assets.money).toLocaleString()}</span>
                <span style={{ display: 'block', fontSize: '1.2rem', color: 'white', fontWeight: '500' }}>+ €48,591 / second</span>
            </div>
        )
    }
    
}

export default Toolbar