import React from 'react';


const Input=props=>{
    const { list, setList }=props;

    let task={
        name:"",
        isComplete: false
    }
    const onChange=e=>{
        task.name=e.target.value;
    }
    const onClick=e=>{
        setList([...list, task]) //replaces list with a list containing itself and adds task on at the end
        e.target.value="";
        task="";
    }

    
    return(
        <div className="container w-50 mt-3">
            <input onChange={onChange} type="text" name="task"/>
            <button className="btn btn-primary btn-block mt-1" onClick={onClick}>
                Add Task
            </button>
        </div>

    );
}

export default Input;