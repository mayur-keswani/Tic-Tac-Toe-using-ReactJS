import React from 'react'

import Icon from './Icons'
const GameBoard =(props) =>{
	return(
		<div className="row  m-auto gameBoard" >
			{
		  		props.itemArray.map((item,index)=>{
					return(
						<Icon key={index} name={item} clicked={props.clicked.bind(this,index)}/>                   
				 	)    
		  		})
			}
   		</div>

	)
}


export default GameBoard;