'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import Link from 'next/link';

import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from './constant';

const Services = () => {
    return (
        <div className="flex justify-center flex-col w-full ">
            <h1 className="description text-4xl text-black font-extrabold ">
                Our <span className="text-orange">Services</span>
            </h1>
            <p className="description text-gray-500">
                Layanan Profesional yang Dirancang untuk Bisnis Anda
            </p>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                // centeredSlides={true} // Tambahkan properti ini
                // loop={true} // Opsional: slide akan melingkar
                modules={[FreeMode, Pagination]}
                // className="max-w-[90%] lg:max-w-[80%] mt-6 h-[400px] lg:h-[450px] "
                className="max-w-[100%] mt-6 h-[400px] lg:h-[450px] "
            >
                {ServiceData.map((item) => (
                    <SwiperSlide className="py-2" key={item.title}>
                        <div className="group relative shadow-lg hover:shadow-xl text-black rounded-3xl px-4 py-6 overflow-hidden cursor-pointer h-5/6 hover:-translate-y-2  transition ease-in-out duration-300 bg-[#fff]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${item.backgroundImage})`,
                                }}
                                role="img"
                                aria-label={`Background for ${item.title}`}
                            />
                            {/* <item.icon className="hidden group-hover:block text-slate-50 w-[50px] h-[50px] relative top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" /> */}

                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300" />

                            <Link
                                href={'/services'}
                                className="absolute bottom-0 left-0 right-0 flex flex-col justify-between  w-full "
                            >
                                <div className="bg-orange text-center font-semibold">
                                    IDR 2.000.000
                                </div>
                                <div className="flex flex-col h-full gap-2 px-5 pb-5 pt-1 bg-[#fff]">
                                    <h1 className="text-lg lg:text-xl font-semibold">
                                        {item.title}
                                    </h1>
                                    <p className="text-xs text-zinc-600  ">
                                        {item.content}
                                    </p>
                                    <p className=" text-xs font-base text-orange group-hover:text-amber-400 ">
                                        Learn more {'>'}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Services;
