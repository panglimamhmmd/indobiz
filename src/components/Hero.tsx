import Image from 'next/image';
import { Container } from '@/components/Container';
import heroImg from '../../public/img/heroimage.jpeg';
import Link from 'next/link';
import { RedirectButton } from '@/components/Redirect';

export const Hero = () => {
    return (
        <>
            <div className="flex flex-wrap ">
                <div className="flex items-center w-full mb-10  lg:w-1/2 lg:mb-0  ">
                    <div className="max-w-2xl space-y-10 ">
                        <h1 className="text-4xl font-bold leading-tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight ">
                            Solusi{' '}
                            <span className="text-orange">Jasa Legalitas</span>{' '}
                            Terpercaya
                        </h1>
                        <p className="text-sm leading-normal text-gray-500 text-md lg:text-xl">
                            Indobiz menawarkan solusi legalitas terpadu bagi
                            pengusaha dan perusahaan, memastikan setiap langkah
                            bisnis sesuai hukum dan mendukung kesuksesan jangka
                            panjang.
                        </p>

                        <div className="flex flex-wrap space-y-5 space-x-4 sm:space-y-0 sm:items-center sm:flex-row ">
                            <div className="flex gap-3 ">
                                <Link
                                    href="/services"
                                    className="px-4 hover:text-amber-400 hover:border-amber-400 duration-300 text-sm content-center py-2 lg:text-lg font-bold text-center text-orange border-orange border-2 rounded-2xl "
                                >
                                    Services
                                </Link>
                                <RedirectButton />
                            </div>
                            <div className="flex space-x-5  ">
                                <a
                                    href="https://facebook.com/web3templates"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-gray-400 rounded-full hover:text-orange transition-transform "
                                >
                                    <span className="sr-only">Facebook</span>
                                    <Facebook />
                                </a>
                                <a
                                    href="https://instagram.com/web3templates"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-gray-400 rounded-full hover:text-orange transition-transform "
                                >
                                    <span className="sr-only">Instagram</span>
                                    <Instagram />
                                </a>
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-gray-400 rounded-full hover:text-orange transition-ease "
                                >
                                    <span className="sr-only">Linkedin</span>
                                    <Linkedin />
                                </a>
                            </div>
                        </div>

                        {/* <Benefit /> */}
                        <div className="flex items-center justify-center gap-3 w-full shadow-xl bg-orange rounded-2xl text-center p-4 ">
                            <p className=" flex flex-col items-center justify-center text-xl lg:text-4xl font-bold text-white">
                                27k+
                                <span className="block text-sm lg:text-lg font-normal no-wrap">
                                    Successful Cases
                                </span>
                            </p>

                            <p className="flex flex-col items-center justify-center text-xl lg:text-4xl font-bold text-white px-5 md:px-7 lg:px-9">
                                10+
                                <span className="block text-sm lg:text-lg font-normal ">
                                    Year Experience
                                </span>
                            </p>

                            <p className="flex flex-col items-center justify-center text-xl lg:text-4xl font-bold text-white">
                                500+
                                <span className="block text-sm lg:text-lg font-normal">
                                    Satisfied Clients
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="lg:pl-10">
                        <Image
                            src={heroImg}
                            width="720"
                            height="720"
                            className={'object-cover rounded-lg'}
                            alt="Hero Illustration"
                            loading="eager"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const Facebook = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
);
const Instagram = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
    </svg>
);

const Linkedin = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
    </svg>
);
