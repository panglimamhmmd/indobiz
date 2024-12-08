'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import userOneImg from '../../public/img/user1.jpg';
import userTwoImg from '../../public/img/user2.jpg';
import userThreeImg from '../../public/img/user3.jpg';
import Image from 'next/image';

import '@/styles/InfiniteLoop.css';

const data1 = [
    { image: userOneImg, name: 'Agus Santoso', title: 'Pembuatan PT' },
    {
        image: userTwoImg,
        name: 'Rina Putri',
        title: 'Pendirian Yayasan',
    },
    {
        image: userThreeImg,
        name: 'Budi Wibowo',
        title: 'Perjanjian Kerjasama',
    },
    {
        image: userOneImg,
        name: 'Siti Nurhaliza',
        title: 'Akta Notaris',
    },
];

const data2 = [
    {
        image: userOneImg,
        name: 'Indra Mahendra',
        title: 'Pembuatan PT',
    },
    {
        image: userTwoImg,
        name: 'Maya Sari',
        title: 'Pendirian Yayasan',
    },
    {
        image: userThreeImg,
        name: 'Rizky Fauzan',
        title: 'Perjanjian Kerjasama',
    },
    { image: userOneImg, name: 'Lina Hartini', title: 'Akta Notaris' },
];

const InfiniteLooper = function InfiniteLooper({
    speed,
    direction,
    children,
}: {
    speed: number;
    direction: 'right' | 'left';
    children: React.ReactNode;
}) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    function resetAnimation() {
        if (innerRef?.current) {
            innerRef.current.setAttribute('data-animate', 'false');

            setTimeout(() => {
                if (innerRef?.current) {
                    innerRef.current.setAttribute('data-animate', 'true');
                }
            }, 10);
        }
    }

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const widthDeficit = parentWidth - width;

        const instanceWidth = width / innerRef.current.children.length;

        if (widthDeficit) {
            setLooperInstances(
                looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
            );
        }

        resetAnimation();
    }, [looperInstances]);

    /*
    6 instances, 200 each = 1200
    parent = 1700
  */

    useEffect(() => setupInstances(), [setupInstances]);

    useEffect(() => {
        window.addEventListener('resize', setupInstances);

        return () => {
            window.removeEventListener('resize', setupInstances);
        };
    }, [looperInstances, setupInstances]);

    return (
        <div className="looper" ref={outerRef}>
            <div
                className="looper__innerList"
                ref={innerRef}
                data-animate="true"
            >
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="looper__listInstance"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection:
                                direction === 'right' ? 'reverse' : 'normal',
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const InfiniteLoop = () => (
    <div className="app mt-10">
        <div className="mb-10">
            <h1 className="description text-4xl font-extrabold text-black">
                Testimonials
            </h1>
            <p className="description text-gray-500 ">
                Kepercayaan yang Kami Bangun Melalui Pelayanan Terbaik
            </p>
        </div>
        {/* row 1 */}
        <InfiniteLooper speed={75} direction="right">
            {data1.map((item, index) => (
                <div
                    key={index}
                    className="mt-2 flex bg-[#fff] mx-1 pr-1 md:pr-4 lg:pr-0 w-[calc(100%-8px)] md:w-auto lg:w-80 rounded-xl items-center  border-gray-300 hover:border-orange border-2 duration-300 transform hover:-translate-y-1 transition-transform"
                >
                    <div className="p-1 md:p-3">
                        <Image
                            src={item.image}
                            width="40"
                            height="40"
                            className="rounded-xl"
                            alt="Avatar"
                            placeholder="blur"
                        />
                    </div>
                    <div className="flex flex-col ml-1">
                        <h1 className="font-bold text-sm md:text-xl text-black">
                            {item.name}
                        </h1>
                        <p className="text-xs md:text-base text-gray-700">
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </InfiniteLooper>
        {/* row 2 */}
        <InfiniteLooper speed={75} direction="left">
            {data2.map((item, index) => (
                <div
                    key={index}
                    className="flex bg-[#fff] mx-1 pr-1 md:pr-4 lg:pr-0 w-[calc(100%-8px)] md:w-auto lg:w-80 rounded-xl items-center mt-4 border-gray-300 hover:border-amber-400 border-2 duration-300 transform hover:-translate-y-1 transition-transform"
                >
                    <div className="p-1 md:p-3">
                        <Image
                            src={item.image}
                            width="40"
                            height="40"
                            className="rounded-xl"
                            alt="Avatar"
                            placeholder="blur"
                        />
                    </div>
                    <div className="flex flex-col ml-1">
                        <h1 className="font-bold text-sm md:text-xl text-black">
                            {item.name}
                        </h1>
                        <p className="text-xs md:text-base text-gray-700">
                            {item.title}
                        </p>
                    </div>
                </div>
            ))}
        </InfiniteLooper>

        {/* row 3 */}
    </div>
);
