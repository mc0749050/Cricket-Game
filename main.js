let computermove;
let result;
let usermove;
function codedisplay(){
  let randomNo = Math.random() * 3;
  
  if (randomNo > 0 && randomNo <= 1) {
    computermove = 'Bat';
    document.getElementById('computer').innerText = 'Bat';
  }
  else if (randomNo > 1 && randomNo <= 2) {
    computermove = 'Ball';
    document.getElementById('computer').innerText = 'Ball';
  }
  
  else if (randomNo > 2 && randomNo <= 3) {
    computermove = 'Stump';
    document.getElementById('computer').innerText = 'Stump';
  
  }
}


function getResult(usermove, computermove){
  
  
  
  if (usermove === 'Bat' && computermove === 'Bat'){
    
    
    return 'match is tie';
   }
   
  
  else if (usermove === 'Bat' && computermove === 'Ball'){
    return 'you are winner';
  
        
       
  
  }
  else if (usermove === 'Bat' && computermove === 'Stump')
  {
    return 'you are losser';
    
  }
  
  
    else if (usermove === 'Ball' && computermove === 'Bat'){
    
    return 'you are looser';
      
   }
   
  
  else if (usermove === 'Ball' && computermove === 'Ball'){
    return 'match is tie';
   
       
  }
  else if (usermove === 'Ball' && computermove === 'Stump')
  {
    return 'you are winner';
        
  }
 
   if (usermove === 'Stump' && computermove === 'Bat'){
    
    return 'you are winner';
   
   
   }
   
  
  else if (usermove === 'Stump' && computermove === 'Ball'){
    return 'you are losser';
       
  }
  else if (usermove === 'Stump' && computermove === 'Stump')
  {
    return 'match is tie';
      
  }
  
  }
  
  

// for Bat 
function Bat(){
  
  usermove = 'Bat';
   document.getElementById('my').innerText = 'Bat';
   
  
  
  codedisplay();
  
  getResult(usermove, computermove);
  
  let result =   getResult(usermove, computermove);
    document.getElementById('reslt').innerText = result;
    
   
    
    
   
  }
  
//  alert(`you choose bat. computer choose ${computerChoice}. ${result}`)



// for ball

function Ball(){
  
  usermove = 'Ball';
   document.getElementById('my').innerText = 'Ball';
  
  codedisplay();
  
  getResult(usermove, computermove);
  
  let result =   getResult(usermove, computermove);
    document.getElementById('reslt').innerText = result;
    
  
       
  }
  
 // alert(`you choose ball. computer choose ${computerChoice}. ${result}`)

//for stump

function Stump() {
  usermove = 'Stump';
  document.getElementById('my').innerText = 'Stump';
  

  codedisplay();

  getResult(usermove, computermove);
  
  let result =   getResult(usermove, computermove);
    document.getElementById('reslt').innerText = result;
      


 // alert(`you choose Stump. computer choose ${computerChoice}. ${result}`)
}



// help JS

document.getElementById("icon").addEventListener("click", open_close);

var menuState = 0 // close
function open_close() {
  if(menuState === 0){
     menuState = 1;
     document.getElementById("help").style.display = "block";
     //document.getElementById("main").style.marginLeft = "250px";
     
  }
  else {
     menuState = 0;
     document.getElementById("help").style.display = "none";
     }
     
}




