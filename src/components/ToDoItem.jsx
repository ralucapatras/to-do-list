import React from "react";

function ToDoItem(props) {
  // const [handleMouse, setHandleMouse] = useState(false);

  // function handleClick() {
  //   //console.log("clicked");
  //   //setHandleMouse(true);
  //   // setHandleMouse((prevVal) => {
  //   //   return !prevVal;
  //   // });
  // }

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {/* <li style={{ textDecoration: handleMouse ? "line-through" : "none" }}>  */}
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
