import React from 'react';
import avatar from '../assets/avatar.png';
import {Link} from 'react-router-dom';
import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { passwordValidate} from '../helpers/validate';

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: 'admin@12'
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder={false}/>
  
    <div className='flex justify-center items-center h-screen'>
      <div className={styles.glass}>

        <div className="title flex flex-col items-center">
          <h4 className='text-5xl font-bold'>Hello Again!</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Explore More by connecting with us.
          </span>
        </div>

        <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
                <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
                <input  {...formik.getFieldProps('password')}className={styles.textbox} type="password" placeholder='Password' />
                <button className={styles.btn} type='submit'>Sign in</button>
            </div>

            <div className="text-center py-4">
              <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/recover">Recover now</Link></span>
            </div>

        </form>

      </div>
    </div>
  </div>
  )
}

export default Password