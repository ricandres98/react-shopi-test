import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bars4Icon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const activeStyle = 'underline underline-offset-4';

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const [openCategoriesMenu, setOpenCategoriesMenu] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const render = () => {
    if(context.signOutStatus) {
      return (
        <>
          <li className='hidden lg:inline-block'>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="text-black/60 hidden lg:inline-block">{context.accountInformation.email}</li>
          <li className='hidden lg:inline-block'>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li className='hidden lg:inline-block'>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li className='hidden lg:inline-block'>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSignOutStatus(true)}
            >
              Sign Out
            </NavLink>
          </li>
        </>
      );
    }
  }

  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 bg-white text-sm font-light">
        <ul className="flex items-center gap-3">
          <li className="">
            <button
              className="lg:hidden"
              onClick={() => setOpenCategoriesMenu(true)}
            >
              <Bars4Icon className="w-6 h-6" />
            </button>
          </li>
          <li className="font-semibold text-lg">
            <NavLink to="/">Shopi</NavLink>
          </li>
          <li className="hidden lg:inline-block">
            <NavLink
              to="/"
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li className="hidden lg:inline-block">
            <NavLink
              to="/clothes"
              onClick={() => context.setSearchByCategory("clothes")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Clothes
            </NavLink>
          </li>
          <li className="hidden lg:inline-block">
            <NavLink
              to="/electronics"
              onClick={() => context.setSearchByCategory("electronics")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
          <li className="hidden lg:inline-block">
            <NavLink
              to="/furnitures"
              onClick={() => context.setSearchByCategory("furnitures")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furnitures
            </NavLink>
          </li>
          <li className="hidden lg:inline-block">
            <NavLink
              to="/toys"
              onClick={() => context.setSearchByCategory("toys")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Toys
            </NavLink>
          </li>
          <li className="hidden lg:inline-block">
            <NavLink
              to="/others"
              onClick={() => context.setSearchByCategory("others")}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          {render()}
          <li className="flex items-center">
            <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
            <div>{context.cartProducts.length}</div>
          </li>
          <li>
            <button className={`${context.signOutStatus && 'hidden'} lg:hidden`} onClick={() => setOpenUserMenu(true)}>
              <UserIcon className="w-6 h-6" />
            </button>
          </li>
        </ul>
      </nav>
      {openCategoriesMenu && (
        <NavbarCategoriesList setOpenCategoriesMenu={setOpenCategoriesMenu} />
      )}
      {!context.signOutStatus && openUserMenu && (
        <NavbarUserList
          setOpenUserMenu={setOpenUserMenu}
          email={context.accountInformation.email}
          setSignOutStatus={context.setSignOutStatus}
        />
      )}
    </>
  );
}

const NavbarCategoriesList = (props) => {
  return (
    <div className='h-screen w-full bg-white fixed top-0 left-0 right-0 bottom-0 z-20 '>
      <ul className=" w-full flex flex-col items-start gap-3 py-6">
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furnitures")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <button 
        className='w-6 h-6 absolute top-2 right-2 '
        onClick={() => props.setOpenCategoriesMenu(false)}
        >
        <XMarkIcon />
      </button>
    </div>
  );
}

const NavbarUserList = (props) => {
  return (
    <div className="h-screen w-full bg-white fixed top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-between">
      <ul className=" w-full flex flex-col items-start gap-3 py-6 ">
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li className="text-xl p-2 px-4">
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => props.setSignOutStatus(true)}
          >
            Sign Out
          </NavLink>
        </li>
      </ul>
        <span className="text-black/60 inline-block text-xl px-4 py-6 justify-self-end">{props.email}</span>
      <button
        className="w-6 h-6 absolute top-2 right-2 "
        onClick={() => props.setOpenUserMenu(false)}
      >
        <XMarkIcon />
      </button>
    </div>
  );
};

export default Navbar;
