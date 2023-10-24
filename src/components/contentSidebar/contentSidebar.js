import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";

// icons
import { BiHomeSmile } from "react-icons/bi";
import { TbShoppingBagSearch } from "react-icons/tb";
import { MdOutlineAllInclusive } from "react-icons/md";
import { PiWalletBold } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { MdSimCardDownload } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { FaSuperpowers } from "react-icons/fa";

export default function ContentSideBar() {

  const [drop, setDrop] = useState()

  const router = useRouter();
  const { route } = router;
  const { locale } = router;

  const dropdownEdu = () => {
    setDrop(!drop)
  }

  const handleLink = () =>{
    router.reload();
  }

  return (
    <>
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">

        {/* navbar */}
        <ul class="block lg:hidden pt-5 space-y-2 font-medium">
          <li>
            <Link href="/" className={`flex items-center  h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
              <BiHomeSmile className="text-xl mr-2" />
              Home</Link>
          </li>
          <li>
            <Link href="/menu/about" className={`flex items-center h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/about' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
              <MdOutlineAllInclusive className="text-xl mr-2" />
              About</Link>
          </li>
          <li>
            <Link href="/menu/product" className={`flex items-center h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/product' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
              <TbShoppingBagSearch className="text-xl mr-2" />
              Product</Link>
          </li>
          <hr></hr>
        </ul>

        {/* sidebar */}
        <ul class="pt-5 space-y-2 font-medium">
          <li>
            <Link href="/menu/project" class={`flex items-center space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${route == '/menu/project' ? ('bg-teal-200 dark:bg-teal-800') : ('')}`}>
              <PiWalletBold className="text-xl text-dark dark:text-gray-300" />
              <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Projects</label>
            </Link>
          </li>

          <li>
            <Link href="/menu/skills" class={`flex items-center space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${route == '/menu/skills' ? ('bg-teal-200 dark:bg-teal-800') : ('')}`}>
              <FaSuperpowers className="text-xl text-dark dark:text-gray-300" />
              <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Skills</label>
            </Link>
          </li>

          <li>
            <Link href="/menu/certificate" class={`flex items-center space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${route == '/menu/certificate' ? ('bg-teal-200 dark:bg-teal-800') : ('')}`}>
              <PiCertificateBold className="text-xl text-dark dark:text-gray-300" />
              <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Certificate</label>
            </Link>
          </li>


          <li>
            <Link href="#" class="flex items-center justify-between space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={dropdownEdu}>
              <div className="flex space-x-4 items-center">
                <TbSchool className="text-xl text-dark dark:text-gray-300" />
                <label class="text-dark font-medium dark:text-gray-300">Education</label>
              </div>
              {!drop ? (
                <RiArrowDropDownLine className="flex justify-end text-2xl text-dark dark:text-gray-300" />
              ) : (
                <RiArrowDropUpLine className="flex justify-end text-2xl text-dark dark:text-gray-300" />
              )}

            </Link>
            {drop ? (
              <div className="w-full z-10 px-7 py-3  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul class="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                  <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-5">
                      <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src="/images/umt.png" />
                      </span>
                      <h3 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">Universitas Muhammadiyah Tangerang</h3>
                      <time class="block mb-3 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">2023 - Present</time>
                      <div className="mb-2 flex flex-col">
                        <span class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">Teknik Informatika</span>
                        <span class="w-fit bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">Latest</span>
                      </div>
                      <Link href="/docs/transkip.pdf" class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <MdSimCardDownload className="mr-1 text-dark dark:text-gray-300" />
                        Transcripts</Link>
                    </li>

                    <li class="mb-5 ml-8">
                      <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <img src="/images/24.png" />
                      </span>
                      <h3 class="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">SMAN 24 Kabupaten Tangerang</h3>
                      <time class="block mb-3 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2019</time>
                      <div className="mb-2 flex flex-col">
                        <span class="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">Natural Science</span>
                      </div>
                      <Link href="/docs/transkip_sma.pdf" class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <MdSimCardDownload className="mr-1 text-dark dark:text-gray-300" />
                        Transcripts</Link>
                    </li>
                  </ol>
                </ul>
              </div>
            ) : ("")}

          </li>
          
        </ul>
      </div>
    </>
  )
}