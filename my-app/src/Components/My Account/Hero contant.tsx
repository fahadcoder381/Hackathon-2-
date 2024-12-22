import React from 'react';

const AccountHero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-14 mb-10 px-4 sm:px-6 lg:px-8">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row overflow-hidden w-full max-w-4xl rounded-lg bg-white shadow-md">

        {/* Log In Section */}
        <div className="flex-1 px-6 sm:px-8 py-8 border-b lg:border-r lg:border-b-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-start">Log In</h2>
          <form className="mx-auto max-w-sm">
            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                placeholder=""
                className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder=""
                className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 h-4 w-4 border-gray-300 rounded focus:ring-blue-400"
                />
                <label htmlFor="remember" className="text-gray-700">
                  Remember me
                </label>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Log In Button */}
              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-10 text-black rounded-xl border border-black transition duration-200 hover:bg-black hover:text-white"
              >
                Log In
              </button>
              <p className="text-sm text-black mt-3 sm:mt-0 hover:underline cursor-pointer">
                Lost Your Password?
              </p>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div className="flex-1 px-6 sm:px-8 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-start">Register</h2>
          <form className="mx-auto max-w-sm">
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-full py-3 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {/* Privacy Notice */}
            <p className="text-gray-600 text-sm mb-6">
              A link to set a new password will be sent to your email address.
              <br />
              <br />
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our{' '}
              <span className="font-semibold">privacy policy</span>.
            </p>
            {/* Register Button */}
            <button
              className="w-full sm:w-auto px-10 py-3 rounded-xl border border-black hover:bg-black hover:text-white transition duration-200"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountHero;
