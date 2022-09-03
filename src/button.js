import React from "react";

const button = ({name, link}) =>{
    return <a href={link} target="_blank"><button className="button">{name}</button></a>
}

export default button