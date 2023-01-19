import React,{useState} from "react";
const App = () => {
  const [name,setName] = useState("");
  const [lastname,setLastname] = useState("");
  const [age ,setAge] = useState("");
  let handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  let handleLastName = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setLastname(e.target.value)
  }
  let handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    
      setAge(e.target.value)
    
    
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleName}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value= {lastname} onChange={handleLastName}/>
      </div>

      <div>
        Idade:
        <input type="text" maxLength={2} value={age} onChange={handleAge}/>
      </div>

      <hr/>

      Olá {name} {lastname}, tudo bem?<br/>
      Você tem {age} anos.
    </div>
  );
}

export default App;