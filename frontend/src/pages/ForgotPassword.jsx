import React, { useState } from 'react';
import axios from 'axios';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/forgot-password', { email });
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      setError(error.response.data.error || 'An unexpected error occurred');
      setMessage('');
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-4 md:space-y-6 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Forgot your password?
        </h1>
        {message && <p className="text-green-500 text-xs italic mb-4">{message}</p>}
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <form className="space-y-4 md:space-y-6" onSubmit={handleForgotPassword}>
          <FormInput
            label="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
            required
          />
          <FormButton text="Send reset link" />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Remembered your password?{' '}
            <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;