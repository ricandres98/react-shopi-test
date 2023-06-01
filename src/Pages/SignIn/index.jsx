import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import { SignUp } from "../../Components/SignUp";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();

	const { 
			signOutStatus,
      setSignOutStatus,
      accountInformation,
      setAccountInformation,
	 } = useContext(ShoppingCartContext);

	const handleSignUp = ()=> {
		 setSignUp(true);
  }

	const handleLogIn = () => {
    if(isAccountSaved()) {
      setSignOutStatus(false)
      navigate('/', {replace: true})
    }
	}

  const isAccountSaved = () => {
    return !!accountInformation.email;
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Welcome</h1>
      </div>
      {signUp ? (
        <SignUp 
					setSignUp={setSignUp}
				/>
      ) : (
        <section className="flex flex-col justify-center w-80">
          <div>
            <p className="text-lg font-light mb-2">
              Email: <span className="font-semibold">{accountInformation.email}</span>
            </p>
            <p className="text-lg font-light mb-3">
              Password: <span className="font-semibold">{accountInformation.password}</span>
            </p>
          </div>
          <button 
						onClick={handleLogIn}
						className={`w-full rounded-lg p-3 mb-3 text-white ${isAccountSaved() ? 'bg-black ' :'bg-gray-400'}`}>
            Log in
          </button>
          <Link className="text-sm underline text-center mb-6">
            Forgot my password
          </Link>
          <button 
						onClick={handleSignUp}
						className={`w-full  rounded-lg p-3 mb-3 border bg-white  ${isAccountSaved() ? 'border-slate-400 text-slate-400' : 'text-black border-black' }`}>
            Sign up
          </button>
        </section>
      )}
    </Layout>
  );
}

export default SignIn;
