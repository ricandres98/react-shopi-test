import { useContext, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { UpdateInfoField } from '../../Components/UpdateInfoField';

function MyAccount() {
  const context = useContext(ShoppingCartContext);

  const {
    name,
    email,
    password
  } = context.accountInformation;

  const [state, setState] = useState({
    editingName: false,
    editingEmail: false,
    editingPassword: false,
  });

  const setName = (value) => {
    context.setAccountInformation({
      ...context.accountInformation,
      name: value
    });
  }

  const setEmail = (value) => {
    context.setAccountInformation({
      ...context.accountInformation,
      email: value
    });
  }
  const setPassword = (value) => {
    context.setAccountInformation({
      ...context.accountInformation,
      password: value
    });
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">My Account</h1>
      </div>
      <div className='flex flex-col w-80 gap-4'>
        <div className='text-lg flex justify-between w-full'>
          <span className='font-bold'>Name: </span>
          {state.editingName ? (
            <UpdateInfoField
              value={name}
              updateValue={setName}
              closeField={() => setState({ ...state, editingName: false })}
            />
          ) : (
            <div className='inline-flex justify-between w-full'>
              <span className='px-2 text-slate-800'>{name}</span>
              <button onClick={() => setState({ ...state, editingName: true })}>
                <PencilSquareIcon className="w-6 h-6" alt="edit" />
              </button>
            </div>
          )}
        </div>

        <div className='text-lg flex justify-between w-full'>
          <span className='font-bold'>Email: </span>
          {state.editingEmail ? (
            <UpdateInfoField
              value={email}
              updateValue={setEmail}
              closeField={() => setState({ ...state, editingEmail: false })}
              type="email"
            />
          ) : (
            <div className='inline-flex justify-between w-full'>
              <span className='px-2 text-slate-800'>{email}</span>
              <button
                onClick={() => setState({ ...state, editingEmail: true })}
              >
                <PencilSquareIcon className="w-6 h-6" alt="edit" />
              </button>
            </div>
          )}
        </div>

        <div className='text-lg flex justify-between w-full'>
          <span className='font-bold'>Password: </span>
          {state.editingPassword ? (
            <UpdateInfoField
              value={password}
              updateValue={setPassword}
              closeField={() => setState({ ...state, editingPassword: false })}
            />
          ) : (
            <div className='inline-flex justify-between w-full'>
              <span className='px-2 text-slate-800'>{password}</span>
              <button
                onClick={() => setState({ ...state, editingPassword: true })}
              >
                <PencilSquareIcon className="w-6 h-6" alt="edit" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount