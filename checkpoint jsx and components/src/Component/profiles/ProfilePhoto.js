import React from "react";


function ProfilePhoto() {
    return <div className="card profile-photo">
                <img src={process.env.PUBLIC_URL + "/man.png"} alt="personal img" />
                <h3>Nader Rabhi</h3>
                <p>Full Stack Developer</p>
                <div>
                <input className="btn btn-primary btn-sm" type="submit" value="Follow"/>
                <input className="btn btn-secondary btn-sm" type="submit" value="Message"/>
                </div>
        </div>
};

export default ProfilePhoto;