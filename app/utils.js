import { comments } from "./data"
import { data } from "./data"

export const getComment = (carId) =>{
    const getComms = comments.filter((item)=>{
        return item.id == carId;
    })
}