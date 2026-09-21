
const Login = () => {
    return (
        <div className="bg-indigo-950 p-10">
            <legend className=" text-center text-2xl p-5">Login</legend>

            <fieldset className="fieldset  border-indigo-300 rounded-box w-2/5 mx-auto border px-5 py-10">
  {/* <legend className=" text-center text-2xl p-5">Login</legend> */}

  <label className="label">Email</label>
  <input type="email" className="input border w-full border-indigo-200 bg-indigo-950 " placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input border w-full border-indigo-200 bg-indigo-950 " placeholder="Password" />

  <button className="btn btn-neutral bg-indigo-600 mt-4">Login</button>
</fieldset>
        </div>
    );
};

export default Login;