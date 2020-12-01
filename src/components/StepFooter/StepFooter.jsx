import { Link } from "react-router-dom";

import './StepFooter.scss';


export default function footer() {
    return (
        <div className='footer'>
            <Link id='anterior' to='/'>Anterior</Link>
            <Link id='proximo' to='/register-second-step'>Próximo</Link>
        </div>
    )
}