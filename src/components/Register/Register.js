import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';
import useTitle from '../../Hooks/UseTitle';

const Register = () => {
    useTitle('Register')
    const [error, setError] = useState('');
    const { createUser, updateUser, googleSignIn } = useContext(authContext);

    const handleSignUpUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photourl, email, password)
        createUser(email, password)
            .then(result => {
                toast.success('successfully registerd');
                form.reset();
                updateUser(name,photourl)
                .then((user) => {
                  console.log(user)

                  
                  }).catch((error) => {
                   console.log(error)
                  });

                toast.success('Registerd Successfull')
            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })
    }

    const handleGoogleSignin = () => {
        googleSignIn()
            .then(result => {
                toast.success('Registerd Successfull')
            })
            .then(error => {
                setError(error.message);
            })
    }



    return (
        <div className='lg:grid grid-cols-3 gap-5 m-12'>
            <div></div>
            <div>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-gray-100 border">
                    <h1 className="text-2xl font-bold text-center text-black">Sign Up</h1>
                    <form onSubmit={handleSignUpUser} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="fullName" className="block dark:text-gray-400">Full Name</label>
                            <input type="text" name="name" id="fullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="photourl" className="block dark:text-gray-400">Photo Url</label>
                            <input type="text" name="photourl" id="photourl" placeholder="Photo url" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                            <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-700 text-black focus:border-violet-400" required />
                        </div>
                        <p className="text-red-400">{error}</p>
                        <button className="block w-full p-3 text-center rounded-sm text-black border">Sign up</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm dark:text-gray-400">Sign up  with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handleGoogleSignin} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-black">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                        <Link rel="noopener noreferrer" to="/login" className="underline text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Register;