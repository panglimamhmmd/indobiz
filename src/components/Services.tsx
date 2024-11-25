'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import { RxArrowTopRight } from 'react-icons/rx';

import { ServiceData } from './constant';

const Services = () => {
    return (
        <div className="flex justify-center flex-col w-full ">
            <h1 className="description text-4xl text-black ">Services</h1>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1.5,
                        spaceBetween: 40,
                    },

                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 60,
                    },

                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true} // Tambahkan properti ini
                loop={true} // Opsional: slide akan melingkar
                modules={[FreeMode, Pagination]}
                // className="max-w-[90%] lg:max-w-[80%] mt-6 h-[400px] lg:h-[450px] "
                className="max-w-[100%] mt-6 h-[400px] lg:h-[450px] "
            >
                {ServiceData.map((item) => (
                    <SwiperSlide className="py-2" key={item.title}>
                        <div className="group relative shadow-lg text-black rounded-3xl px-4 py-6 overflow-hidden cursor-pointer h-5/6 hover:shadow-xl hover:-translate-y-2  transition ease-in-out duration-300">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${item.backgroundImage})`,
                                }}
                                role="img"
                                aria-label={`Background for ${item.title}`}
                            />
                            <item.icon className="hidden group-hover:block text-slate-50 w-[50px] h-[50px] relative top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />

                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-50 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between py-4 w-full px-3 bg-orange hover:bg-yellow-400">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg lg:text-xl font-semibold">
                                        {item.title}
                                    </h1>
                                    <p className="text-xs text-zinc-600  ">
                                        {item.content}
                                    </p>
                                    <p className=" text-xs font-semibold ">
                                        3.5 Jt
                                    </p>
                                </div>

                                <div className="flex items-center"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Services;
