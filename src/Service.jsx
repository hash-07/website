import React from "react"; 
import Cards from "./Cards";
import web from "../src/coffee.jpg";
import Sdata from "./Sdata"; 

const Service = () => {
	return (
<div>
				<div className='my-5'>
					<h1 className='text-center'>Our services</h1>
				</div>

          <div className="container-fluid mb-5">
           			 <div className="row">
            				<div className='col-10 mx-auto'>
            					<div className='row gy-1'>
            						{
            							Sdata.map((val, ind) =>{
            								return <Cards key={ind}
            								imgsrc={val.imgsrc}
            								title={val.title}/>
            							})
            						}
            					</div>
            				</div>	 
            		 </div>

		  </div>
</div> 
		);
};

export default Service;