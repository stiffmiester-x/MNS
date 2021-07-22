import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../Images/Styleandliving_Icon.webp'
import { useHistory } from "react-router-dom";

export default function Article() {
  const [article, setArticle] = useState<any[]>([]);
  const [errors, setErrors] = useState([]);

  const date={
    curDate : new Date().toLocaleString(),
  }

  const history=useHistory();
  
  useEffect(() => {
    axios.get('http://localhost:5000/article')
    .then((res)=>{
      setArticle(res.data);
    })
    .catch((e)=>{
      setErrors(e.response.data.errors)
    })
  }, []);
  const useArticle = article.map((e) => {
    return (
      <div className='container'
           key={e.id}
           onClick={() => history.push('/Redirect')} >
        <img className='div_image' src={e.image_link} alt="" />
        <div>Date : {date.curDate}</div>
        <p></p>
        <div>{e.title}</div>
        <p></p>
        <div>{e.heading}</div>
      </div>
    );
  });

  return (
    <>
      <img className='logo' src={logo} alt="logo" />
      <div className="axioscontainer" 
           
           data-testid='imagediv'>{useArticle}</div>
      {errors}    
      
      
    </>
  );
}