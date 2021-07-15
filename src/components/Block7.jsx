import './Block7.css'; 
import sportBoy from '../img/sportboy.png'

const  Block7 = () => { 
    return (
        <div className="parentblock7">
            <div className="textblock7">
                <div className="contactus">CONTACT US</div>
                <div className="ready">Ready. Set. Smile</div>
                <div className="take">Take the free online assessment to see if you are a candidate and get started on your journey.</div>
                <div className="gethelp">GET HELP NOW</div>
            </div>    
            <div>            
                <img src={sportBoy} alt="" />
            </div>
        </div>
    )
}
export default Block7 ; 