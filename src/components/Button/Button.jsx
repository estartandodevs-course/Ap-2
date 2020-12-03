import "./Button.scss";

export function Button(props) {
  const {
    children,
    background,
    width,
    height,
    onClick,
    className,
    borderRadius
  } = props;

  return (
    <button
      style={{
        width: width,
        height: height,
        background: background,
        borderRadius: borderRadius
      }}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
