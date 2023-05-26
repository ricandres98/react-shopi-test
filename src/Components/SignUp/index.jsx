import React, { useContext, useRef } from "react";
import { ShoppingCartContext } from "../../Context";

const SignUp = (props) => {

	const {
    setAccountInformation,
		setSignOutStatus
	} = useContext(ShoppingCartContext);

	const form = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);

		const userInfo = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password')
		};

		const { name, email, password } = userInfo;

		if(name && email && password) {
			setAccountInformation(userInfo);
			setSignOutStatus(false);
			props.setSignUp(false);
			window.location.pathname = '/';
		}

	}
  return (
    <form 
			ref={form}
			className="flex flex-col justify-center w-80"
			onSubmit={handleSubmit}
		>
      <label htmlFor="name" className="mb-3">
				<span className="block text-sm mb-1">Your name:</span>
        <input 
					type="text" 
					id='name'
					name='name'
					className="border border-slate-400 rounded-lg w-full p-2"
					placeholder="John"/>
      </label>
      <label htmlFor="email" className="mb-3">
				<span className="block text-sm mb-1">Your email:</span>
        <input 
					type="email" 
					id='email'
					name='email'
					className="border border-slate-400 rounded-lg w-full p-2"
					placeholder="jhondoe@mail.com"/>
      </label>
      <label htmlFor="password" className="mb-3">
				<span className="block text-sm mb-1">Your password:</span>
        <input 
					type="text"
					id='password'
					name='password'
					className="border border-slate-400 rounded-lg w-full p-2"
					placeholder="password"/>
      </label>
			<button type="submit" className="w-full bg-black text-white rounded-lg p-3 mb-3">Create</button>
    </form>
  );
};

export { SignUp };
