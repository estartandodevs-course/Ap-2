import './HomeNavbar.scss';



export default function HomeNavbar(props) {
    const { children } = props;
    return (
        <nav ClassName='bottom-navbar'>
            {children}
        </nav>
    )
}