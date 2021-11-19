/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  const [active, setActive] = useState(false);
  const activeSide =
    'bg-gray-800 h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2';
  const hiddenSide =
    'bg-gray-800 h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2 -translate-x-60';
  const activeButton =
    'absolute w-10 h-10 bg-yellow-400 top-1 left-1 cursor-pointer transition-all transform duration-700 flex items-center justify-center';
  const normalButton =
    'absolute w-10 h-10 bg-yellow-400 top-1 cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-60';
  return (
    <div className="bg-gray-50 max-w-lg drop-shadow-2xl border-l-2 border-r-2 border-gray-500">
      <Head>
        <title>Shop with Lari</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="w-screen flex transform relative transition-all duration-1000 z-10">
        <div className={active ? activeSide : hiddenSide}>
          <div className="flex flex-col">
            <a className="p-4 font-bold to" href="#services">
              Serviços
            </a>
            <a className="p-4 font-bold top" href="#why-europe">
              Porque comprar na Europa
            </a>
            <a className="p-4 font-bold" href="#does-it-worth">
              Vale mesmo a pena?
            </a>
            <a className="p-4 font-bold" href="#redirecting">
              Redirecionamento de Compras
            </a>
            <a className="p-4 font-bold" href="#contact">
              Fale comigo
            </a>
          </div>
        </div>
      </div>
      <div
        className={active ? normalButton : activeButton}
        onClick={() => setActive(!active)}
      >
        {' '}
        &#9776;
      </div>

      <header className="justify-center items-center flex min-w-full p-1 h-60 text-center header">
        <div>
          <h1 className="fade-in-1s text-9xl text-center font-extrabold text-yellow-400 text-opacity-90 ">
            Lari
          </h1>
          <h2 className="fade-in-4s text-2xl font-bold text-white fade-in">
            personal shopper
          </h2>
        </div>
      </header>

      <main className="flex flex-col items-center">
        <div className="min-w-full">
          <div className="h-full flex justify-center pb-5 w-full px-8">
            <img
              src="/img/lari-perfil.jpg"
              alt="perfil lari"
              className="w-3/4 fade-in-4s drop-shadow-2xl shadow-2xl rounded-full mt-14 border-2 border-yellow-400 border-opacity-40 border-dotted"
            />
          </div>

          <div className="min-w-full flex justify-center">
            <img
              src="/img/down-arrow.svg"
              alt="arrow down"
              width="50"
              height="50"
              className="animate-bounce"
            />
          </div>
        </div>

        <div className="text-center text-xl px-6 font-semibold text-white bg-purple-700 pt-2">
          <p className="my-8">
            Olá, sou a Larissa! Nascida e criada na terrinha das capivaras
            (Curitiba!), Canadense naturalizada e morando atualmente na Espanha!
          </p>
          <p className="my-8">
            Minha missão é fazer chegar até você produtos com os quais você
            sempre sonhou, pelo valor justo que eles valem.
          </p>
          <p className="my-8">
            Te auxiliarei a fazer compras inteligentes, valorizando seu dinheiro
            sem abrir mão de produtos originais e de qualidade. Sou a ponte
            entre as melhores lojas da Europa e você!
          </p>
          <p className="my-8">
            Aqui você encontrará a descrição e valores dos meus serviços. Se
            ainda assim tiver alguma dúvida, me chama!
          </p>
        </div>

        <div className="min-w-full">
          <h2
            id="services"
            className="text-5xl font-bold text-purple-700 m-8 text-center"
          >
            Serviços
          </h2>
          <ul className="text-purple-700 text-xl font-bold px-4">
            <li className="pb-8">
              <span className="pr-3">👜</span>Redirecionamento de Compras
            </li>
            <li className="pb-8">
              <span className="pr-3">👜</span>Assistência em Compras Online
            </li>
            <li className="pb-8">
              <span className="pr-3">👜</span>Grupos de Compras
            </li>
            <li className="pb-8">
              <span className="pr-3">👜</span>Personal Shopper
            </li>
          </ul>
        </div>
        <div className="bg-purple-700 justify-center">
          <h2
            id="why-europe"
            className="text-5xl font-bold m-8 text-center text-white pb-5"
          >
            Porque comprar na Europa <span className="text-pink-400">?</span>
          </h2>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center pb-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Ter acesso a uma grande variedade de produtos que não são
              disponibilizados para venda no Brasil!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Poder comprar do conforto da sua casa, mas como se estivesse
              morando na Europa!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Pagar o mesmo preço (justo) que os Europeus pagam!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Muitas lojas oferecem frete grátis para entrega dentro da União
              Européia!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Acesso a outlets, promoções e liquidações, o ano todo!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Acesso a diversas lojas e marcas que não existem no Brasil
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Tenho acesso a cupons de desconto, ofertas especiais e o
              conhecimento das melhores épocas de compra e lojas com os melhores
              preços!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Não se limitar a comprar apenas na Espanha, mas em toda Europa!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Já ouviu falar em Lidl, Alcampo ou El Corte Inglés? São 3 ótimos
              motivos!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Abra sua mente para o novo... e você poderá se surpreender
              positivamente!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Não pode vir a Europa? Eu trago ela até você!
            </p>
          </div>
          <div className="flex px-10">
            <img
              src="/img/checkmark-green.svg"
              alt="checkmark"
              className="pr-4"
            />
            <p className="text-center py-6 text-xl font-bold text-pink-400 bg-checkmark ml-auto mr-auto">
              Porque não?
            </p>
          </div>
        </div>
        <div className="min-w-full text-center">
          <h2
            id="does-it-worth"
            className="text-5xl font-bold text-purple-700 m-8"
          >
            Vale mesmo a pena<span className="text-pink-400">?</span>
          </h2>
          <p className="text-xl font-bold text-purple-700 m-8 border-t-2 border-r-2 p-4 border-dashed border-purple-700">
            Pelo fato de ter morado no Brasil, EUA, Canadá e agora na Espanha,
            posso dizer que tenho um bom conhecimento de produtos e seus preços
            nesses países e bons parâmetros para comparação. Te garanto que,
            sabendo comprar, vale a pena sim!
          </p>
        </div>
        <div className="bg-purple-700 min-w-full text-center text-white">
          <h2 id="redirecting" className="text-4xl font-bold my-8">
            Redirecionamento de Compras
          </h2>
          <h3 className="text-xl font-bold text-pink-400">O que é:</h3>
          <p className="text-xl font-bold text-indigo-300 m-8 border-2 p-4 border-dashed">
            Com o redirecionamento você faz suas próprias compras nos sites
            europeus, usando o seu cartão de crédito internacional, e manda
            entregar no meu endereço. Eu receberei seus produtos e enviarei para
            sua casa!
          </p>
          <h3 className="text-xl font-bold text-pink-400">Como funciona?</h3>
          <div className="flex text-xl font-bold m-8 text-indigo-300 border-b-2 border-dashed pb-4">
            <span className="px-2 border-dashed text-pink-400">1.</span>
            <p>
              Após me informar sobre sua intenção de compra e confirmar alguns
              dados, eu fornecerei o endereço para entrega
            </p>
          </div>
          <div className="flex text-xl font-bold m-8 text-indigo-300 border-b-2 border-dashed pb-4">
            <span className="px-2 border-dashed text-pink-400">2.</span>
            <p>
              É de responsabilidade do cliente rastrear a entrega de suas
              compras no endereço espanhol e me informar a data de entrega
              estimada.
            </p>
          </div>
          <div className="flex text-xl font-bold m-8 text-indigo-300 border-b-2 border-dashed pb-4">
            <span className="px-2 border-dashed text-pink-400">3.</span>
            <p>
              Assim que eu receber suas compras, vou abrir, tirar fotos de todos
              os produtos e enviar via WhatsApp para conferência. Após sua
              conferência e aprovação eu vou iniciar a montagem da sua caixa.
            </p>
          </div>
          <div className="flex text-xl font-bold m-8 text-indigo-300 border-b-2 border-dashed pb-4">
            <span className="px-2 border-dashed text-pink-400">4.</span>
            <p>
              Após a pesagem, te passarei o valor do frete e da taxa de envio. O
              pagamento deverá ser feito através de uma das opções disponíveis.
            </p>
          </div>
          <div className="flex text-xl font-bold m-8 text-indigo-300 border-b-2 border-dashed pb-4">
            <span className="px-2 border-dashed text-pink-400">5.</span>
            <p>
              Após a confirmação de pagamento, iniciarei o procedimento de envio
              e fornecerei o código de rastreio para seu acompanhamento no site
              dos Correos España. Quando a encomenda estiver no Brasil, o
              rastreio será feito pelo site dos Correios do Brasil.
            </p>
          </div>
          <div className="flex text-xl font-bold m-8 text-indigo-300 border-b-2 border-dashed pb-4">
            <span className="px-2 border-dashed text-pink-400">6.</span>
            <p>
              Caso você esteja aguardando outras entregas ou tenha intenção de
              fazer mais compras, eu armazenarei seus produtos até você definir
              o momento do envio. Cada caixa pode ter um limite de peso de até
              <span className="text-pink-400 px-1">30kg de produtos!</span> Que
              tal aproveitar?!
            </p>
          </div>
          <p className="font-bold text-right pl-32 pr-6 text-sm pb-4">
            *Valor a ser pago:{' '}
            <span className="text-pink-400 px-1">taxa de envio</span> +{' '}
            <span className="text-pink-400 px-1">frete até sua casa</span>
          </p>
        </div>
        <div className="scroll-top">
          <a className="scroll-top__link" href="#">
            ^
          </a>
        </div>
      </main>
      <footer
        id="contact"
        className="bg-pink-500 min-w-full text-lg flex flex-col items-start px-4"
      >
        <div className="text-white font-bold flex items-center h-16">
          <img
            src="/img/instagram-logo-purple.png"
            alt="instagram logo"
            className="h-3/4"
          />
          <span className="pl-2">@shopwithlari_</span>
        </div>
        <div className="text-white font-bold flex items-center h-16">
          <img
            src="/img/envelope-icon.png"
            alt="envelope logo"
            className="h-3/4"
          />
          <a className="pl-2" href="mailto:shopwithlari@gmail.com">
            shopwithlari@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
