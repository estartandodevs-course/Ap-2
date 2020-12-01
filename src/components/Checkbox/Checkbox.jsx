import "./Checkbox.scss";

export default function Checkbox(props) {
  const {content,label,id,classInput,placeHolder} = props;
  return (
    <div className="checkboxFunction">
      <div className="divCheckbox">
      <input type="checkbox" id={id} className="checkBox" onChange={(event)=>verificaCheck(event,classInput)}></input>
        <label htmlFor={label} className="label">{content}</label>
      </div>
        <div className="inputCheck">
          <input type="text" placeholder={placeHolder} className={classInput} style=
          {
            {
              display: 'none',
              borderTop: 'transparent',
              borderLeft: 'transparent',
              borderRight: 'transparent',
              borderBottom: 'groove',
              background: 'transparent', 
              outline: 'none',
              width:'335px'
            }
          }>
          </input>
        </div>
        
    </div>
  );
}

function verificaCheck(event,classInput){
  const check = event.target.checked;
  const input = document.querySelector("."+classInput);
  if(check)
  {
    input.style.display="inline";
    input.value="";
  }
  else
    input.style.display="none";
}
