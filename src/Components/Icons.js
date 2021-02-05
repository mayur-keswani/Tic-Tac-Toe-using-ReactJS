import React from 'react';
import {FaTimes,FaPen,FaRegCircle} from "react-icons/fa";

import '../css/style.css'
const Icons=(props)=>{
		let icon=null;

		switch (props.name){
			case "cross":{
				icon=( <FaTimes className="icon"/> )                         
				// X
				break;
			}
			case "circle":{
				icon=( <FaRegCircle  className="icon"/> )
				
				break;
			}
			default:{
				icon=( <FaPen  className="icon"/>)
			}
		}
		return(

			<button className="card col-lg-4  col-md-4  col-sm-4 col-4 my-0"  onClick={props.clicked}>
				{icon}
			</button>	
			
		)
	
}

export default Icons;