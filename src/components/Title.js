import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user: { id, username, email, phone } }) {
  return (
    <div class="card">
      <div class="card-header">{phone}</div>
      <div class="card-body">
        <h5 class="card-title">{email}</h5>
        <p class="card-text">{username}</p>
        <Link to={`/user-details/${id}`} class="btn btn-primary">
          Go to details
        </Link>
      </div>
    </div>
  );
}
