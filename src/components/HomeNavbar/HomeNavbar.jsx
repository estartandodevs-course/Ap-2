import './HomeNavbar.scss';



export default function HomeNavbar(props) {
    const { children } = props;
    return (
        <nav className='bottom-navbar'>
            {children}
        </nav>
    )
}