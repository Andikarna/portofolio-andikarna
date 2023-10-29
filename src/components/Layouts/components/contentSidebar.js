import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";
import Educations from "@/pages/menu/Educations";

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
import Image from "next/image";

export default function ContentSideBar() {

  const [drop, setDrop] = useState()

  const router = useRouter();
  const { route } = router;
  const { locale } = router;

  const dropdownEdu = () => {
    setDrop(!drop)
  }

  const handleLink = () => {
    router.reload();
  }

  return (
    <>
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-900">
        {/* sidebar */}
        <ul className="pt-5 space-y-2 font-medium">
          <li>
            <Link href="/menu/project" className={`flex items-center space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${route == '/menu/project' ? ('bg-teal-200 dark:bg-teal-800') : ('')}`}>
              <PiWalletBold className="text-xl text-dark dark:text-gray-300" />
              <label className="cursor-pointer text-dark font-medium dark:text-gray-300">Projects</label>
            </Link>
          </li>

          <li>
            <Link href="/menu/skills" className={`flex items-center space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${route == '/menu/skills' ? ('bg-teal-200 dark:bg-teal-800') : ('')}`}>
              <FaSuperpowers className="text-xl text-dark dark:text-gray-300" />
              <label className="cursor-pointer text-dark font-medium dark:text-gray-300">Skills</label>
            </Link>
          </li>

          <li>
            <Link href="/menu/certificate" className={`flex items-center space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${route == '/menu/certificate' ? ('bg-teal-200 dark:bg-teal-800') : ('')}`}>
              <PiCertificateBold className="text-xl text-dark dark:text-gray-300" />
              <label className="cursor-pointer text-dark font-medium dark:text-gray-300">Certificate</label>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center justify-between space-x-4 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={dropdownEdu}>
              <div className="flex space-x-4 items-center">
                <TbSchool className="text-xl text-dark dark:text-gray-300" />
                <label className="text-dark font-medium dark:text-gray-300">Education</label>
              </div>
              {!drop ? (
                <RiArrowDropDownLine className="flex justify-end text-2xl text-dark dark:text-gray-300" />
              ) : (
                <RiArrowDropUpLine className="flex justify-end text-2xl text-dark dark:text-gray-300" />
              )}

            </Link>
            {drop ? (
              <Educations />
            ) : ("")}

          </li>

        </ul>
      </div>
    </>
  )
}