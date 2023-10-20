import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ContentSideBar from "./contentSidebar/contentSidebar";
import ThemeSwicth from "./ThemeSwicther";

// icons
import { BiHomeSmile } from "react-icons/bi";
import { TbShoppingBagSearch } from "react-icons/tb";
import { MdOutlineAllInclusive } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { CgClose } from "react-icons/cg"
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdVerified } from "react-icons/md";


export default function Header() {

  const [click, setClick] = useState(true)
  const [clickProfile, setClickProfile] = useState(true)

  const router = useRouter();
  const { locale } = router
  const { route } = router

  const toggleNavbar = () => {
    setClick(!click);
  }

  const toggleProfile = () => {
    setClickProfile(!clickProfile);
  }

  return (
      <nav className="flex justify-center bg-white z-50 fixed top-0 w-full border-b dark:border-b-gray-800 dark:top-0 dark:border-gray-900 border dark:bg-gray-900">
        <div className=" py-3 w-4/5 lg:w-3/5 lg:px-5 lg:pl-3">
          <div className='flex items-center h-full justify-between'>
            {/* button mobile view */}
            <button data-drawer-target="sidebar" data-drawer-toggle="sidebar" aria-controls="sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 dark:text-gray-300 rounded-lg lg:hidden z-50" onClick={toggleNavbar}>
              <span class="sr-only">Open sidebar</span>
              {click ? (
                <HiOutlineMenuAlt2 className="text-xl text-dark dark:text-teal-500 dark:hover:text-teal-300"/>
              ) : (
                <CgClose className="text-xl text-dark dark:text-teal-500 dark:hover:text-teal-300"/>
              )}
            </button>

            {/* Logo User */}
            <div className="flex items-center z-10">
              <div className="flex items-center animate__bounce">
                <div className="flex items-center space-x-3">
                  <button type="button" class="flex text-sm bg-gray-900 rounded-full focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-500" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={toggleProfile}>
                    <img class="w-10 h-10 rounded-full" src="/images/andi.png" alt="andikarna" />
                  </button>
                  <div>
                    <div className="hidden lg:block">
                      <span class="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full dark:bg-gray-500 dark:text-gray-100">
                        <div className="animate-pulse animate__animated animate__heartBeat">
                          <div className="online"></div>
                        </div>
                        Hire me.</span>
                    </div>
                    <div class="hidden dark:text-gray-200 lg:block font-medium text-dark animate__animated animate__flipInX">Welcome,</div>
                  </div>
                </div>

                {!clickProfile ? (
                  <div class="z-50 fixed top-20 right-16 sm:right-52 lg:left-64 w-fit text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-800 dark:divide-gray-600" id="dropdown-user">
                    <div className="flex justify-center " role="none">
                      <div className="py-5 px-5">
                        <div className="flex justify-center ">
                          <p class="text-xl text-dark font-semibold text-gray-900 dark:text-white flex justify-center" role="none">
                            Andi Karna
                          </p>
                          <div className="mx-1 flex items-center">
                            <MdVerified className="text-blue-500"/>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <p className="text-xs text-dark font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                            @ndi.kan
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul class="py-2 px-2" role="none">
                      <div class="w-48 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <Link type="button" href="https://wa.me/6289636238885/" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                          <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor" />
                            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor" />
                          </svg>
                          Messages
                        </Link >
                        <Link type="button" href="/docs/Andikarna_CV.pdf" download="Andikarna_CV" class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                          <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                          </svg>
                          Download CV
                        </Link >

                        <Link type="button" href="https://saweria.co/andikarna" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium  border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                          <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                          </svg>
                          Coffee time
                        </Link >

                      </div>

                    </ul>

                  </div>
                ) : ('')}
              </div>
            </div>

            {/* Navigasi Bar  */}
            <div className="hidden lg:block">
              <li className="flex items-center space-x-4">
                <Link href="/" className={`flex items-center w-fit h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/' ? ('bg-gray-200 dark:bg-gray-800 dark:text-teal-300') : ('')}`}>
                  <BiHomeSmile className="text-xl mr-2" />
                  Home</Link>
                <Link href="/menu/about" className={`flex items-center w-fit h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/about' ? ('bg-gray-200 dark:bg-gray-800 dark:text-teal-300') : ('')}`}>
                  <MdOutlineAllInclusive className="text-xl mr-2"/>
                  About</Link>
                <Link href="/menu/product" className={`flex items-center w-fit h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/product' ? ('bg-gray-200 dark:bg-gray-800 dark:text-teal-300') : ('')}`}>
                  <TbShoppingBagSearch className="text-xl mr-2"/>
                  Product</Link>
              </li>
            </div>

            <div className="flex items-center z-50">
              <ThemeSwicth />
            </div>
          </div>
        </div>


        {/* responisve btn mobile/tablet */}
        {!click ? (
          <aside id="sidebar" class="fixed top-0  left-0 px-16 sm:px-40 md:px-60 lg:px-80 w-full h-full  pt-32 bg-white border-r border-gray-200 lg:hidden dark:bg-gray-900 dark:border-gray-700" aria-label="Sidebar">
            <ContentSideBar />
          </aside>
        ) : ("")}

      </nav>
  )
}