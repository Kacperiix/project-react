import React from "react"

const List = () =>{
const list = [1,2,3,4,5,6,7,8]

const changeList = (list) => {
    const tmp = list.map((x)=> x + 2)
    return tmp 
}
    return <div>{changeList(list).map((x)=> {return x + ", "})}</div>
}

export default List