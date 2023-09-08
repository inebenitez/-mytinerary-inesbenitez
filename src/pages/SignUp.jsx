import { useRef } from "react";
import { Link as Anchor } from "react-router-dom";

export default function Register() {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const countryRef = useRef();
  const photoRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSignUp() {
    let data = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      country: countryRef.current.value,
      photo: photoRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center">
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          className="m-10 xl:m-10 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('')",
          }}
        >
          {" "}
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold">My Tinerary</h2>
          </div>
        </div>
      </div>{" "}
      <div className="max-w-screen-xl m-0 sm:m-8 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="mt-20 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-bold">Create Account</h1>
          <div className="my-6 border-b text-center">
            <div className="text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Already have an account?
              <Anchor to="/auth/signin" className="ml-2 text-blue-500">
                Sign in
              </Anchor>
            </div>
          </div>
          <div className="w-full flex-1 mt-4">
            <div className="flex flex-col gap-2">
              <input
                ref={nameRef}
                type="text"
                placeholder="First Name"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                ref={lastNameRef}
                type="text"
                placeholder="Last Name"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                ref={photoRef}
                type="text"
                placeholder="Photo URL (optional)"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                ref={passwordRef}
                type="password"
                placeholder="Password"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                ref={countryRef}
                type="text"
                placeholder="Country"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>

            <p className="m-4 text-xs text-gray-600 text-center">
              <p>By clicking Create account, I agree that I have read</p> and
              acceptedthe
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Use
              </a>
              and
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p>
            <div>
              <div className="flex justify-end">
                <button
                  onClick={handleSignUp}
                  className="max-w-sm px-6 py-2 mb-2 rounded-lg font-medium bg-indigo-500 text-gray-100 text-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
