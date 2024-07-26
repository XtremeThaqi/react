export default function Login() {
  return (
    <>
        <div className="bg-white p-[25px] rounded-md w-[350px] shadow">
            <h2 className="mb-5 text-[30px] text-gray-700 text-center">Login</h2>
            <form action="#" method="post">
                <div className="mb-5">
                    <label for="username" className="block font-[16px] mb-[5px]">Username:</label>
                    <input className="w-full p-[5px] text-[15px] rounded-[5px] border border-solid outline-0" type="text" id="username" name="username" required/>
                </div>
                <div className="mb-2">
                    <label for="password">Password:</label>
                    <input className="w-full p-[5px] text-[15px] rounded-[5px] border border-solid outline-0"  type="password" id="password" name="password" required/>
                </div>
                <div className="flex justify-end items-center mb-4">
                    <a href="#" className="text-[13px] text-end text-blue-500">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full p-[7px] bg-blue-600 text-[15px] text-white cursor-pointer rounded-[5px] transition-all duration-300 ease-linear">Login</button>
            </form>
        </div>
    </>
  )
}
