import React from "react";

function UserCard({ page }) {
  return (
    <div>
      <div className="job-profile section">
        <div className="user-profile">
          <div className="user-images">
            <img
              src="images/user.jpg"
              alt="User Images"
              className="img-fluid"
            />
          </div>
          <div className="user">
            <h2>
              Hello, <a href="#">Jhon Doe</a>
            </h2>
            <h5>
              You last logged in at: 10-01-2017 6:40 AM [ USA time (GMT +
              6:00hrs)]
            </h5>
          </div>
          <div className="favorites-user">
            <div className="my-ads">
              <a href="applied-job.html">
                29<small>Apply Job</small>
              </a>
            </div>
            <div className="favorites">
              <a href="bookmark.html">
                18<small>Favorites</small>
              </a>
            </div>
          </div>
        </div>
        <ul className="user-menu">
          <li className={page == "profile" ? "active" : null}>
            <a href="/profile">Account Info </a>
          </li>
          <li>
            <a href="/resume">View Resume</a>
          </li>
          <li>
            <a href="/edit-resume">Edit Resume</a>
          </li>
          <li className={page == "profileDetails" ? "active" : null}>
            <a href="/profile-details">Profile Details</a>
          </li>
          <li className={page == "bookmark" ? "active" : null}>
            <a href="/bookmarks">Bookmark</a>
          </li>
          <li className={page == "appliedJob" ? "active" : null}>
            <a href="/applied-job">applied job</a>
          </li>
          <li className={page == "closeAccount" ? "active" : null}>
            <a href="/delete-account">Close account</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
