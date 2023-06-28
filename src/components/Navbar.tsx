import { ReactComponent as Logo } from '@assets/logo.svg';
import { ct } from '@utils/style';
import { useState } from 'react';
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
    <nav
      className={ct(
        'px-4 py-5 border-b-[1px] border-gray-200 duration-500',
        'md:px-24',
        toggleMobileMenu ? 'h-[210px]' : 'h-[81px]',
      )}
    >
      <div>
        <div className="flex items-center gap-6">
          <div className="flex gap-2 items-center">
            <Logo className="w-[2rem] h-[auto]" />
            <h1 className="text-xl font-bold tracking-widest">PROGY</h1>
          </div>

          <div className={ct('hidden gap-6', 'md:flex')}>
            {config.links.map(
              ({ name, path, mobile }, index) =>
                !mobile && (
                  <Link to={path} key={String(name + index)}>
                    <button className="font-semibold text-sm text-gray-800 cursor-pointer duration-200 hover:text-black">
                      {name}
                    </button>
                  </Link>
                ),
            )}
          </div>

          <Link
            className={ct('hidden ml-auto', 'md:block')}
            to="https://app.progy.com.br"
          >
            <button
              type="button"
              className={ct(
                'py-2 px-4 text-sm bg-blue-400 rounded-md text-white duration-200',
                'hover:brightness-125',
              )}
            >
              Acessar
            </button>
          </Link>

          <button
            type="button"
            className={ct(
              'ml-auto p-2 rounded-lg',
              'md:hidden',
              'hover:bg-gray-200',
              'focus:outline-none focus:ring-2 focus:ring-gray-300',
            )}
            onClick={toggleMenu}
          >
            <IoMenu className="fill-black text-2xl" />
          </button>
        </div>

        <div
          className={ct(
            'my-2 duration-200',
            'md:hidden',
            toggleMobileMenu
              ? 'visible animate-navbar-in'
              : 'animate-navbar-out invisible',
          )}
        >
          <ul className="flex flex-col py-4">
            {config.links.map(({ name, path }, index) => (
              <li key={String(name + index)}>
                <Link
                  to={path}
                  className={ct(
                    'block py-2 pl-3 rounded cursor-pointer',
                    isCurrentPath(path)
                      ? 'bg-blue-400 text-white'
                      : 'text-gray-900',
                  )}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
