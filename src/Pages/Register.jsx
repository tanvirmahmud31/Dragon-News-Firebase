
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use, useState } from 'react';

const Register = () => {
    const {createUser,setUser} = use(AuthContext);
    const [nameerror,setNameError]=useState("");
    const handleRegisterForm =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        if(name.length <6){
            setNameError("name should be more than 6 ch")
            return;
        } else{
            setNameError("");
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password=e.target.password.value;
        //console.log(name,photo,email,password)

        createUser(email,password)
        .then(result =>{
           const user=result.user;
           setUser(user);
        
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className='flex justify-center items-center mt-5'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <form onSubmit={handleRegisterForm} className="card-body py-5">
                    <h1 className='font-bold text-2xl'>Register your account</h1>
                    <fieldset className="fieldset my-4 space-y-2">
                        <label className="label">Your Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter your name" required/>
                        {nameerror && <p className='text-red-900'>{nameerror}</p>}
                        <label className="label">Photo URL</label>
                        <input type="password" name='photo' className="input" placeholder="Enter your password" />

                        <label className="label">Email</label>
                       
                     <input type="email" name='email' className="input" placeholder="Enter your email address" required />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p>Allready Have An Account ? <Link to={'/auth/login'} className='text-secondary'> Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;