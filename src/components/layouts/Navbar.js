import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function Navbar() {

  const thanksAlert = () => {
    swal("Thank you!", "Thank you for your contribution!", "success");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width: '35px' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }}></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-upperCase ml-5" to="/">Home&nbsp;<i className="fas fa-home"></i> <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-upperCase ml-5" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-upperCase ml-5" to="/contacts">Contact Us</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input id="search_terms" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary my-2 my-sm-0 mr-sm-2" type="submit">Search</button>
        </form>

      </div>
      <button className="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#exampleModal">Donate</button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Donate</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src="images/QrCodeAmit2.jpg" style={{ width: '230px' }}></img>
              <div className="separator mb-2">OR</div>
              <div className='pm-button'><a href='https://www.payumoney.com/paybypayumoney/#/2573CF1F08A477AD55C78B7DC754EA95'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div> 
              {/* <div className='pm-button'><a href='https://www.payumoney.com/sandbox/paybypayumoney/#/5D819D8BA56852B8CA8A9D07DCC63182'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div>  */}
              {/* <div className='pm-button'><a href='https://www.payumoney.com/sandbox/paybypayumoney/#/AA20ABD13D8619301C70CFFE0C9772CD'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div>  */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => thanksAlert()}>Done</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
