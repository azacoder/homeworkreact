import './Block6.css'; 
import photoBoy from '../img/boy.png'
const Block6=() => { 
    return (
        <div className="parentblock6" >
           <div> <img src={photoBoy} alt="" /></div>
            <div className="textBlock6">
                <div className="youShould">YOU SHOULD ALSO KNOW</div>
                <div className="affects">MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at ThriveTalk can help you.</div>
                <div className="get">GET HELP NOW</div>
            </div>
        </div>        
    )
}
export default Block6; 