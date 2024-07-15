import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../Google/Google';
import { IoEye, IoEyeOffSharp } from 'react-icons/io5';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';
import './Login.css'
import useTitle from '../../UseTitle/UseTitle';

const Login = () => {
    const { passwordReset, loginUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const useEmail = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
        useTitle('login')
    const handelSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        const email = target.email.value;
        const password = target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                target.reset();
                navigate(from, { replace: true });
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
                if (error.message) {
                    toast.error("Please provide this correct password", {
                        position: "top-center"
                    });
                }
            })
    };
    const handelForgetPassword = () => {
        const email = useEmail.current.value;
        if (!email) {
            toast.success('Please provide this correct email', {
                position: "top-center"
            })
        }
        passwordReset(email)
            .then(() => {
                toast.success("Please check your email", {
                    position: "top-center"
                });
            })
    };

    return (
        <div className='mb-5 login-section'>
            <div>
                <p className='text-center text-4xl font-semibold mb-3'>Login Now</p>
                <div className='w-[400px] mx-auto border-solid border-[1px] border-orange-950 p-4 rounded-2xl'>
                    <form onSubmit={handelSubmit}>
                        <div>
                            <label className='block mb-2 ml-10' htmlFor="">Email</label>
                            <input className='outline-none border-solid border-[1px] border-orange-950 w-[300px] ml-8 pl-4 pt-[0.80px] pb-[0.80px] rounded-3xl mb-1' type="email" name="email" id="" ref={useEmail} placeholder='Enter Email' required />
                        </div>
                        <div>
                            <label className='block mb-2 ml-10' htmlFor="">Password</label>
                            <div className='flex border-solid border-[1px] border-orange-950 w-[300px] ml-8 rounded-3xl mb-4'>
                                <input className='outline-none w-[280px] pl-4 pt-[0.80px] pb-[0.80px] mr-2 rounded-3xl' type={show ? "text" : "password"} name="password" id="" placeholder='Enter Password' required />
                                <p onClick={() => setShow(!show)}>{show ? <IoEye className='mr-1 h-6 w-5' /> : <IoEyeOffSharp className='mr-1 h-6 w-5' />}</p>
                            </div>
                            <button className='mb-3 ml-10 hover:underline' onClick={handelForgetPassword}>Forget Password</button>
                        </div>
                        <input className='w-[300px] ml-8 pt-[2px] pb-[2px] rounded-3xl bg-[red] hover:bg-red-500 hover:text-white' type="submit" value="Login" />
                    </form>
                    <p className='text-center mt-2 mb-2'>Or Sign In with</p>
                    <span className='text-center'><Google /></span>
                    <p className='text-center'>Have an account <Link className='text-red-600' to={'/singUp'}>SingUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;