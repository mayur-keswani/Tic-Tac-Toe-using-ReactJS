import React, { useState } from "react";

import "./css/style.css";
import GameBoard from './Components/GameBoard';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";






const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9)
  };



  const checkIsWinner = () => {
	if(itemArray[0]!=='empty' && itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2]){
		 setWinMessage(`Congrates!! ${itemArray[0]} wins `)
		}
	else if(itemArray[3]!=='empty' && itemArray[3]===itemArray[4] && itemArray[3]===itemArray[5]){
			setWinMessage(`Congrates!! ${itemArray[3]} wins `)
		}
	else if(itemArray[6]!=='empty' && itemArray[6]===itemArray[7] && itemArray[6]===itemArray[8]){
			setWinMessage(`Congrates!! ${itemArray[6]} wins `)
		}	

	else if(itemArray[0]!=='empty' && itemArray[0]===itemArray[3] && itemArray[0]===itemArray[6]){
			setWinMessage(`Congrates!! ${itemArray[0]} wins `)
		}	
	else if(itemArray[1]!=='empty' && itemArray[1]===itemArray[4] && itemArray[1]===itemArray[7]){
			setWinMessage(`Congrates!! ${itemArray[1]} wins `)
		}
	else if(itemArray[2]!=='empty' && itemArray[2]===itemArray[5] && itemArray[2]===itemArray[8]){
			setWinMessage(`Congrates!! ${itemArray[2]} wins `)
		}
		
	else if(itemArray[0]!=='empty' && itemArray[0]===itemArray[4] && itemArray[0]===itemArray[8]){
			setWinMessage(`Congrates!! ${itemArray[0]} wins `)
		}	
	else if(itemArray[2]!=='empty' && itemArray[2]===itemArray[4] && itemArray[2]===itemArray[6]){
			setWinMessage(`Congrates!! ${itemArray[2]} wins `)
		}	
		  
  };



  const changeItem = (itemNumber) => {
   if(itemArray[itemNumber]==="empty")
   {
    if(isCross===false){
      itemArray[itemNumber]="cross"
    }else{
      itemArray[itemNumber]="circle"
    }
   } 

   else{
    	return toast("already filled", { type: "error" });
 	   }

   setIsCross(!isCross);
   checkIsWinner();

  };



  
  let userGuide=null;
  if(winMessage)
  {
	  userGuide=( <button className="btn bg-white btn-block" onClick={()=>reloadGame()}><h2 className="text-danger">reloadGame</h2></button>)
  }else{
	  userGuide=(
		 		 (isCross===false)?<h2 className="text-secondary">Your Turn!!   &nbsp; Player 1</h2> :<h2 className="text-secondary">Your Turn!! Player 2</h2>
	  			)
 		 }
  
  
  return (
        <div className="container text-center">

         <ToastContainer position="bottom-center" />
	       <span id="text-heading">Tic Tac Toe</span>

	       {(winMessage)?<h2 className="text-success">{winMessage}</h2>:null}
         {userGuide} 
         <GameBoard itemArray={itemArray} clicked={(i)=>{changeItem(i)}} />

         
         <div class="sharethis-inline-share-buttons text-center fixed-bottom"></div>
        </div>   
  );
};

export default App;
