import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to Location Panel
        </h2>
        <h1 className="text-1xl font-bold text-center mb-6 bg-red-500 text-white">Please login with your username and password</h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-800 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
