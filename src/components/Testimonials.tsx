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

const data3 = [
    { image: userOneImg, name: 'Eka Prasetya', title: 'Pembuatan PT' },
    {
        image: userTwoImg,
        name: 'Dian Permata',
        title: 'Pendirian Yayasan',
    },
    {
        image: userThreeImg,
        name: 'Andi Setiawan',
        title: 'Perjanjian Kerjasama',
    },
    { image: userOneImg, name: 'Nina Fitria', title: 'Akta Notaris' },
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
        <h1 className="description text-4xl font-extrabold text-black">
            Testimonials
        </h1>
        <p className="description text-gray-500">
            Kepercayaan yang Kami Bangun Melalui Pelayanan Terbaik
        </p>

        {/* row 1 */}
        <InfiniteLooper speed={100} direction="right">
            {data1.map((item, index) => (
                <div
                    key={index}
                    className="flex bg-[#fff] mx-2 pr-4 lg:pr-0 w-auto lg:w-80 rounded-xl items-center mt-6 shadow-lg hover:shadow-xl  duration-300 transform hover:-translate-y-1 transition-transform"
                >
                    <div className="p-3">
                        <Image
                            src={item.image}
                            width="70"
                            className="rounded-2xl"
                            height="70"
                            alt="Avatar"
                            placeholder="blur"
                        />
                    </div>
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-xl text-black">
                            {item.name}
                        </h1>
                        <p className="text-gray-700">{item.title}</p>
                    </div>
                </div>
            ))}
        </InfiniteLooper>
        {/* row 2 */}
        <InfiniteLooper speed={100} direction="left">
            {data2.map((item, index) => (
                <div
                    key={index}
                    className="flex bg-[#fff] mx-2 pr-4 lg:pr-0 w-auto lg:w-80 rounded-2xl items-center mt-6 shadow-lg hover:shadow-xl  duration-300 transform hover:-translate-y-1 transition-transform"
                >
                    <div className="p-3">
                        <Image
                            src={item.image}
                            width="70"
                            className="rounded-2xl"
                            height="70"
                            alt="Avatar"
                            placeholder="blur"
                        />
                    </div>
                    <div className="flex flex-col ">
                        <h1 className="font-bold text-xl text-black">
                            {item.name}
                        </h1>
                        <p className="text-gray-700">{item.title}</p>
                    </div>
                </div>
            ))}
        </InfiniteLooper>

        {/* row 3 */}
    </div>
);

interface AvatarProps {
    image: any;
    name: string;
    title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
    return (
        <div className="flex items-center mt-8 space-x-3 bg-orange">
            <div className="flex-shrink-0 overflow-hidden rounded-full w-40 h-40">
                <Image
                    src={props.image}
                    width="100"
                    height="100"
                    alt="Avatar"
                    placeholder="blur"
                />
            </div>
            <div>
                <div className="text-lg font-medium">{props.name}</div>
                <div className="text-gray-600 dark:text-gray-400">
                    {props.title}
                </div>
            </div>
        </div>
    );
}

function Mark(props: { readonly children: React.ReactNode }) {
    return (
        <>
            <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                {props.children}
            </mark>
        </>
    );
}
