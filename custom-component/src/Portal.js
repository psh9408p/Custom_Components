import reactDom from "react-dom";

export default function Portal({ children }) {
  const el = document.getElementById("modal");
  return reactDom.createPortal(children, el);
}
