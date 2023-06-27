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

      <div
        id="home"
        className="mt-8 flex flex-col gap-8 px-4 md:flex-row md:px-24"
      >
        <div className="flex flex-col gap-6 max-w-full md:max-w-[27rem]">
          <h1 className="text-3xl md:text-[3.75rem] md:leading-[4.5rem] font-semibold">
            Gerenciamento simplificado e completo
          </h1>
          <span className="text-[#475467] text-sm md:text-base">
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
                className="p-2.5 w-full border border-[#E2E4E3] rounded outline-[#3E6BF7] duration-200 text-sm hover:bg-[#E7E9ED] invalid:border-red-500 invalid:text-red-500 focus:invalid:outline-red-500 focus:invalid:text-red-500"
              />
              <button
                type="submit"
                className="py-2.5 px-4 bg-[#3E6BF7] text-white text-sm rounded duration-200 whitespace-nowrap hover:brightness-125"
              >
                Contatar
              </button>
            </form>
            <span className="text-xs text-[#475467]">
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

        <span>ola</span>
      </div>
    </>
  );
}
