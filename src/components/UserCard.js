import {Link} from "react-router-dom";


function UserCard({user: {id, username, email, phone}}){

    return(
        <div className="card">
            <div className="card-header">{username}</div>
            <div className="card-body">
                <h5 className="card-title">{phone}</h5>
                <p className="card-text">{email}</p>
                <Link to={`user-details/${id}`} className="btn btn-primary">Go somewhere</Link>
        </div>
        </div>
    )
}

export default UserCard 