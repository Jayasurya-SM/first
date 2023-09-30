
import './App.css';

let userdata ={
  name : "React",
  imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/2560px-Desktop_computer_clipart_-_Yellow_theme.svg.png",
  age: 0
}

function Truevalue(){
  return(<div>
    <h1>Welcome:{userdata.name}</h1>
    <img src ={userdata.imgurl} alt={'photo of the user: '+ userdata.name} width={"200px"}/>
    <p>The age of the user is {userdata.age}</p>
  </div>

  );
}
function Falsyvalue(){
  return(
    <div>
      <h1>Welcome :user</h1>
      <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt='' width={"150px"}/>
      <p>The age is Unknown</p>
    </div>

  );
}

function App() {
  return (
    <div>
      {userdata.name&&userdata.imgurl&&userdata.age ? <Truevalue/>: <Falsyvalue/>}
    </div>
    
  );
}

export default App;
