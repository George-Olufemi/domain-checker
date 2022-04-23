import React from 'react';
import assets from './assets/IMG-20220324-WA0004.jpg';

function Main() {
    return(
        <div className="bg-gray-50 md:mx-56 md:py-20">
            <div className=''>
                <h1 className='pt-7 text-center md:text-left font-bold text-xl'>Domain<span className="text-red-700">Checker</span></h1>
            </div>
            <div className='md:grid md:grid-cols-2'>
                <div className="text-center md:text-start mt-12 font-bold text-5xl md:text-left">
                    <h1>Regain your<br /><span className='text-red-700'>confidence</span><br />working with<br /></h1>
                    <h1 className='bg-red-700 text-white mt-5 p-2 -rotate-6 inline-flex md:mb-3'>Domains</h1>
                    <h1 className="text-center tracking-wider text-gray-500 md:text-start md:text-base md: md:text-left hidden md:font-normal md:block md:mt-1">Detect Potential DGA (Domain<br /> Generation Algorithm) generated<br /> malware domains</h1>
                    <div className="hidden md:block md:mt-4">
                        <form class="w-full max-w-sm">
                            <div class="flex items-center border-b border-red-700 py-2">
                                <input class="appearance-none bg-transparent border-none w-full text-black mr-3 leading-tight focus:outline-none" type="text" placeholder="Input data" aria-label="Full name" />
                                <button class="flex-shrink-0 bg-red-700 hover:bg-red-600 text-lg border-1 tracking-wider  text-white py-2 px-4 rounded-lg transition-all" type="button">
                                check
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="p-4">
                    <img className="rounded p-14" src= {assets} alt="Hero Image" />
                </div>
            </div>
            <div className="mb-3 sm:mb-2">
                    <h1 className="text-center tracking-wider mb-10 md:invisible text-gray-500">Detect Potential DGA (Domain<br /> Generation Algorithm) generated<br /> malware domains</h1>
                </div>
                <div className="mx-20 mb-10 sm:hidden">
                    <form>
                        <div className="mb-4">
                        <input class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="input data"></input>
                        </div>
                        <button class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl w-full
                        transition-all focus:outline-none focus:shadow-outline mb-10" type="button">
                            check
                        </button>
                    </form>
                </div>
        </div>
    );
}

export default Main;