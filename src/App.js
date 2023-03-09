
import './App.css';

function App() { 

  return ( 
    
   <div className='App'> 
   <Family name1="Course-1" pay="4000" mark1="✓" mark2="✓"  mark3="✓" mark4="✓" mark5="✓" mark6="✓"  />
   <Family name1="Course-2" pay="3500" mark1="✓" mark2="✓"  mark3="✓" mark4="✓" mark5="✓" mark6="✕" /> 
   <Family name1="Course-3" pay="3000"  mark1="✓" mark2="✓"  mark3="✓" mark4="✓" mark5="✕" mark6="✕" />
   </div> 
   
  );
} 





export default App;  

function Family(props){ 


  return(<div className="Fam"> 
     
    <h1>{props.name1}</h1> 
     <h4>₹<span className='pay'>{props.pay}</span>/per month</h4>
   <div className='Line-1'></div> 

   <h2><span>{props.mark1}</span> HTML</h2> 
   <h2><span>{props.mark2}</span> CSS</h2> 
   <h2><span>{props.mark3}</span> JAVA SCRIPT</h2>
   <h2><span>{props.mark4}</span> REACT JS</h2>
   <h2><span>{props.mark5}</span> NODE JS</h2> 
   <h2><span>{props.mark6}</span> MONGO DB</h2> 

    <button className='Button'>SELECT</button> 

   
  </div>)
}

