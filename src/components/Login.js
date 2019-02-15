import React from 'react';
import {
    Link,
    Route,
    Switch,
} from 'react-router-dom';

function Login(props) {
    console.log('login props', props);
    
    return (
        <div className="route-1">
            <h2>Login</h2>

            <form>
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="password" />
                <button onClick={(e) => {
                    e.preventDefault();

                    setTimeout(() => {
                        // redirect the person to route /2 (if the credentials are right)
                        props.history.push('/2');
                        // show an error message if the credentials are wrong
                    }, 1000);
                }}>
                    Log In
                </button>

                {/* This won't work: */}
                {/* <Link to="/2">
                </Link> */}
            </form>

            <Switch>
                <Route
                    path={props.match.path + '/foo'}
                    render={(props) => {
                        console.log('sub-route props', props);
                        
                        return <p>Forgot password?</p>;
                    }} />
                <Route
                    path={props.match.path + '/bar'}
                    render={() => <p>Register for an account</p>} />
            </Switch>
        </div>
    );
}

export default Login;
