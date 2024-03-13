import React, { useState, FormEvent } from 'react'


export default function LoginForm() {
  async function onSubmit() {

  }
  return (
    <form>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-full">
          <div className="relative">
            <input
              className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none bg-gray-100 text-gray-600                    
                focus:pt-6                      
                focus:pb-2                      
                [&:not(:placeholder-shown)]:pt-6                      
                [&:not(:placeholder-shown)]:pb-2                      
                autofill:pt-6                      
                autofill:pb-2"
              id="hero-login-form-floating-input-username"
              placeholder="username"
              type="text"
            />
            <label
              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-600 peer-disabled:opacity-50 
                peer-disabled:pointer-events-none                        
                peer-focus:text-xs                        
                peer-focus:-translate-y-1.5                        
                peer-focus:text-gray-600                        
                peer-[:not(:placeholder-shown)]:text-xs                        
                peer-[:not(:placeholder-shown)]:-translate-y-1.5                        
                peer-[:not(:placeholder-shown)]:text-gray-600"
              htmlFor="hero-login-form-floating-input-username"
            >
              Username
            </label>
          </div>
        </div>
        <div className="col-span-full">
          <div className="relative">
            <input
              className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-gray-300 focus:ring-gray-300 disabled:opacity-50 disabled:pointer-events-none bg-gray-100 border-gray-700 text-gray-600 focus:ring-gray-600                      focus:pt-6                      
                focus:pb-2                      
                [&:not(:placeholder-shown)]:pt-6                      
                [&:not(:placeholder-shown)]:pb-2                      
                autofill:pt-6                      
                autofill:pb-2"
              id="hero-login-form-floating-input-password"
              placeholder="********"
              type="password"
            />
            <label
              className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-gray-600 peer-disabled:opacity-50 
                peer-disabled:pointer-events-none                        
                peer-focus:text-xs                        
                peer-focus:-translate-y-1.5                        
                peer-focus:text-gray-600                        
                peer-[:not(:placeholder-shown)]:text-xs                        
                peer-[:not(:placeholder-shown)]:-translate-y-1.5                        
                peer-[:not(:placeholder-shown)]:text-gray-600"
              htmlFor="hero-login-form-floating-input-password"
            >
              Password
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-4">
        <button
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          type="submit"
        >
          Log in
        </button>

        <a
          className="button w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-transparent text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
          href="/enroll"
        >
          Enroll
        </a>
      </div>
    </form>
  );
}
