import './Block5.css'; 
const Block5 = props => {
    const card5 = [
      { id: 1, className:"minibox1", title: "Nutritional Plans", description: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."},
      { id: 2, className:"minibox2", title: "Weight Loss", description: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."},
      { id: 3, className:"minibox3", title: "Mental Peace", description: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy." },
      { id: 4, className:"minibox4", title: "Home Training", description: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy." },
      { id: 5, className:"minibox5", title: "Work/Life Balance" , description: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."},
      { id: 6, className:"minibox6", title: "Cardio" , description: "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."},

    ];
   
    return (
      <div className="parentBoxes5">
           {card5.map(item => (
          <div className ={item.className} >
              <p className="textblock5">{item.title}</p>
              <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default Block5; 