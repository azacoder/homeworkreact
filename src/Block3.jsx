// Example with an id
import './Block3.css'; 
const Block3 = props => {
    const card = [
      { id: 1, className:"cards1", title: "Weight Lifting"},
      { id: 2, className:"cards2", title: "Running  & Spinning"},
      { id: 3, className:"cards3", title: "Pumping Iron" },
      { id: 4, className:"cards4", title: "Pumping Iron" },
    ];
   
    return (
      /*<ul>
        {card.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>*/
      <div className="parentBox">
           {card.map(item => (
          <div className ={item.className}>
              <p>____________________</p>
              <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Block3; 