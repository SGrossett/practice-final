const Button = ({ title, activeClass, setTimer } ) => {
  return (
      <button className={activeClass} onClick={setTimer}>
        {title}
      </button>
    )
}
export default Button;