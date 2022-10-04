import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';
import {useState} from 'react';


function App() {
  const [name,setName] = useState("Şeyma");
  const [age, setAge] = useState(23);
 const [friends, setFriends] = useState(["Feyza" , "Sudenur"]);
 const [address, setAddress] = useState({title: 'İstanbul' , zip:345})
  return (
 <>


 <h1> Merhaba {name}</h1>
 <button onClick={() => setName("Sudenur")}>Click</button>
 <h2> {age} </h2>
 <button onMouseEnter={() => setAge(24)} > click age</button>
<br/>
<br/>


<h2>Friend</h2>
 {
  friends.map((friend, index ) => (<div key={index}>{friend}  </div>))}
  <br/>
   
<button onClick={() => setFriends([...friends,'Beyza'])}>Add New Friend</button>

<br/>
<br/>

<h2>Adres</h2>
<div>{address.title} {address.zip}</div>
<button onClick={() => setAddress({...address,title: 'Ankara'})}>Change Adress</button>

 </>
  );
}

export default App;
