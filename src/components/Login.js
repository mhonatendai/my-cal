import React from 'react';
import { useNavigate } from 'react-router-dom';




function Login() {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/home');
    };

    return (

        <div className="container">
            <h1 className="text-center">Calender, To-do!</h1>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <form id="registrationForm" action="">
                                    <div className="form-group" style={{padding: '10px'}}>
                                        <input type="email"
                                               className="form-control"
                                               id="email"
                                               placeholder="Email or Username" required/>
                                    </div>
                                    <div className="form-group" style={{padding: '10px'}}>
                                        <input type="password"
                                               className="form-control"
                                               id="password"
                                               placeholder="Password"
                                               required/>
                                    </div>
                                    <div className="form-group" style={{display: 'flex', justifyContent:'center', alignItems:'center', padding: '10px'}}>
                                        <button onClick={navigateToHome} className="btn btn-primary" style={{ width: '50%', maxWidth: '200px', margin: 'auto' }}>
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <div className="form-group" style={{display: 'flex', justifyContent:'space-between', alignItems:'center', padding: '10px'}}>
                                    <p>Not registered?</p>
                                    <p><a href="https://www.google.com">Create an account</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;