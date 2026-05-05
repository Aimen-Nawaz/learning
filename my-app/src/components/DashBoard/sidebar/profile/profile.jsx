import React from 'react'
import profileImg from "../../../../images/image22.jpg";
    
const Profile = () => {
    return (
        <div className="profile">
            <img src={profileImg} alt="Admin" />
            <b>Sneha Patel</b>
            <small>Administrator</small>
        </div>
    )
}

export default Profile