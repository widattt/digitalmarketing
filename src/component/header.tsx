import React from 'react'
import ImageHeader from '../assets/anhdigital.jpg'
import LogoCompany from '../assets/josh_logo_01 1.png'



function Header() {
    return (
        <div className="relative overflow-hidden rounded-lg bg-cover  bg-no-repeat p-12 text-center h-[626px] left-0 top-0 w-1440 " style={{ backgroundImage: `url(${ImageHeader})` }}  >
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div >
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 h-[129px]  w-1113">
                        <header className="flex items-center justify-between py-4 md:py- top-0">
                            {/* logo - start */}
                            <div className="border-0 overflow-x-hidden">
                                <img className="h-141  object-cover  w-205" alt="Josh logo" src={LogoCompany} />
                            </div>
                            {/* logo - end */}

                            {/* nav - start */}

                            <nav className="hidden gap-12 lg:flex relative">
                                <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About Us</a>
                                <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Portfolio</a>
                                <div>

                                    <a href="#" className="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500 ">
                                        Service
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                    <ul
                                        className="absolute z-[1000] float-left m-0  min-w-max list-none overflow-hidden rounded-lg border-none  bg-black bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block bg-color-dark"
                                        aria-labelledby="dropdownMenuButton1"
                                        data-te-dropdown-menu-ref>
                                        <li>
                                            <a
                                                className="block w-full text-white whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-white-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >Web Design</a>
                                        </li>
                                        <li>
                                            <a
                                                className="block w-full text-white whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-white-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >NFTs</a>
                                        </li>
                                        <li>
                                            <a
                                                className="block w-full text-white whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-white-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >Digitial Marketing</a>
                                        </li>
                                        <li>
                                            <a
                                                className="block w-full text-white whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-white-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                href="#"
                                                data-te-dropdown-item-ref
                                            >Packages</a>
                                        </li>
                                    </ul>
                                </div>
                                <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Blog</a>
                                <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</a>
                            </nav>
                            {/* nav - end */}



                            <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                Menu
                            </button>
                            {/* buttons - end */}
                        </header>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center">
                    <div
                        className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-white font-brave-eightyone text-[64px] text-weight-400 left-0 letter-spacing--0.25 line-height-70 text-center top-0 w-[843px]">
                        AI Driven Digital Marketing
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header