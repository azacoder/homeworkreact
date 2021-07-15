import './Block1.css'; 
import Photogirl from '../img/girl.jpg'; 

function Block1 () { 
    return(
    <div className="block1">
        <div className="content">
            <p className="textb1" >Why Thrive?</p>
            <p className="textb2">Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?  Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
        </div>
        <div>
            <img src={Photogirl} alt="" />
        </div>
    </div>
    )
}

export default Block1; 