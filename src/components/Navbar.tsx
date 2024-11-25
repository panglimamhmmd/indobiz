'use client';
import Link from 'next/link';
import ThemeChanger from './DarkSwitch';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';

export const Navbar = () => {
    const navigation = ['Home', 'Services', 'Articles'];
    return (
        <div className="w-full">
            <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
                {/* Logo  */}
                <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-black dark:text-white">
                        <span>
                            <Image
                                src="/img/logo.svg"
                                width="32"
                                alt="N"
                                height="32"
                                className="w-8"
                            />
                        </span>
                        <span>Indobiz</span>
                    </span>
                </Link>

                {/* get started  */}
                <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
                    {/* <ThemeChanger /> */}
                    <div className="hidden mr-3 lg:flex nav__item">
                        <Link
                            href="/"
                            className="px-6 py-2 text-md text-white font-bold bg-orange rounded-lg md:ml-5 flex gap-3 items-center"
                        >
                            Konsultasi Sekarang
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24.00 24.00"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#ffffff"
                                transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="#CCCCCC"
                                    strokeWidth="0.192"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                                        fill="#ffffff"
                                    ></path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                aria-label="Toggle Menu"
                                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-orange focus:text-orange focus:border-4-indigo-500z focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                            >
                                <svg
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    {open && (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                        />
                                    )}
                                    {!open && (
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        />
                                    )}
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                <>
                                    {navigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={`/${item.toLowerCase()}`}
                                            className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange focus:text-orange  dark:focus:bg-gray-800 focus:outline-none"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/"
                                        className="w-full px-6 py-2 mt-3 text-center text-white bg-orange rounded-md lg:ml-5"
                                    >
                                        Konsultasi Sekarang
                                    </Link>
                                </>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* menu  */}
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((menu, index) => (
                            <li className="mr-3 nav__item" key={index}>
                                <Link
                                    href={`/${menu.toLowerCase()}`}
                                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline  dark:text-gray-200 hover:text-orange
                                    focus:border-b-4 border-orange
                                     focus:text-orange focus:outline-none dark:focus:bg-gray-800"
                                >
                                    {menu}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};
