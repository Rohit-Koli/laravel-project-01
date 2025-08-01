import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
        <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-center '>Hello World</h2>
            <h2 className='text-center'>This is coming from server responce</h2>
            <a href="/about" className='btn border-amber-400 rounded-2xl'>About Page</a>
        </div>
        </>
    );
}
