import React from "react";

function FullName() {
    let name = "Nader"
    let lastName = "Rabhi"
    let concatFullName = () => `${name} ${lastName}`
    return <div className="full-Name"><p>Full Name : {concatFullName()}</p><hr /></div>
};

export default FullName;