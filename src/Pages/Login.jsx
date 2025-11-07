
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use, useState } from 'react';

const Login = () => {
    const { signIN } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const [error,setError]= useState("")

    const handleLogIn = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        //console.log(email, password)

        signIN(email, password)
            .then((result) => {
                // Signed in 
                //const user = result.user;
                console.log(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });

    }
    return (
        <div className='flex justify-center items-center mt-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form onSubmit={handleLogIn} className="card-body py-5">
                    <h1 className='font-bold text-2xl'>Login your account</h1>
                    <fieldset className="fieldset my-4">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        {error && <p className='text-red-700'>{error}</p>}
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'> Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;