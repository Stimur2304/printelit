import { ImagesData } from "./images"
import  './image.css'

export const Image = () =>{
    return(
        <div className="advantage-div">
            {ImagesData.map((item,index)=>{
                return(
                    <div className="advantage">
                        <img src={item.imageURL} alt="" />
                        <p>{item.text}</p>
                    </div>
                )
            })}
        </div>
    )
}
