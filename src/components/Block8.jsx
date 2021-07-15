import './Block8.css'; 
import sweetGirl from '../img/sweetgirl.png'; 
const Block8 = props => {
    const card8 = [
      { id: 1, className:"textbox1", title: "SOME INFO", description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula."},
      { id: 2, className:"textbox2", title: "ENFOLD HEALTH", description: `Main Street 1, Olcott
      Buffalo, United States
      
      +555 283 784 333
      office@enfold-health.com`},
      { id: 3, className:"textbox3", title: "OFFICE HOURS", description: `Mo-Fr: 8:00-19:00
      Sa: 8:00-14:00
      Su: closed` },

    ];
   
    return (
        <div className="parentBlock8" >
            <div className="sweetgirl">
                <img src={sweetGirl} alt="" />
            </div> 
            <div className="textBlock8">
                {card8.map(item=>(
                    <div className={item.className}>
                        <p className="txtname">{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                ))}

            </div>
        </div>

    )
};
  export default Block8; 