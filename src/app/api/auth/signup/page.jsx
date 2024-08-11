"use client";
import React from "react";

const SignUp = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const type = e.target.type.value;
    const password = e.target.password.value;
    const newUser = { name, email, image, type, password };

    // const res = await fetch("http://localhost:3000/api/auth/signup/new-user", {
    //   method: "POST",
    //   body: JSON.stringify(newUser),
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // });
    console.log(type);
  };

  return (
    <div className='bg-gray-900 py-24 min-h-screen'>
      <h6 className='text-center'>Sign Up with Email and Password</h6>
      <div className='mx-auto max-w-md'>
        <form onSubmit={handleRegister}>
          <div className='tex'>
            <label htmlFor='name'>Name: </label> <br />
            <input
              type='text'
              name='name'
              placeholder='your name'
              className='outline-none border-transparent p-3 text-slate-700 w-full'
            />
          </div>
          <div>
            <label htmlFor='email'>Email: </label> <br />
            <input
              type='email'
              name='email'
              placeholder='your email'
              className='outline-none border-transparent p-3 text-slate-700 w-full'
            />
          </div>
          <div>
            <label htmlFor='image'>Image: </label> <br />
            <input
              type='text'
              name='image'
              placeholder='your image link'
              className='outline-none border-transparent p-3 text-slate-700 w-full'
            />
          </div>
          <div>
            <label htmlFor='type'>Type: </label> <br />
            <select name="type" className="text-slate-700">
              <option value='admin'>Admin</option>
              <option value='moderator'>Moderator</option>
              <option value='member'>Member</option>
            </select>
          </div>
          <div>
            <label htmlFor='password'>Password: </label> <br />
            <input
              type='password'
              name='password'
              placeholder='your password'
              className='outline-none border-transparent p-3 text-slate-700 w-full'
            />
          </div>
          <div className='text-center my-6'>
            <button className='w-[30%] mx-auto bg-green-400 rounded-full h-12'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
