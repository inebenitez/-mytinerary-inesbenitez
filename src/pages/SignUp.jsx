import { useRef,useEffect,useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
const { read_6_users } = user_actions

export default function SignUp() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  const [reload,setReload] = useState(false)
  const dispatch = useDispatch()
  useEffect(
    ()=>{dispatch(read_6_users())},
    [reload]
  )
  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
        if (photo.current.value) {
          data.photo = photo.current.value
        }
      await axios.post(
        apiUrl + "users/signup", 
        data 
      );
      setReload(!reload)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523496922380-91d5afba98a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')",
      }}
    >
      <div className="min-h-screen text-gray-900 flex justify-center">
        <div className="flex-1 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl text-white font-bold">My Tinerary</h2>
            </div>
          </div>
        </div>
        <div className="max-w-sm m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="mt-12 flex flex-col items-center">
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
                // ref={}
                type="text"
                placeholder="First Name"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                // ref={}
                type="text"
                placeholder="Last Name"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                // ref={}
                type="text"
                placeholder="Photo URL (optional)"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                // ref={}
                type="email"
                placeholder="Email"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                // ref={}
                type="password"
                placeholder="Password"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
              <input
                // ref={}
                type="text"
                placeholder="Country"
                className="max-w-sm px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              />
            </div>

            <div className="m-4 text-xs text-gray-600 text-center">
              <p>By clicking Create account, I agree that I have read</p> and
              acceptedthe
              <a href="#" className="border-b border-gray-500 border-dotted">
                Terms of Use
              </a>
              and
              <a href="#" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </div>
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
  </div>
  );
}
