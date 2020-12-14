import './HeaderStep1.scss';

export function RegisterHeader(props) {
    const { children, height, className } = props;
    return (
        <div className={className} style={{height:height}}>
            {children}
        </div>
    )
}