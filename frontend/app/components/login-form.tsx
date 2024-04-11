'use client'
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { login } from '../api/auth'
import { useRouter } from 'next/navigation'


export default function LoginForm() {
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isSuccess){
      router.push('/account')
    }
  }, [isSuccess])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(formData);
    console.log(response)
    if (response != null){
      setIsSuccess(true);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-full relative">
          <div className="relative">
            <input
              className="peer p-4 block w-full rounded-lg text-sm placeholder:text-transparent disabled:opacity-50 disabled:pointer-events-none bg-gray-100 text-gray-600                    
                focus:pt-6                      
                focus:pb-2     
                [&:not(:placeholder-shown)]:pt-6                      
                [&:not(:placeholder-shown)]:pb-2                                        
                autofill:pt-6                      
                autofill:pb-2"
              id="username"
              name="username"
              placeholder="username"
              type="text"
              value={formData.username}
              onChange={onChange}
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
              htmlFor="username"
            >
              Username
            </label>
          </div>
        </div>
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
              id="password"
              placeholder="********"
              name="password"
              type="password"
              value={formData.password}
              onChange={onChange}
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
              htmlFor="password"
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
