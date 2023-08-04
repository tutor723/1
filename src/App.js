import React from 'react'
import './App.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useEffect,useState } from 'react';


function App() {
  const [openModal, setOpenModal] = useState(false);
  const[popup,setPopup]           = useState([]);
  const[cartoon,setCartoon]       = useState([]);
  const[closeModal,setcloseModal] = useState(false);
  const [input, setInput]         = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const fetchAnimal = await fetch('https://api.disneyapi.dev/character');
      const data        = await fetchAnimal.json();
      setCartoon(data.data);
      console.log(data);
     };
     fetchData();
    }, []);
    const changeContent =(data)=>{
      setOpenModal(true);
      setPopup([data]);
    console.log(popup);
    setcloseModal(!closeModal)
  
    }
  
  const close =()=>{
  console.log('f')
  setcloseModal(false);
  }


 return (
   <>
{closeModal &&
    <div className = 'popup'>
 {popup.map((eachCartoon) => {
      return(
        <div className = 'header'>
        <div className = 'upbody'>
        <button onClick = {close}>X</button>
        <p>ID of character: {eachCartoon._id}</p>
        <img src = {eachCartoon.imageUrl} className = "image"/>
        <p>Name of character : {eachCartoon.name}</p>
        <p>Name of films     : {eachCartoon.films}</p>
        <p>Name of shortfilms: {eachCartoon.shortFilms}</p>
        <p>Name of TV shows  : {eachCartoon.tvShows}</p>
</div>
       
      </div>
      )


     })}
        </div>}
        
        

    <div className = "App">
    <div className = "content">
    {cartoon.map((data,index)  =>{
        return (
       <div key   = {index}>
       <div class = 'card'>
       <img src   = {data.imageUrl} alt = "movie"/>
     <p>{data.name}</p>
   
       <button key = {index} onClick = {() => changeContent(data)}>Information</button>
    </div>
     
       </div>
        );
     }
  )
    }

</div>
 </div>





    
       
       
       
     
    

 






    </> 
   
  );

}

export default App;

















