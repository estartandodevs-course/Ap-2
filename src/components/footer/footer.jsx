import { Link } from "react-router-dom";

import './footer.scss';


export function footer() {
    return (
        <div class='footer'>
            <Link to=''>Anterior</Link>
            <Link to=''>Próximo</Link>
        </div>
    )
}