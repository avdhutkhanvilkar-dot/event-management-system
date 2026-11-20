import React,{useState} from "react";

function ThemeToggle(){

const [dark,setDark]=useState(false);

const toggleTheme=()=>{

document.body.classList.toggle("dark-mode");

setDark(!dark);

};

return(

<button onClick={toggleTheme}>

{dark ? "☀ Light":"🌙 Dark"}

</button>

);

}

export default ThemeToggle;