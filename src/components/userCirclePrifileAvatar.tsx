import React from 'react';

interface UserCircleProfileAvatarProps {
    userEmail: string;
}

const UserCircleProfileAvatar: React.FC<UserCircleProfileAvatarProps> = ({
    userEmail,
}) => {
    return (
        <div
            style={{
                marginLeft: 8,
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: '#d69a2c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            }}
            title={userEmail}
        >
            {userEmail.charAt(0).toUpperCase()}
        </div>
    )
};

export default UserCircleProfileAvatar;