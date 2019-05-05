import React from 'react'
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="App">
    <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>My Website</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" />
        <link rel="stylesheet" href="assets/fonts/font-awesome.min.css" />
    </head>

    <body id="page-top">
      <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase" id="mainNav">
        <div className="container"><a className="navbar-brand js-scroll-trigger" href="#page-top">My Website</a><button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1" role="presentation"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
              <li className="nav-item mx-0 mx-lg-1" role="presentation"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#pictures">Pictures</a></li>
              <li className="nav-item mx-0 mx-lg-1" role="presentation"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#details">More Details</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead bg-primary text-white text-center">
        <div className="container"><img className="img-fluid d-block mx-auto mb-5" src="assets/img/profile.png" alt='' />
          <h1>My Basic Website</h1>
          <hr className="star-light" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}></hr>
          <h2 className="font-weight-light mb-0">Basic website showcase</h2>
        </div>
      </header>
      <section id="about" style={{ paddingBottom: '50px' }}>
        <div className="container-fluid">
          <h2 className="text-uppercase text-center">About</h2>
          <hr className="star-dark mb-5" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}></hr>
          <div className="row d-inline">
              <div className="col-lg-4" style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '80%' }}>
                  <p className="lead text-center">This is a small example website where I'm throwing up a few images of some cool animals and stuff.<br /><br /></p>
              </div>
          </div>
            <div className="text-center mt-4"></div>
        </div>
      </section>
      <section id="pictures" className="pictures">
        <div className="container">
          <h2 className="text-uppercase text-center text-secondary">Pictures</h2>
          <hr className="star-dark mb-5" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}></hr>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <a className="d-block mx-auto pictures-item" href="#pictures-modal-1" data-toggle="modal">
                <div className="d-flex pictures-item-caption position-absolute h-100 w-100">
                  <div className="my-auto pictures-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x"></i></div>
                </div><img className="img-thumbnail img-fluid" src="assets/img/sharkface.png" alt='' /></a>
            </div>
            <div className="col-md-6 col-lg-6">
              <a className="d-block mx-auto pictures-item" href="#pictures-modal-2" data-toggle="modal">
                <div className="d-flex pictures-item-caption position-absolute h-100 w-100">
                  <div className="my-auto pictures-item-caption-content w-100 text-center text-white"><i className="fa fa-search-plus fa-3x"></i></div>
                </div><img className="img-fluid" src="assets/img/cool_goat.jpg" alt='' /></a>
            </div>
          </div>
        </div>
      </section>
      <section id="details">
        <div className="container">
          <h2 className="text-uppercase text-center text-secondary mb-0">More details</h2>
          <hr className="star-dark mb-5" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}></hr>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel laudantium natus earum doloribus, atque tenetur iure cupiditate dolorem quos, esse dolor quasi perspiciatis velit. Tempore facilis provident expedita corporis!</p><br />
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel laudantium natus earum doloribus, atque tenetur iure cupiditate dolorem quos, esse dolor quasi perspiciatis velit. Tempore facilis provident expedita corporis!</p><br />
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel laudantium natus earum doloribus, atque tenetur iure cupiditate dolorem quos, esse dolor quasi perspiciatis velit. Tempore facilis provident expedita corporis!</p><br />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4" style={{ marginBottom: '20px' }}>Contact</h4>
            <p>notarealemail@gmail.com<br />332-NOT-REAL</p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase" style={{ paddingBottom: '10px' }}>Social Media</h4>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-facebook fa-fw"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-google-plus fa-fw"></i></a></li>
              <li className="list-inline-item"><a className="btn btn-outline-light btn-social text-center rounded-circle" role="button" href="#"><i className="fa fa-twitter fa-fw"></i></a></li>
              <li className="list-inline-item"></li>
            </ul>
          </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">Animal Person</h4>
              <p className="lead mb-0"><span>Posting some animal pictures and stuff.</span></p>
            </div>
          </div>
        </div>
      </footer>
      <div className="d-lg-none scroll-to-top position-fixed rounded"><a className="d-block js-scroll-trigger text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a></div>
      <div className="modal text-center" role="dialog" tabIndex="-1" id="pictures-modal-1">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header"><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="text-uppercase text-secondary mb-0">Picture 1</h2>
                    <hr className="star-dark mb-5" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}></hr>
                      <img className="img-fluid mb-5" src="assets/img/sharkface.png" alt='' />

                    <p className="mb-5">Here's a cool shark.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer pb-5"></div>
          </div>
        </div>
      </div>
      <div className="modal text-center" role="dialog" tabIndex="-1" id="pictures-modal-2"></div>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header"><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
          <div className="modal-body">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-uppercase text-secondary mb-0">Picture 2</h2>
                  <hr className="star-dark mb-5" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}></hr>
                    <img className="img-fluid mb-5" src="assets/img/cool_goat.jpg" alt='' />

                  <p className="mb-5">Goats are cool animals and this goat is even cooler because it is wearing sunglasses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer pb-5"></div>
        </div>
      </div>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      <script src="assets/js/freelancer.js"></script>
    </body>
  </div>
  );
};

ReactDOM.render(
  <App />,
document.querySelector('.react-container'));