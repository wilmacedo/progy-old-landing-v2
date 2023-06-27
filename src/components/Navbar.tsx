import { ReactComponent as Logo } from '@assets/logo.svg';
import { Fragment, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const config = {
  links: [
    {
      name: 'Início',
      path: '/',
    },
    {
      name: 'Sobre',
      path: '/about',
    },
    {
      name: 'Acessar',
      path: 'https://app.progy.com.br',
      mobile: true,
    },
  ],
};

export default function Navbar() {
  const location = useLocation();
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <div className="px-12 py-5 w-screen flex justify-between border border-[#F6F7F9]">
        <div className="max-w-screen-xl flex items-center">
          <div className="flex gap-2 h-fit items-center">
            <Logo className="w-[2rem] h-[auto]" />
            <h1 className="text-xl font-bold tracking-widest">PROGY</h1>
          </div>

          <div className="hidden md:ml-6 md:flex md:gap-6">
            {config.links.map(({ name, path, mobile }, index) =>
              !mobile ? (
                <Link to={path} key={String(name + index)}>
                  <button className="font-semibold text-sm text-[#475467] cursor-pointer duration-200 hover:text-black">
                    {name}
                  </button>
                </Link>
              ) : (
                <Fragment key={index} />
              ),
            )}
          </div>
        </div>

        <a className="hidden md:block" href="https://app.progy.com.br">
          <button
            type="button"
            className="py-2 px-4 text-sm bg-[#3E6BF7] rounded-md text-white duration-200 hover:brightness-125"
          >
            Acessar
          </button>
        </a>

        <button
          type="button"
          className="p-2 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={toggleMenu}
        >
          <IoMenu className="fill-black text-2xl" />
        </button>
      </div>

      <div className={`m-2 ${toggleMobileMenu ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col p-4 border border-gray-100 rounded-e-lg bg-gray-50">
          {config.links.map(({ name, path }, index) => (
            <li key={String(name + index)}>
              <Link
                to={path}
                className={`block py-2 pl-3 pr-4 rounded cursor-pointer ${
                  isCurrentPath(path)
                    ? 'bg-[#3E6BF7] text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
