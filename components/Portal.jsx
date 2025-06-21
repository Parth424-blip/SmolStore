import ReactDom from "react-dom";
const Portal = (props) => {
  const { handleClosePortal, children } = props;
  return ReactDom.createPortal(
    <div className="portal-container">
      <div onClick={handleClosePortal} className="portal-underlay" />
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Portal;
