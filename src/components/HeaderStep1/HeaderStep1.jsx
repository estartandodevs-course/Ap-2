import './HeaderStep1.scss';

export function RegisterHeader(props) {
    const { children } = props;
    return (
        <div className="registerHeader">
            {children}
        </div>
    )
}