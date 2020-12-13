import './BackgroundHome.scss';


export default function BackgroundHome(props) {
    const { children } = props;
    return (
        <div className="background-home">
            {children}
        </div>
    )
}