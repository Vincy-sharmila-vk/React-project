import React from "react";

function Signup(props){
    return (props.trigger) ? (
        <div className="signup">
            <div className="signup-inner">
                <button className="close-button" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>

        </div>

    ):"";
}

export default Signup