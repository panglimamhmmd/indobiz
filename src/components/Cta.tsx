import React from 'react';
import { Container } from '@/components/Container';

export const Cta = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-orange px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-lg">
            <div className=" text-center lg:text-left">
                <h2 className="text-2xl font-medium lg:text-3xl">
                    Mulai Proses Legalitas Perusahaan Anda Hari Ini
                </h2>
                {/* <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
                        Don&apos;t let your visitors see a poor landing.
                    </p> */}
            </div>
            <div className="w-full text-center lg:w-auto flex">
                <a
                    href="https://github.com/web3templates"
                    target="_blank"
                    rel="noopener"
                    className="flex items-center py-2 mx-auto text-base font-bold text-center text-black bg-white rounded-3xl px-7 lg:px-10 lg:py-3 "
                >
                    Konsultasi Sekarang
                    <svg
                        width="30px"
                        height="30px"
                        viewBox="0 0 24.00 24.00"
                        className="ml-2 bg-black rounded-full p-1"
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
                </a>
            </div>
        </div>
    );
};
