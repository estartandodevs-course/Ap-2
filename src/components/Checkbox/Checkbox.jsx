import { InputText } from "../InputText/InputText";
import "./Checkbox.scss";

export default function Checkbox(props) {
  const {content,label,id,classInput, htmlfor, className} = props;
  return (
    <div className="checkboxFunction">
      <div className="divCheckbox">
        <input type="checkbox" id={id} className="checkBox" onChange={(event)=>verificaCheck(event,classInput)}></input>
        <label htmlFor={htmlfor} className="label">{content}</label>
      </div>
      <div className="inputCheck">
        <InputText label={label} isRequired={true} colorLabel="rgba(39,103,188,1)" colorInput="rgba(204,204,204,1)" classInput={classInput} className="input-bio"/>
         {/* <input type="text" placeholder={placeHolder} className={classInput} style=
          {
            {
              display: 'none',
              borderColor: 'rgba(204,204,204,1)',
              borderWidth: '1px',
              borderTop: 'transparent',
              borderLeft: 'transparent',
              borderRight: 'transparent',
              background: 'transparent', 
              outline: 'none',
              width:'335px',
              paddingLeft: '10px',
              paddingBottom: '5px'
            }
          }>
          </input> */}
      </div>
        
    </div>
  );
}



function verificaCheck(event, classInput){

  const check = event.target.checked;
  const input = document.querySelector("."+classInput);
  const checkboxFunction = document.querySelector(".checkboxFunction+.checkboxFunction .divCheckbox");
  if(check)
  {
    input.style.display="inline";
    if(check === "input1")
      checkboxFunction.style.marginTop="20px";
  }
  else{
    input.style.display="none";
  }
}