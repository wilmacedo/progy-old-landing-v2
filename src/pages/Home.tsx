import Devices from '@assets/devices.png';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Home() {
  const handleSubmitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = (event.target as HTMLFormElement).querySelector(
      'input',
    ) as HTMLInputElement;
    if (!input.value || input.value.length === 0) return;

    // TODO: Send contact via e-mail
  };

  return (
    <>
      <Navbar />

      <div className="mt-8 flex flex-col gap-24 px-4 md:flex-row md:pl-48 md:pr-0">
        <div className="mt-12 flex flex-col gap-6 max-w-full md:max-w-[27rem]">
          <h1 className="text-3xl md:text-[3.75rem] md:leading-[4.5rem] font-semibold">
            Gerenciamento simplificado e completo
          </h1>
          <span className="text-gray-800 text-sm md:text-base">
            Somos especializados em oferecer soluções de planejamento e gestão
            para todos os tipos de empreendedores, ajudando a alcançar o sucesso
            por meio de soluções personalizadas.
          </span>

          <div className="mt-2">
            <form
              className="flex gap-2 flex-col md:flex-row"
              onSubmit={handleSubmitContact}
            >
              <input
                type="email"
                placeholder="seu@email.com"
                className="p-2.5 w-full border border-gray-200 rounded outline-blue-400 duration-200 text-sm hover:bg-gray-200 invalid:border-red-500 invalid:text-red-500 focus:invalid:outline-red-500 focus:invalid:text-red-500"
              />
              <button
                type="submit"
                className="py-2.5 px-4 bg-blue-400 text-white text-sm rounded duration-200 whitespace-nowrap hover:brightness-125"
              >
                Contatar
              </button>
            </form>
            <span className="text-xs text-gray-800">
              Nós nos preocupamos com seus dados em nossa{' '}
              <Link
                to="/privacy-policy"
                className="underline cursor-pointer duration-200 hover:brightness-125"
              >
                política de privacidade
              </Link>
              .
            </span>
          </div>
        </div>

        <div className="mt-2 ml-auto h-auto">
          <img src={Devices} alt="Devices" />
        </div>
      </div>

      <div className="pt-8 flex justify-center w-full h-[5rem] bg-[#F9FAFB]">
        <span className="text-[#475466] text-sm">
          Join 4,000+ companies already growing
        </span>
      </div>
    </>
  );
}
