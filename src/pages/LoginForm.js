import React, {useState} from 'react';

function LoginForm({Login,error}) {
   const [details, setDetails] = useState({name:"", email:"", password:""});
   const submitHandler = e => {
       e.preventDefault();

       Login(details);
   }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <h2>Login</h2>
                {(error !=="") ? (<div className="error">{error}</div>): ""}
                <div className="form-group">
                    <label>Name</label>
                    <input onChange={e => setDetails({...details, name:e.target.value})} value={details.name} type="text" name="name" id="name" className="form-control" />
                </div>
                <label>Email</label>
                    <div className="form-group">
                    <input onChange={e => setDetails({...details, email:e.target.value})} value={details.email} type="email" name="email" id="email" className="form-control" />
                </div>
                <label>Password</label>
                    <div className="form-group">
                    <input onChange={e => setDetails({...details, password:e.target.value})} value={details.password} type="password" name="password" id="password" className="form-control"/>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default LoginForm;