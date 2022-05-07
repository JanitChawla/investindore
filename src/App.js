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
        {/* {/* <!--End Main Header --> */}
        <section
          style={{ position: "relative", marginTop: "150px" }}
          className="coming-soon-section"
        >
          <div className="auto-container">
            <div className="outer-container clearfix">
              <div className="title-column">
                <div className="inner-column">
                  <h3>
                    Count Every <br />
                    Second Until <br />
                    the Event
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section class="about-section">
          <div class="parallax-scene parallax-scene-1 anim-icons">
            <span
              data-depth="0.40"
              class="parallax-layer icon icon-circle-3"
            ></span>
            <span
              data-depth="0.99"
              class="parallax-layer icon icon-circle-4"
            ></span>
          </div>

          <div class="auto-container">
            <div class="row">
              {/* <!-- Content Column --> */}
              <div class="content-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="sec-title">
                    <span class="title">About Conference</span>
                    <h2>Welcome to the World Digital Conference 2019</h2>
                  </div>
                  <div class="text">
                    Dolor sit amet consectetur elit sed do eiusmod tempor incd
                    idunt labore et dolore magna aliqua enim ad minim veniam
                    quis nostrud exercitation ullamco laboris nisi ut aliquip
                    exea commodo consequat.duis aute irure dolor in reprehen
                    derit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur cepteur sint occaecat cupidatat.
                  </div>
                  <div class="btn-box">
                    <a href="#" class="theme-btn btn-style-one">
                      Contact Us <span class="flaticon-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Image Column --> */}
              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="inner-column">
                  <div class="image-box">
                    <figure class="image wow fadeInRight">
                      <a
                        href="https://www.inconcertweb.com/wp-content/uploads/2017/02/WhatisHerov3.jpg"
                        class="lightbox-image"
                        data-fancybox="images"
                      >
                        <img
                          src="https://www.inconcertweb.com/wp-content/uploads/2017/02/WhatisHerov3.jpg"
                          alt=""
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section class="shedule-section">
          <div class="auto-container">
            <div class="sec-title">
              <span class="title">About Conference</span>
              <h2>Schedule Plan</h2>
            </div>

            <div class="shedule-tabs tabs-box">
              <div class="btns-box">
                {/* <!--Tabs Box--> */}
                <ul class="tab-buttons clearfix">
                  <li class="tab-btn active-btn" data-tab="#tab-1">
                    First Day <span>Feb 20, 2019</span>
                  </li>
                  <li class="tab-btn" data-tab="#tab-2">
                    Second Day <span>Feb 20, 2019</span>
                  </li>
                  <li class="tab-btn" data-tab="#tab-3">
                    Third Day <span>Feb 20, 2019</span>
                  </li>
                </ul>
              </div>

              <div class="tabs-content">
                {/* <!--Tab--> */}
                <div class="tab active-tab" id="tab-1">
                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-1.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-2.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-3.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-4.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--Tab--> */}
                <div class="tab" id="tab-2">
                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-1.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-2.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-3.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-4.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--Tab--> */}
                <div class="tab" id="tab-3">
                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-1.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-2.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-3.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Shedule Block --> */}
                  <div class="shedule-block">
                    <div class="inner-box clearfix">
                      <figure class="thumbs-box">
                        <img src="images/resource/thumb-4.jpg" alt="" />
                      </figure>
                      <div class="content-box">
                        <div class="date">
                          <span class="icon far fa-clock"></span>9.00 AM - 10.00
                          PM
                        </div>
                        <h4>
                          <a href="shedule.html">
                            Modern Marketing Summit Sydney 2018
                          </a>
                        </h4>
                        <div class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmtempor incididunt labore et dolore
                          magna aliqu enim ad minim veniam quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </div>
                        <ul class="shedule-info clearfix">
                          <li>
                            <span>by</span> <a href="#">Samanta Doe</a> CEO of
                            Houz
                          </li>
                          <li>Auditorium A</li>
                        </ul>
                      </div>
                      <div class="btn-box">
                        <a
                          href="shedule.html"
                          class="theme-btn btn-style-three"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
