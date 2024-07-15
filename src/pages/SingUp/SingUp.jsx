import { useContext, useState } from 'react';
import { IoEye, IoEyeOffSharp } from 'react-icons/io5';
import Google from '../Google/Google';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import './SingUp.css'
import useTitle from '../../UseTitle/UseTitle';

const SingUp = () => {
    const { createUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
       useTitle('SingUp')
    const handelSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = target.name.value;
        const photo = target.photo.value;
        const email = target.email.value;
        const password = target.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                profile(loggedUser,name,photo);
                navigate('/');
                console.log(loggedUser);
            })
            .catch((error) => {
                console.log(error.message);
            })
    };
    const profile = (user, name, photo) => {
        updateProfile(user,{
            displayName:name,
            photoURL:photo
        })
    };
    return (
        <div className='mb-5 singup-section '>
            <div>
                <p className='text-center text-4xl font-semibold mb-3'>Sing Up Now</p>
                <div className='w-[400px] mx-auto border-solid border-[1px] border-orange-950 p-4 rounded-2xl'>
                    <form onSubmit={handelSubmit}>
                        <div>
                            <label className='block mb-2 ml-10 ' htmlFor="">Name</label>
                            <input className='outline-none border-solid border-[1px] border-orange-950 w-[300px] ml-8 pl-4 pt-[0.80px] pb-[0.80px] rounded-3xl mb-1' type="text" name="name" id="" placeholder='Enter Name' required />
                        </div>
                        <div>
                            <label className='block mb-2 ml-10 ' htmlFor="">Photo</label>
                            <input className='outline-none border-solid border-[1px] border-orange-950 w-[300px] ml-8 pl-4 pt-[0.80px] pb-[0.80px] rounded-3xl mb-1' type="text" name="photo" id="" placeholder='Photo Url' required />
                        </div>
                        <div>
                            <label className='block mb-2 ml-10 ' htmlFor="">Email</label>
                            <input className='outline-none border-solid border-[1px] border-orange-950 w-[300px] ml-8 pl-4 pt-[0.80px] pb-[0.80px] rounded-3xl mb-1' type="email" name="email" id="" placeholder='Enter Email' required />
                        </div>
                        <div>
                            <label className='block mb-2 ml-10 ' htmlFor="">Password</label>
                            <div className='flex border-solid border-[1px] border-orange-950 w-[300px] ml-8 rounded-3xl mb-4 bg-white'>
                                <input className='outline-none w-[280px] pl-4 pt-[0.80px] pb-[0.80px] mr-2 rounded-3xl' type={show ? "text" : "password"} name="password" id="" placeholder='Enter Password' required />
                                <p onClick={() => setShow(!show)}>{show ? <IoEye className='mr-1 h-6 w-5' /> : <IoEyeOffSharp className='mr-1 h-6 w-5' />}</p>
                            </div>
                        </div>
                        <input className='w-[300px] ml-8 pt-[2px] pb-[2px] rounded-3xl bg-[red] hover:bg-red-500 hover:text-white' type="submit" value="SingUp" />
                    </form>
                    <p className='text-center mt-2 mb-2'>Or Sign In with</p>
                    <span className='text-center'><Google /></span>
                    <p className='text-center'>Already have an account <Link className='text-red-600' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SingUp;