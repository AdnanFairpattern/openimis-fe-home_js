import React from "react";
import ReportLinks from "./ReportLinks";

const ReportBox = () => {
    return <div>
        {ReportLinks.map((link) => {
            const {id, title, path} = link
            return (
            <div style={{justifyContent: "center", alignItems: "center", float:"center"}}>
                <a href={path}>
                    <div style={{boxSizing:'border-box', textAlign:"center", background: "#f48943", display:"inline-block", padding:"10px", float:"left", width:"350px", border: "3px solid #000", marginLeft: "20px"}}>
                        <h2 style={{color:'black', fontWeight:'bold', fontSize:'80'}}>{title}</h2>
                    </div>
                </a>
            </div>)
        })}
        </div>
}

export default ReportBox;