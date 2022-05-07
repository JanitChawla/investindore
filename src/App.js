import "./App.css";

function App() {
  return (
    <div classNameName="App">
      <div className="page-wrapper">
        {/* <!-- Preloader --> */}
        <div className="preloader"></div>

        {/* <!-- Main Header--> */}
        <header style={{ background: "black" }} className="main-header">
          {/* <!--Header-Upper--> */}
          <div className="header-upper">
            <div className="outer-container">
              <div className="clearfix">
                <div className="pull-left logo-box">
                  <div className="logo">
                    <a href="index.html">
                      <img src="images/logo.png" alt="" title="" />
                    </a>
                  </div>
                </div>

                {/* <!--Nav Box--> */}
                <div className="nav-outer clearfix">
                  {/* <!--Mobile Navigation Toggler--> */}
                  <div className="mobile-nav-toggler">
                    <span className="icon flaticon-menu-1"></span>
                  </div>
                  {/* <!-- Main Menu --> */}
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li className="current dropdown">
                          <a href="index.html">Home</a>
                          <ul>
                            <li>
                              <a href="index.html">Home Default</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home ClassNameic</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home Conference</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home Meetup</a>
                            </li>
                            <li>
                              <a href="index-5.html">Home Development</a>
                            </li>
                            <li className="dropdown">
                              <a href="index.html">Header Styles</a>
                              <ul>
                                <li>
                                  <a href="index.html">Header Type 01</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Header Type 02</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Header Type 03</a>
                                </li>
                                <li>
                                  <a href="index-4.html">Header Type 04</a>
                                </li>
                                <li>
                                  <a href="index-5.html">Header Type 05</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="speakers.html">Speakers</a>
                          <ul>
                            <li>
                              <a href="speakers.html">Speakers</a>
                            </li>
                            <li>
                              <a href="speaker-single.html">Speakers Single</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="about.html">Pages</a>
                          <ul>
                            <li className="dropdown">
                              <a href="about.html">About</a>
                              <ul>
                                <li>
                                  <a href="about.html">About 01</a>
                                </li>
                                <li>
                                  <a href="about-2.html">About 02</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="pricing-table.html">Pricing Table</a>
                            </li>
                            <li>
                              <a href="faqs.html">FAQ's</a>
                            </li>
                            <li className="dropdown">
                              <a href="gallery.html">Gallery</a>
                              <ul>
                                <li>
                                  <a href="gallery.html">Gallery 01</a>
                                </li>
                                <li>
                                  <a href="gallery-2.html">Gallery 02</a>
                                </li>
                                <li>
                                  <a href="gallery-3.html">Gallery 03</a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a href="products.html">Shop</a>
                              <ul>
                                <li>
                                  <a href="products.html">Products</a>
                                </li>
                                <li>
                                  <a href="product-single.html">
                                    Product Single
                                  </a>
                                </li>
                                <li>
                                  <a href="shopping-cart.html">Shopping Cart</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="login.html">Login</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shedule.html">Schedule</a>
                        </li>
                        <li className="dropdown">
                          <a href="sponsors-1.html">Sponsors</a>
                          <ul>
                            <li>
                              <a href="sponsors-1.html">Sponsors 01</a>
                            </li>
                            <li>
                              <a href="sponsors-2.html">Sponsors 02</a>
                            </li>
                            <li>
                              <a href="become-sponsor.html">Become Sponsor</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="blog.html">Blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog 01</a>
                            </li>
                            <li>
                              <a href="blog-2.html">Blog 02</a>
                            </li>
                            <li>
                              <a href="blog-detail.html">Blog detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  <div className="outer-box">
                    <div className="cart-btn">
                      <a href="shopping-cart.html">
                        <span className="icon flaticon-shopping-bag"></span>{" "}
                        <span className="count">2</span>
                      </a>
                    </div>
                    <div className="search-box">
                      <div className="search-box-btn">
                        <span className="icon flaticon-magnifying-glass"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Outer btn --> */}
                <div className="outer-btn">
                  <a href="contact.html" className="theme-btn btn-style-one">
                    Buy Tickets <span className="flaticon-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Header Upper-->

            <!-- Mobile Menu  --> */}
          <div className="mobile-menu">
            <div className="menu-backdrop"></div>
            <div className="close-btn">
              <span className="icon flaticon-cancel-1"></span>
            </div>

            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            <nav className="menu-box">
              <div className="nav-logo">
                <a href="index.html">
                  <img src="images/logo-2.png" alt="" title="" />
                </a>
              </div>

              <ul className="navigation clearfix">
                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
              </ul>
            </nav>
          </div>
          {/* <!-- End Mobile Menu --> */}
        </header>
        {/* <!--End Main Header -->

        <!--Main Slider--> */}
      </div>
    </div>
  );
}

export default App;
