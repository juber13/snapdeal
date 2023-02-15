import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";


function getUserData(){
  const userData = localStorage.getItem('userData');
  if(userData) return JSON.parse(localStorage.getItem('userData'));
  else return [];
}


function Login() {
  const navigate = useNavigate();

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [userData , setUserData] = useState(getUserData());  


  function handleLogin(e){
    e.preventDefault();
      if(userData.email == email && userData.password === password){
        localStorage.setItem("authenticated" , true);
        navigate('/');
      }else{
        alert("U are not register with us Please register First");;
        return;
      }
  }
 
 

  return (
     <div className="wrapper login-wrapper">

     <div className="container card">
     <div className="heading text-center">
        <h1  className="text-danger"style={{fontFamily :"Anton" , letterSpacing : "1px"}}>Login</h1>
     </div>
     <div className="login-container container my-5  row">
       <div className="col-md-12 pt-3">
         <h5>Login</h5>
         <form className="my-3" onSubmit={handleLogin} autoComplete="off">
            <div className="form-group">
                <input value={email} type="email"  required placeholder="Email" className="form-control"   onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <input value={password} type="password"  required placeholder="Password" className="form-control"  onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Login</button>
            </div>
            </form>
            <span role="button" className="text-primary cursor-pointer" onClick={() =>  navigate('/register')}>Sign Up Here..</span>

       </div>
     </div>
    </div>
  </div>
  );
}

export default Login;