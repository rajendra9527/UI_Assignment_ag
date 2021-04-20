import React from 'react'
import UserStore from './userstore'

interface UserCardProps {
    user: UserStore;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return <div className="col-12 col-md-4 col-lg-3 py-3" >
        <div className="card w-100" >
            <img src={ user.avatar } className = "card-img-top" alt = "..." />
                <div className="card-body" >
                    <h5 className="card-title text-center" > { user.first_name } { user.last_name } </h5>
                        < a href = {`mailto:${user.email}`
} className = "btn btn-primary" > { user.email } < /a>
    < /div>
    < /div>
    < /div>
}

export default UserCard