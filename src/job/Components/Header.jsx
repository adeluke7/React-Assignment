function Header({ page }) {
  return (
    <div>
      <header id="header" className="clearfix">
        <nav className="navbar navbar-default navbar-expand-lg">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa fa-align-justify"></i>
              </span>
            </button>
            <a className="navbar-brand" href="/">
              <img className="img-fluid" src="images/logo.png" alt="Logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav navbar-nav">
                <li className={page == "Home" ? "active" : null}>
                  <a href="/">Home</a>
                </li>
                <li className={page == "JobList" ? "active" : null}>
                  <a href="/job-list">Job list</a>
                </li>
                <li className={page == "Details" ? "active" : null}>
                  <a href="/job-details">Job Details</a>
                </li>
                <li className={page == "Resume" ? "active" : null}>
                  <a href="/resume">Resume</a>
                </li>
                <li
                  className={
                    page == "profile" ||
                    "postResume" ||
                    "post" ||
                    "editResume" ||
                    "profileDetails" ||
                    "bookmark" ||
                    "appliedJob" ||
                    "deleteAccount" ||
                    "signup" ||
                    "signin"
                      ? "dropdown active"
                      : "dropdown"
                  }
                >
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className={page == "profile" ? "active" : null}>
                      <a href="/profile">Profile</a>
                    </li>
                    <li className={page == "postResume" ? "active" : null}>
                      <a href="/post-resume">Post Resume</a>
                    </li>
                    <li className={page == "post" ? "active" : null}>
                      <a href="/job-post">Job Post</a>
                    </li>
                    <li className={page == "editResume" ? "active" : null}>
                      <a href="/edit-resume">Edit Resume</a>
                    </li>
                    <li className={page == "profileDetails" ? "active" : null}>
                      <a href="/profile-details">profile Details</a>
                    </li>
                    <li className={page == "bookmark" ? "active" : null}>
                      <a href="/bookmark">Bookmark</a>
                    </li>
                    <li className={page == "appliedJob" ? "active" : null}>
                      <a href="/applied-job">Applied Job</a>
                    </li>
                    <li className={page == "deleteAccount" ? "active" : null}>
                      <a href="/delete-account">Close Account</a>
                    </li>
                    <li className={page == "signup" ? "active" : null}>
                      <a href="/signup">Job Signup</a>
                    </li>
                    <li className={page == "signin" ? "active" : null}>
                      <a href="/signin">Job Signin</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="nav-right">
              <ul className="sign-in">
                <li>
                  <i className="fa fa-user"></i>
                </li>
                <li>
                  <a href="/signin">Sign In</a>
                </li>
                <li>
                  <a href="/signup">Register</a>
                </li>
              </ul>
              <a href="/job-post" className="btn">
                Post Your Job
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
