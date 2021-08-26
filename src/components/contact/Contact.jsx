 
import "./contact.scss";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import PhoneIcon from '@material-ui/icons/Phone';
// import "./topbar.scss";

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

export default function Contact() {
 
  return (
    <div className=" container-fluid " id="contact" style={{ backgroundColor: "white" }}>
      <div className="row jsutify-content-center">
        <div className="h1 text-center">
          Contact 
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-10 mx-auto">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <img src="assets/shake.svg" alt="" />
            </div>
            <div className="col-md-5   float-right mt-5" style={{marginLeft:"100px"}} >
              <div className="col-md-12">
              <LocationOnIcon key="1" style={{color:"blue",fontSize:"50px"}}/> <span style={{fontSize:"25px",color:"grey",marginLeft:"5px"}}> Porbandar-IN</span> <br></br>
              </div>
              <div className="col-md-12 mt-3">
              <EmailRoundedIcon key="2" style={{color:"blue",fontSize:"50px"}}/> <span style={{fontSize:"25px",color:"grey",marginLeft:"5px"}}>jaykaravadra77@gmail.com</span> <br></br>
              </div>
              <div  className="col-md-12 mt-3 " >
              <PhoneIcon key="3" style={{color:"blue",fontSize:"50px"}}/> <span  style={{fontSize:"25px",color:"grey",marginLeft:"5px"}}>6354289735</span> <br></br>
              </div>
        
              
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
