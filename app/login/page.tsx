"use client";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Logging in with:", { phoneNumber, password });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Tizimga kirish
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Telefon raqamingiz va parolingiz bilan kiring.
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Telefon raqamingiz
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="010 6534 2345"
              />
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Parolingiz
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parolingiz"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7 1.274 4.057-2.515 7-7 7-4.478 0-8.268-2.943-9.542-7z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <Link href={"/"}>
              <button
                type="submit"
                className="bg-primary-variant  hover:bg-primary  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Kirish
              </button>
            </Link>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Akkountingiz yo'qmi?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Ro'yxatdan o'ting!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
