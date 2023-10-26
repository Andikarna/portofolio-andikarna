import { Link, Navbar, NavbarMenuItem } from "@nextui-org/react";
import { useRouter } from "next/router";

// icons
import { BiHomeSmile } from "react-icons/bi";
import { TbShoppingBagSearch } from "react-icons/tb";
import { MdOutlineAllInclusive } from "react-icons/md";
import { PiWalletBold } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import { FaSuperpowers } from "react-icons/fa";

export default function MenuItems() {

  const router = useRouter();
  const { route } = router;

  return (
    <Navbar
      className="h-full px-3 bg-white dark:bg-gray-900"
    >
      <NavbarMenuItem className="block w-full lg:hidden space-y-2 font-medium">
        <Link
          href="/menu/home"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/home' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <BiHomeSmile className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Home</label>
        </Link>
        <Link
          href="/menu/about"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/about' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <MdOutlineAllInclusive  className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">About</label>
        </Link>
        <Link
          href="/menu/product"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/product' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <TbShoppingBagSearch className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Products</label>
        </Link>
        <Link
          href="/menu/project"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/project' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <PiWalletBold className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Projects</label>
        </Link>
        <Link
          href="/menu/skills"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/skills' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <FaSuperpowers className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Skills</label>
        </Link>
        <Link
          href="/menu/certificate"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/certificate' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <PiCertificateBold className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Certificate</label>
        </Link>
        <Link
          href="#"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/certificate' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <TbSchool className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Education</label>
        </Link>
        
        
      </NavbarMenuItem>

    </Navbar>

  )
}