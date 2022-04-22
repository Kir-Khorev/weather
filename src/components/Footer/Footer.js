import React from "react";

const footerStyle = {
    backgroundColor: 'grey',
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px auto",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
};

const phantomStyle = {
    display: "block",
};

function Footer() {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>Copyright © 2021</div>
        </div>
    );
}

export default Footer