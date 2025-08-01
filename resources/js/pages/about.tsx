import Sound from './sound';

export default function about(){
    return (
        <>
        <div className='flex flex-col justify-center items-center h-screen'>

            <h2 className='text-center'>About Page</h2>
            <p className='text-center'>This page provides information about our application.</p>
            <a href="/">Home</a>
            <Sound name="Sound Component" />
            <Sound name="Noice Component" />
            </div>
        </>
    );
}