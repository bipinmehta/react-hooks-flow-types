
import * as React from 'react';

type MyCompProps = {
    name:string, 
    age?:Number, 
    children:React.Node
}

MyComp.defaultProps = {
    name:"john", 
    children: <div>default</div>
}
function MyComp(props:MyCompProps){
    return <div>{props.children}</div>
}

export default MyComp;