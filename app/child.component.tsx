import * as React from "react";


interface ChildComponentInterface {
  key : string,
  onClick: (event : any) => void;
}


const childComponent = (props : ChildComponentInterface) => {
  return (
    <div onClick={props.onClick}>Click me</div>  
  );
};

export default childComponent;
