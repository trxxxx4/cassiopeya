import { DetalCard } from '../Components/DetalCard/DetalCard';
import { data } from '../data';

export default function CarCard  () {
    const props = data.find((item, index)=>{
       return item.model == 'Subaru Ascent';
        
    })

    
    
    return(

       <DetalCard props={props}/>

    )

}