import React from 'react';
import '../App.css';
import first from "../../src/assets/1.jpg"
import second from "../../src/assets/2.jpg"
import third from "../../src/assets/3.jpg"
import fourth from "../../src/assets/4.jpg"
import fiveth from "../../src/assets/5.jpg"
import six from "../../src/assets/6.jpg"
import { Link } from 'react-router-dom';


const products = [
    { name: "Календари", price: "от 83 коп.", link: "#",image:`${first}`  },
    { name: "Листовки", price: "от 68 коп.", link: "#",image:`${second}`  },
    { name: "Плакаты", price: "от 2,5 руб.", link: "#", image:`${third}` },
    { name: "Визитки", price: "от 51 коп.", link: "#", image:`${fourth}`},
    { name: "Буклеты", price: "от 1,41 руб.", link: "#", image:`${fiveth}`},
    { name: "Флаеры", price: "от 39 коп.", link: "#",image:`${six}` },
];

const Products = () => {

    return (
       <div className='flex'>
           {products.map((item,index)=>{
               return(
                   <Link to={'/Buy'}>
                       <div className="flex1" key={index} style={{
                           backgroundImage: `url(${item.image})`,
                           width: "560px",
                           height: "270px",
                           backgroundSize: "100%"
                       }}>
                           <div className='flex2'>
                               <p className='flex__n '> {item.name}</p>
                               <p className='flex__p '>{item.price}</p>
                           </div>
                       </div>
                   </Link>
               )
           })}
       </div>
    );
}

export default Products;
