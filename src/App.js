
import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [rig, setrig] = useState([]);
  const inp = useRef();
  const hdn = () => {
    const t = inp.current.value;
    const no = { completed: false, t };
    setrig([...rig, no]);
    console.log(t);
  };
  const hd = (index) => {
    const nhd=[...rig]
    nhd[index].completed=!nhd[index].completed
    setrig(nhd)
  };
  console.log(rig)
  const dels=(index)=>{
const nhd=[...rig]
nhd.splice(index,1)
setrig(nhd)
  }
  return (
    <>
      <div className="all">
        <div className="app">
          <h1>todo list</h1>
        </div>
        <div className="il">
          <ul>
          {rig.map((item, index) => {
              return (
                <div>
                <h1 onClick={() => hd(index)} className={item.completed ?"g":""} key={index}>
                  {item.t}
                </h1>
                <button className="but">
                  <span onClick={()=>dels(index)}>📌</span>
                  </button>
                  </div>
              );
            })}
              

          </ul>
        </div>

        <div className="input">
          <input ref={inp} placeholder="Enter task..." />
          <button onClick={hdn}>Add</button>
        </div>
      </div>
    </>
  );
}

export default App;
