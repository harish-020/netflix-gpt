// import React from 'react'
// import Header from './Header'

// const Login = () => {
//   return (
//     <div className='absolute'>
//         <Header/ >
//         <div>
//           <img 
//           src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" 
//           alt="img" />
//         </div>
//         <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white'>
//           <h1 className='font-bold text-3xl'>Sign In</h1>
//           <input type="text" placeholder='Email Address' className='p-2 m-2'/>
//           <input type="password" placeholder='Password' className='p-2 m-2'/>
//           <button className='p-4 m-4'>Sign In</button>
//         </form>
//     </div>   
//   )
// }
// export default Login
import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm)
  }

  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="img"
        />
      </div>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <form className="w-3/12 p-12 bg-black bg-opacity-80 text-white rounded-lg shadow-lg">
          <h1 className="font-bold text-3xl text-center mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && (
            <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-800 rounded" />
          )
          }
          <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-800 rounded" />
          <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-800 rounded" />
          
          <button className="p-4 m-4 w-full bg-red-600 hover:bg-red-700 rounded font-semibold">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p onClick={toggleSignInForm}>{isSignInForm ? "Are you new to netfilx? Sign up now":"Already registered Sign In now"}</p>
        </form>
      </div>
    </div>
  )
}
export default Login