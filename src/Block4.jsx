import './Block4.css'; 
const Block4 = props => {
    const boxes = [
      { id: 1, className:"box1", title: "Physical Health"},
      { id: 2, className:"box2", title: "Mental Health"},
      { id: 3, className:"box3", title: "Nutrition" },
      { id: 4, className:"box4", title: "Gymnastics" },
      { id: 5, className:"box5", title: "Crossfit" },
      { id: 6, className:"box6", title: "Aerobics" },

    ];
   
    return (
      /*<ul>
        {card.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>*/
      <div className="parentBoxes">
           {boxes.map(item => (
          <div className ={item.className} >
              <p>____________________</p>
              <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Block4; 