import React from "react";

function Address() {
    let email = "naderrabhi93@outlook.com";
    let phone = "+21697076800";
    let add = "Gafsa, Tunisie";

    return <div className="addr">
                <div>{email}</div><hr />
                <div>{phone}</div><hr />
                <div>{add}</div><hr />
            </div>
};

export default Address;