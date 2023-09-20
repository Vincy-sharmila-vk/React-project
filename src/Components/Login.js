import React from "react";

function Login(props){
    return (props.trigger) ? (
        <div className="signup">
            <div className="signup-inner">
                <button className="close-button" onClick={() => props.settrigger(false)}>close</button>
                { props.children }
            </div>

        </div>

    ):"";
    }
    export default Login