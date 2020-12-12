import "./HeaderStep1.scss";

export function RegisterHeader(props) {
  const { children, width, height, className } = props;
  let selectClass = `${className} registerHeader`;
  return (
    <div className={selectClass} style={{ width: width, height: height }}>
      {children}
    </div>
  );
}
