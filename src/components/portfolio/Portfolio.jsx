 
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
 
import "../cards/card.css";
import Card from "../cards/Card";
 
let data =[{
  title:"Agricultural Equipments Showrooms(Bloging website)",
  technology:`Frontend-Bootstrap,CSS,Html 
               Backend-Django `,
  github:"https://github.com/Jaykaravadra77/Agricultural-Equipments-showroom",
  description:" Functions:Showrooms can add them products details on this site.Farmers can view the Product’s details of any showroom which belongs to farmer’s city",
  demo:"https://www.youtube.com/embed/qkZMF_3W_EU?autoplay=1",
  id:"1"
},
{
  title:"E-Mall ",
  technology:`Frontend-Bootstrap,CSS,Html 
               Backend-Node JS,MongoDB `,
  github:"https://github.com/Jaykaravadra77/Agricultural-Equipments-showroom",
  description:"Discription:Mini Project for understanding the concept of ecommerce application",
  demo: `https://www.youtube.com/embed/RRNmSqVSTzo?autoplay=1`,
  id:"2"
 
},
{
  title:"E-Mall(E-commerce Website) ",
  technology:`Frontend-React JS,Backend-Node JS,MongoDB,(MERN stack)`,
  github:"https://github.com/Jaykaravadra77/Agricultural-Equipments-showroom",
  description:`Description:
  This platform I will creating for Mall.In this system mall 
  can sell the products. And order will deliver in same day 
  of an order in Particular city where mall's located.
   Functions:
  (1)Buying and selling
  (2)Order delivered in same day 
  (3)Online Payments
  `,
  demo: `https://www.youtube.com/embed/RRNmSqVSTzo?autoplay=1`,
  id:"3"
 

},
]

export default function Portfolio() {

  return (
    <>
    <div style={{backgroundColor:"white"}} id="portfolio">
      
     
      <div className="row  justify-content-center mt-3">
        <div className="text-center h1">Portfolio</div>
      </div>
      {data.map((value) => {
        return (
         
              <Card  key={value.id} title={value.title}  technology={value.technology} github={value.github} description={value.description} demo={value.demo}/>          
         
        )
      })}
    </div>
   
    </> 
  );

}
