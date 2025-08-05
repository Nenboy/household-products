import React, { useState } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-semibold text-center text-rose-400">Create Account</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Example@Example.Com"
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Example@Example.Com"
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+123 456 789"
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date Of Birth</label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              👁
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <div className="relative">
            <input
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border px-3 py-2 text-sm"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
            >
              👁
            </span>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500">
          By continuing, you agree to <span className="font-medium underline">Terms of Use</span> and <span className="font-medium underline">Privacy Policy</span>.
        </p>

        <button
          type="submit"
          className="w-full bg-rose-300 text-white py-2 rounded-md font-medium"
        >
          Sign Up
        </button>

        <div className="text-center text-sm text-gray-500 mt-2">
          or sign up with
          <div className="flex justify-center space-x-4 mt-2">
            <button type="button" className="text-xl">📘</button>
            <button type="button" className="text-xl">🟢</button>
          </div>
        </div>

        <p className="text-center text-sm mt-2">
          Already have an account?{' '}
          <a href="#" className="text-rose-400 underline">Log in</a>
        </p>
      </form>
    </div>
  );
}
