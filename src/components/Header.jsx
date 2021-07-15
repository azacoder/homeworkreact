import './Header.css'; 
import  Photoboys from '../img/phboys.png'
const Header = () => {
   return (
        <div className="headcontent">
            <div className="header">
            <p>Thrivetalk</p>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
            </ul>
            <input className="contact" type="button"  value="CONTACT US" />
            </div>            
            <div className="bigdiv">
                <div className="Texts">
                    <div className="Thrivetalk">Thrivetalk</div>
                    <div className="helptext">HELPING YOU THRIVE IN ALL AREAS OF LIFE</div>
                    <div className="Ourhighly">Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</div>
                    <div className="buttons">
                        <input className="btn1" type="button" value="WHO AM I" />
                        <input className="btn2" type="button" value="WHAT DO I DO" />
                    </div>
                </div>
                <div>
                    <img src={Photoboys} alt="photoBoys" />
                </div>
                </div>
        </div>
    )
}
export default Header; 