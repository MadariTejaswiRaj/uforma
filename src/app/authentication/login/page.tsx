"use client"

import React, { useState } from 'react';
import { login, signup } from './actions';
import Head from 'next/head';

export default function LoginSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
      valid = false;
    }

    if (!isForgotPassword) {
      if (!password) {
        newErrors.password = 'Password is required';
        valid = false;
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append('email', email);
      if (!isForgotPassword) {
        formData.append('password', password);
      }
      try {
        if (isForgotPassword) {
          // Handle forgot password logic here
          console.log('Forgot password request for:', email);
          // You would typically call an API endpoint here to send a password reset email
        } else {
          await (isLogin ? login(formData) : signup(formData));
          console.log(isLogin ? 'Login successful' : 'Signup successful');
        }
      } catch (error) {
        console.error('Action failed:', error);
      }
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-In logic here
    console.log('Google Sign-In clicked');
  };

  const resetForm = () => {
    setIsForgotPassword(false);
    setIsLogin(true);
    setEmail('');
    setPassword('');
    setErrors({ email: '', password: '' });
  };

  return (
    <>
      <Head>
        <title>{isForgotPassword ? 'Forgot Password' : isLogin ? 'Login' : 'Sign Up'} | Uforma</title>
        <meta name="description" content={`Secure ${isForgotPassword ? 'password recovery' : isLogin ? 'login' : 'signup'} page for Your App Name. Access your account safely and easily.`} />
        <meta name="keywords" content="login, sign up, forgot password, account access, secure login" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourapp.com/login" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {isForgotPassword ? 'Forgot Password' : isLogin ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {isForgotPassword ? 'Enter your email to reset your password' : isLogin ? 'Sign in to access your account' : 'Sign up to get started'}
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="email-error"
                  />
                  {errors.email && <p id="email-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.email}</p>}
                </div>
                {!isForgotPassword && (
                  <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-describedby="password-error"
                    />
                    {errors.password && <p id="password-error" className="mt-2 text-xs sm:text-sm text-red-600">{errors.password}</p>}
                  </div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  {isForgotPassword ? 'Reset Password' : isLogin ? 'Sign in' : 'Sign up'}
                </button>
              </div>
            </form>

            {!isForgotPassword && (
              <>
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={handleGoogleSignIn}
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                      <span className="ml-2">Sign {isLogin ? 'in' : 'up'} with Google</span>
                    </button>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                  >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                  </button>
                </div>
              </>
            )}

            <div className="text-center mt-4">
              {!isForgotPassword ? (
                <button
                  type="button"
                  onClick={() => setIsForgotPassword(true)}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                >
                  Forgot your password?
                </button>
              ) : (
                <button
                  type="button"
                  onClick={resetForm}
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
                >
                  Back to login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}