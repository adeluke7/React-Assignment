function Footer() {
  return (
    <div>
      <footer id="footer" className="clearfix">
        <section className="footer-top clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h3>Quik Links</h3>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">All Cities</a>
                    </li>
                    <li>
                      <a href="#">Help & Support</a>
                    </li>
                    <li>
                      <a href="#">Advertise With Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h3>How to sell fast</h3>
                  <ul>
                    <li>
                      <a href="#">How to sell fast</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Banner Advertising</a>
                    </li>
                    <li>
                      <a href="#">Promote your ad</a>
                    </li>
                    <li>
                      <a href="#">Jobs Delivers</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget social-widget">
                  <h3>Follow us on</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-official"></i>Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter-square"></i>Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus-square"></i>Google+
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget news-letter">
                  <h3>Newsletter</h3>
                  <p>Jobs is Worldest leading Portal platform that brings!</p>

                  <form action="#">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email id"
                    />
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer-bottom clearfix text-center">
          <div className="container">
            <p>
              Copyright &copy; <a href="#">Jobs</a> 2017. Developed by{" "}
              <a href="http://themeregion.com/">ThemeRegion</a>
            </p>
          </div>
        </div>
      </footer>

      <div className="style-chooser">
        <div className="style-chooser-inner">
          <a href="#" className="toggler">
            <i className="fa fa-cog fa-spin"></i>
          </a>
          <h4>Presets</h4>
          <ul className="preset-list clearfix">
            <li className="preset1 active" data-preset="1">
              <a href="#" data-color="preset1"></a>
            </li>
            <li className="preset2" data-preset="2">
              <a href="#" data-color="preset2"></a>
            </li>
            <li className="preset3" data-preset="3">
              <a href="#" data-color="preset3"></a>
            </li>
            <li className="preset4" data-preset="4">
              <a href="#" data-color="preset4"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
