/* eslint-disable @next/next/no-img-element */
import {Popover, Transition} from '@headlessui/react';
import type {NextPage} from 'next';
import {Fragment} from 'react';
import React from 'react';
import {FaBars, FaChevronRight, FaTimes} from 'react-icons/fa';

import {Button} from '@components/lib/button/button';
import {LogoIcon} from '@components/lib/icons/logo-icon/logo-icon';

const navigation = [
  {name: 'Product', href: '#'},
  {name: 'Features', href: '#'},
  {name: 'Marketplace', href: '#'},
  {name: 'Company', href: '#'},
];

const Home: NextPage = () => {
  return (
    <div className="relative max-h-screen h-screen bg-gray-50 overflow-hidden">
      {/* <svg  fill="none" viewBox="0 0 2507 1077">
        <path fill="url(#paint0_radial_279_381)" d="M0 0H2507V1077H0z"></path>
        <defs>
          <radialGradient
            id="paint0_radial_279_381"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(157.696 1868.57 151.611) scale(4590.73 10678.3)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.23" stopColor="#CA4FF1" stopOpacity="0.06"></stop>
            <stop offset="0.379" stopColor="#6072EA" stopOpacity="0.35"></stop>
            <stop offset="0.443" stopColor="#C350E8" stopOpacity="0.21"></stop>
            <stop offset="0.604" stopColor="#D0D2DF" stopOpacity="0.23"></stop>
            <stop offset="0.735" stopColor="#6F81F5" stopOpacity="0.28"></stop>
            <stop offset="0.766" stopColor="#AEB3D5" stopOpacity="0.23"></stop>
            <stop offset="0.876" stopColor="#C72FF8" stopOpacity="0.07"></stop>
          </radialGradient>
        </defs>
      </svg> */}
      <svg
        className="absolute inset-0 h-full"
        fill="none"
        viewBox="0 0 32768 14086"
      >
        <g filter="url(#filter0_f_288_215)">
          <path
            fill="url(#paint0_radial_288_215)"
            d="M8.095 7.782H32760.095V14077.982H8.095z"
          ></path>
        </g>
        <defs>
          <filter
            id="filter0_f_288_215"
            width="32767.6"
            height="14085.7"
            x="0.313"
            y="0"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_288_215"
              stdDeviation="10"
            ></feGaussianBlur>
          </filter>
          <radialGradient
            id="paint0_radial_288_215"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-56522.3694 24789.23344 -57661.23327 -131474.3973 47844.3 -10004.2)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.24" stopColor="#6072EA" stopOpacity="0.35"></stop>
            <stop offset="0.394" stopColor="#D0D2DF" stopOpacity="0.23"></stop>
            <stop offset="0.44" stopColor="#D492EA" stopOpacity="0.29"></stop>
            <stop offset="0.486" stopColor="#ABB4F2" stopOpacity="0.23"></stop>
            <stop offset="0.653" stopColor="#D0D2DF" stopOpacity="0.23"></stop>
            <stop offset="0.735" stopColor="#6F81F5" stopOpacity="0.28"></stop>
            <stop offset="0.766" stopColor="#AEB3D5" stopOpacity="0.23"></stop>
            <stop offset="0.876" stopColor="#C72FF8" stopOpacity="0.07"></stop>
          </radialGradient>
        </defs>
      </svg>
      <div>
        <div className="relative overflow-hidden">
          <Popover as="header" className="relative">
            <nav
              className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 pb-2 pt-4"
              aria-label="Global"
            >
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  {/* <a href="#">
                    <span className="sr-only">Photoboard</span>
                    <LogoIcon className="h-10 w-auto" />
                  </a> */}
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md p-2 text-slate-400 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <FaBars className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium hover:text-slate-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <Button>Login</Button>
                <Button variant="secondary">Start free trial</Button>
              </div>
            </nav>
            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?from-color=primary&from-shade=500&to-color=secondary&to-shade=600&toShade=600"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-600">
                        <span className="sr-only">Close menu</span>
                        <FaTimes className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="pt-5 pb-6">
                    <div className="space-y-1 px-2">
                      {navigation.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-slate-900 hover:bg-slate-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-6 px-5">
                      <a
                        href="#"
                        className="block w-full rounded-md bg-gradient-to-r from-primary-500 to-secondary-600 py-3 px-4 text-center font-medium shadow hover:from-primary-600 hover:to-secondary-700"
                      >
                        Start free trial
                      </a>
                    </div>
                    <div className="mt-6 px-5">
                      <p className="text-center text-base font-medium text-slate-500">
                        Existing customer?{' '}
                        <a href="#" className="text-slate-900 hover:underline">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
      <div className="relative pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-screen-2xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <a
                  href="#"
                  className="inline-flex items-center rounded-full p-1 pr-2 sm:text-base bg-primary-900 text-white lg:text-sm xl:text-base"
                >
                  <span className="rounded-full bg-gradient-to-r from-primary-500 to-secondary-600 px-3 py-0.5 text-sm font-semibold leading-5">
                    We &apos;re hiring
                  </span>
                  <span className="ml-4 text-sm">Visit our careers page</span>
                  <FaChevronRight
                    className="ml-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </a>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="block">A better way to</span>
                  <span className="block bg-gradient-to-r from-primary-500 to-secondary-600 bg-clip-text pb-3 text-transparent sm:pb-5">
                    ship web apps
                  </span>
                </h1>
                <p className="text-base text-slate-500 sm:text-xl lg:text-lg xl:text-xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-md bg-slate-100 px-4 py-2 border shadow-sm text-base text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                        />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Button variant="primary">Start free trial</Button>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-400 sm:mt-4">
                      Start your free 14-day trial, no credit card necessary. By
                      providing your email, you agree to our{' '}
                      <a href="#" className="font-medium">
                        terms of service
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative py-16">
              <div
                className="absolute inset-x-0 top-0 hidden h-1/2 lg:block"
                aria-hidden="true"
              />
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                  <div className="h-96 w-80 relative">
                    <img
                      className="rounded-3xl absolute inset-0 h-full w-full object-cover object-center shadow-2xl"
                      src="https://static.photoweb.fr/photoweb.web.catalog.frontoffice/Catalogue/menu/toile-photo-2col-2020-02.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative shadow-lg rounded-3xl overflow-hidden lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                  <img
                    className="absolute inset-0 w-full h-full"
                    src="https://static.photoweb.fr/photoweb.web.catalog.frontoffice/deco-photo/tableau-classique-pvc/carrousel/tableau-classique-pvc-ambiance.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function IllustrationIcon({className = ''}) {
  return (
    <svg className={className} fill="none" viewBox="0 0 1802 1742">
      <g clipPath="url(#clip0_280_393)">
        <path
          fill="url(#paint0_linear_280_393)"
          stroke="url(#paint1_linear_280_393)"
          strokeMiterlimit="10"
          strokeWidth="0.485"
          d="M355.183 899.051l652.797-777.815 777.36 652.775-652.32 777.339-777.837-652.299z"
        ></path>
        <path
          fill="url(#paint2_linear_280_393)"
          stroke="url(#paint3_linear_280_393)"
          strokeMiterlimit="10"
          strokeWidth="0.485"
          d="M163.101 1024.09l142.635-171.156 841.074 698.896-142.64 171.63-841.069-699.37z"
        ></path>
        <path
          fill="#fff"
          d="M1302.28 881.46c-55.15 0-716.504 185.9-716.504 185.9l513.484 434.07 90.34-225.83c0 .95 129.8-394.14 112.68-394.14z"
        ></path>
        <path
          fill="url(#paint4_linear_280_393)"
          stroke="url(#paint5_linear_280_393)"
          strokeMiterlimit="10"
          strokeWidth="0.485"
          d="M1041.26 19.493H19.99V1040.73h1021.27V19.493z"
        ></path>
        <path
          stroke="url(#paint6_linear_280_393)"
          strokeMiterlimit="10"
          strokeWidth="2.424"
          d="M1033.18 11.886H11.907V1033.12H1033.18V11.886z"
        ></path>
        <path
          fill="url(#paint7_linear_280_393)"
          stroke="url(#paint8_linear_280_393)"
          strokeMiterlimit="10"
          strokeWidth="0.485"
          d="M1045.06 1035.5H.021v227.74H1045.06V1035.5z"
        ></path>
        <path
          fill="#fff"
          d="M581.973 1014.58l289.549-485.894 150.238 210.618v284.786H903.853l-321.88-9.51z"
        ></path>
        <path
          fill="#fff"
          d="M305.736 1020.76l343.751-459.27 272.433 462.6-616.184-3.33zM332.361 208.241c45.168 0 81.778 36.609 81.778 81.775 0 45.167-36.61 81.775-81.778 81.775-45.168 0-81.777-36.608-81.777-81.775 0-45.166 36.609-81.775 81.777-81.775z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_280_393"
          x1="-166.442"
          x2="2226.09"
          y1="2198.7"
          y2="-350.679"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1433FF"></stop>
          <stop offset="1" stopColor="#C72FF8"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_280_393"
          x1="351.854"
          x2="1788.67"
          y1="836.293"
          y2="836.293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A4ED"></stop>
          <stop offset="1" stopColor="#7A5BF5"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_280_393"
          x1="-195.69"
          x2="1238.8"
          y1="2117.51"
          y2="390.291"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1433FF"></stop>
          <stop offset="1" stopColor="#C72FF8"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_280_393"
          x1="160.811"
          x2="1149.1"
          y1="1288.2"
          y2="1288.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A4ED"></stop>
          <stop offset="1" stopColor="#7A5BF5"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_280_393"
          x1="-352.5"
          x2="1356"
          y1="1503"
          y2="-317.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1433FF"></stop>
          <stop offset="1" stopColor="#C72FF8"></stop>
        </linearGradient>
        <linearGradient
          id="paint5_linear_280_393"
          x1="17.613"
          x2="1043.64"
          y1="530.112"
          y2="530.112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A4ED"></stop>
          <stop offset="1" stopColor="#7A5BF5"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear_280_393"
          x1="0.021"
          x2="1045.06"
          y1="522.505"
          y2="522.505"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A4ED"></stop>
          <stop offset="1" stopColor="#7A5BF5"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear_280_393"
          x1="-381.139"
          x2="-231.255"
          y1="1366.32"
          y2="633.453"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1433FF"></stop>
          <stop offset="1" stopColor="#C72FF8"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear_280_393"
          x1="-2.411"
          x2="1047.49"
          y1="1149.37"
          y2="1149.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5A4ED"></stop>
          <stop offset="1" stopColor="#7A5BF5"></stop>
        </linearGradient>
        <clipPath id="clip0_280_393">
          <path fill="#fff" d="M0 0H1802V1742H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Home;
