import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/Container';

import userOneImg from '../../public/img/user1.jpg';
import userTwoImg from '../../public/img/user2.jpg';
import userThreeImg from '../../public/img/user3.jpg';

export const Testimonials = () => {
    return (
        <div className="flex flex-nowrap overflow-x-scroll">
            <div className="lg:col-span-2 xl:col-auto ">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userTwoImg}
                        name="Dylan Ambrose"
                        title="Lead marketer at Netflix"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userTwoImg}
                        name="Dylan Ambrose"
                        title="Lead marketer at Netflix"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userThreeImg}
                        name="Gabrielle Winn"
                        title="Co-founder of Acme Inc"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userThreeImg}
                        name="Gabrielle Winn"
                        title="Co-founder of Acme Inc"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userThreeImg}
                        name="Gabrielle Winn"
                        title="Co-founder of Acme Inc"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userThreeImg}
                        name="Gabrielle Winn"
                        title="Co-founder of Acme Inc"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userThreeImg}
                        name="Gabrielle Winn"
                        title="Co-founder of Acme Inc"
                    />
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
                    <Avatar
                        image={userThreeImg}
                        name="Gabrielle Winn"
                        title="Co-founder of Acme Inc"
                    />
                </div>
            </div>
        </div>
    );
};

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
                <div className="text-lg font-medium text-black">
                    {props.name}
                </div>
                <div className="text-trueGray-400 dark:text-gray-400">
                    {props.title}
                </div>
            </div>
        </div>
    );
}

function Mark(props: { readonly children: React.ReactNode }) {
    return (
        <>
            {' '}
            <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                {props.children}
            </mark>{' '}
        </>
    );
}
