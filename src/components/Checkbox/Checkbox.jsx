import "./Checkbox.scss";

export default function Checkbox(props) {
  const {content,label,id} = props;
  return (
    <div className="checkboxFunction">


      <div className="divCheckbox">
      <input type="checkbox" id={id} className="checkBox" onChange={(event)=>console.log(event)}></input>
        <label htmlFor={label} className="label">{content}</label>
      </div>
      
        <div className="inputCheck">
          <input type="text" placeholder="Teste" className="input"></input>
        </div>
        
    </div>
  );
}
