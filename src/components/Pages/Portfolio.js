import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      // Portfolio Section

      <div>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            {/*<!-- Portfolio Section Heading-->*/}

            <br />
            <br />
            <br />
            <br />
            <br />

            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Portfolio
            </h2>

            {/*<!-- Icon Divider-->*/}

            <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="divider-custom-line"></div>
            </div>

            {/*<!-- Portfolio Grid Items-->*/}

            <div className="row">
              {/*<!-- Portfolio Item 1-->*/}

              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal1"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/cabin.png"
                    alt=""
                  />
                </div>
              </div>

              {/*<!-- Portfolio Item 2-->*/}

              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal2"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/cake.png"
                    alt=""
                  />
                </div>
              </div>

              {/*<!-- Portfolio Item 3-->*/}

              <div className="col-md-6 col-lg-4 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal3"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/circus.png"
                    alt=""
                  />
                </div>
              </div>

              {/*<!-- Portfolio Item 4-->*/}

              <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal4"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/game.png"
                    alt=""
                  />
                </div>
              </div>

              {/*<!-- Portfolio Item 5-->*/}

              <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal5"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/safe.png"
                    alt=""
                  />
                </div>
              </div>

              {/*<!-- Portfolio Item 6-->*/}

              <div className="col-md-6 col-lg-4">
                <div
                  className="portfolio-item mx-auto"
                  data-toggle="modal"
                  data-target="#portfolioModal6"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/submarine.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Portfolio Modal 1 */}

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal1Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <div class="modal-body text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h2
                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal1Label"
                      >
                        Log Cabin
                      </h2>

                      <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                      </div>

                      <img
                        class="img-fluid rounded mb-5"
                        src="assets/img/portfolio/cabin.png"
                        alt=""
                      />

                      <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class="btn btn-primary" data-dismiss="modal">
                        <i class="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Portfolio Modal 2 */}

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal2"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal2Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <div class="modal-body text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h2
                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal2Label"
                      >
                        Tasty Cake
                      </h2>

                      <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                      </div>

                      <img
                        class="img-fluid rounded mb-5"
                        src="assets/img/portfolio/cake.png"
                        alt=""
                      />

                      <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class="btn btn-primary" data-dismiss="modal">
                        <i class="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Portfolio Modal 3*/}

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal3Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <div class="modal-body text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h2
                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal3Label"
                      >
                        Circus Tent
                      </h2>

                      <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                      </div>

                      <img
                        class="img-fluid rounded mb-5"
                        src="assets/img/portfolio/circus.png"
                        alt=""
                      />

                      <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class="btn btn-primary" data-dismiss="modal">
                        <i class="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Portfolio Modal  */}

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal4"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal4Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <div class="modal-body text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h2
                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal4Label"
                      >
                        Controller
                      </h2>

                      <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                      </div>

                      <img
                        class="img-fluid rounded mb-5"
                        src="assets/img/portfolio/game.png"
                        alt=""
                      />

                      <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class="btn btn-primary" data-dismiss="modal">
                        <i class="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Portfolio Modal  */}

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal5"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal5Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <div class="modal-body text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h2
                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal5Label"
                      >
                        Locked Safe
                      </h2>

                      <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                      </div>

                      <img
                        class="img-fluid rounded mb-5"
                        src="assets/img/portfolio/safe.png"
                        alt=""
                      />

                      <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class="btn btn-primary" data-dismiss="modal">
                        <i class="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Portfolio Modal  */}

        <div
          class="portfolio-modal modal fade"
          id="portfolioModal6"
          tabindex="-1"
          role="dialog"
          aria-labelledby="portfolioModal6Label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <button
                class="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i class="fas fa-times"></i>
                </span>
              </button>
              <div class="modal-body text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-8">
                      <h2
                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                        id="portfolioModal6Label"
                      >
                        Submarine
                      </h2>

                      <div class="divider-custom">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon">
                          <i class="fas fa-star"></i>
                        </div>
                        <div class="divider-custom-line"></div>
                      </div>

                      <img
                        class="img-fluid rounded mb-5"
                        src="assets/img/portfolio/submarine.png"
                        alt=""
                      />

                      <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class="btn btn-primary" data-dismiss="modal">
                        <i class="fas fa-times fa-fw"></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
