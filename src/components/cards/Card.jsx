import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
export default function Card(props){
    return(<>
     <div className="    border-0    " style={{margin:"0px 50px 00px 50px"}}>
    <div className="row example1 border-0   justify-content-center " >

      <div className="col-md-5 border-0  mt-3  px-3">
        <div className="card-block  border-0       ">
          <h4 className="card-title text-dark">{props.title}</h4>
          <p className="card-text text-dark">
           {props.technology}
          </p>
          <p className="card-text text-dark"> {props.description}</p>
          <p className="card-text text-dark">GitHub:<a href={props.github}>{props.github}</a></p>
           
          <br/>
         
        </div>
      </div>
 
      <div className="col-md-5 mt-3">
      <iframe title="hello" key={props} src={props.demo} className="col-md-10 mx-4 " height="250" frameBorder="500"></iframe>
        </div>
      </div>
   
  
    </div>
    </>)
   
   
}

