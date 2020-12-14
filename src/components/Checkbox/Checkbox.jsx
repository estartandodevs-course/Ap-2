import "./Checkbox.scss";

export default function Checkbox(props) {
  const {content,id,classInput, htmlfor, children} = props;
  return (
    <div className="checkboxFunction">
      <div className="divCheckbox">
        <input type="checkbox" id={id} className="checkBox" onChange={(event)=>verificaCheck(event,classInput)}></input>
        <label htmlFor={htmlfor} className="label">{content}</label>
      </div>
      <div className="inputCheck">
        {children}
      </div>
        
    </div>
  );
}



function verificaCheck(event, classInput){

  const check = event.target.checked;
  const input = document.querySelector("."+classInput);
  const divCheckbox = document.querySelector(".checkboxFunction+.checkboxFunction .divCheckbox");
  if(check)
  {
    input.style.display="inline";
    if(check === "input1"){
      divCheckbox.style.marginTop="20px";
    }
  }
  else{
    input.style.display="none";
  }
}