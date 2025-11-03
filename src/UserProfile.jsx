// src/UserProfile.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function UserProfile({userData, theme='light'}) {
//   return (
//     <> {/*chỉ yêu cầu 1 phần tử cha nên dùng <></>*/}
//       <h2>User Profile</h2>
//       <p>Name: Nhi Quynh Nguyen</p>
//       <p>Email: quynhnhiminh@gmail.com</p>
//     </>
//   );

    // const user = {
    //     name: "Nhi Quynh Nguyen",
    //     email: "quynhnhiminh@gmail.com",
    //     avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    //     imageSize: 90,
    // };

    return (
        <div className={`user-profile theme-${theme}`}>
            <h2>User Profile</h2>
            <img
                className="profile-avatar"
                src={userData.avatarUrl}
                alt={userData.name}
                width={userData.imageSize}
                height={userData.imageSize}
            />
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}
