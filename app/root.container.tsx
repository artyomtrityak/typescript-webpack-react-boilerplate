import * as React from "react";
import ChildComponent from './child.component';


export default class App extends React.Component<any, any> {
  public onChildClick(event : any) {
    console.log(event);
  }
  
  public render() {
    return (
      <div>
        Hello world
        <ChildComponent key={'child_component_key'} onClick={this.onChildClick} />
      </div>  
    ); 
  }
}
