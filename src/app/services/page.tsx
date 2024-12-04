import { Container } from '@/components/Container';

import { SectionTitle } from '@/components/SectionTitle';
import { ServiceData } from '@/components/constant';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
    return (
        <Container>
            <div id="head">
                <SectionTitle
                    preTitle="Indobiz Services"
                    title="Why Choose Indobiz for Your Legal Needs?"
                >
                    Indobiz offers comprehensive legal services to support your
                    business growth, including company establishment, licensing,
                    trademark registration, and legal document drafting.
                </SectionTitle>
            </div>

            <div className="flex flex-col justify-center h-full">
                <h4 className="text-3xl font-semibold text-gray-500  text-center mb-2">
                    Our Services
                </h4>
                {ServiceData.map((data) => (
                    <div key={data.title}>
                        <div>
                            <div className="group relative flex overflow-hidden flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg  max-w-xs md:max-w-3xl mx-auto border border-white bg-white mb-10 hover:shadow-xl">
                                <div className=" h-48 md:h-full md:w-1/3 bg-white">
                                    <Image
                                        src={data.backgroundImage}
                                        alt={data.title}
                                        className="h-full w-full  group-hover:scale-105 transition duration-200 ease-in-out"
                                        width={700}
                                        height={700}
                                    />
                                </div>
                                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-4 p-3">
                                    <div className="flex justify-between item-center">
                                        <p className="text-gray-500 font-medium hidden md:block">
                                            {data.type}
                                        </p>
                                        <div className="flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-yellow-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <p className="text-gray-600 font-bold text-sm ml-1">
                                                4.96
                                                <span className="text-gray-500 font-normal">
                                                    (76 reviews)
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                                        {data.title}
                                    </h3>
                                    <p className="md:text-lg text-gray-500 text-base">
                                        {data.description}
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="text-md font-black text-gray-800">
                                            <span className="font-normal text-gray-600 text-base">
                                                Starting from:{' '}
                                            </span>
                                            {data.price}
                                        </p>
                                        <div className="flex content-center items-center text-orange cursor-pointer">
                                            <Link
                                                href="https://wa.me/08965468808?text=Anjaymabar\"
                                                className="text-orange text-md"
                                            >
                                                Order Now
                                            </Link>
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
}
