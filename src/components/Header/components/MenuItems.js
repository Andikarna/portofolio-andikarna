import { Button, Link, Modal, ModalContent, Navbar, NavbarItem, NavbarMenuItem, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import ModalProfile from "./ModalProfile";

// icons
import { BiHomeSmile } from "react-icons/bi";
import { TbShoppingBagSearch } from "react-icons/tb";
import { MdOutlineAllInclusive } from "react-icons/md";
import { PiWalletBold } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import { FaSuperpowers } from "react-icons/fa";


export default function MenuItems() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur');


  const router = useRouter();
  const { route } = router;

  const handleOpen = () => {
    setBackdrop(backdrop);
    onOpen();
  }

  return (
    <Navbar
      className="h-full px-3 bg-white dark:bg-gray-900"
    >
      <NavbarMenuItem className="block w-full text-center lg:hidden space-y-2 font-medium">

        <NavbarItem className="py-5">
          <Button
            color="transparent"
            onPress={() => handleOpen()}
          >
            <Image className="flex rounded-full" src="/images/andi.webp" width={40} height={40} alt="andikarna" />
          </Button>

          <NavbarItem className="">
            <div className="block">
              <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full dark:bg-gray-500 dark:text-gray-100">
                <div className="animate-pulse animate__animated animate__heartBeat">
                  <div className="online"></div>
                </div>
                Hire me.</span>
            </div>
            <p className="block text-xs dark:text-gray-200 font-medium text-dark animate__animated animate__flipInX">Welcome,</p>
          </NavbarItem>


          <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              {(onClose) => (
                <ModalProfile onClose={onClose} />
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>

        <Link
          href="/menu/home"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/home' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <BiHomeSmile className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Home</label>
        </Link>
        <Link
          href="/menu/about"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/about' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <MdOutlineAllInclusive className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">About</label>
        </Link>
        <Link
          href="/menu/product"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/product' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <TbShoppingBagSearch className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Products</label>
        </Link>
        <Link
          href="/menu/project"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/project' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <PiWalletBold className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Projects</label>
        </Link>
        <Link
          href="/menu/skills"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/skills' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <FaSuperpowers className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Skills</label>
        </Link>
        <Link
          href="/menu/certificate"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/certificate' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <PiCertificateBold className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Certificate</label>
        </Link>
        <Link
          href="/menu/Educations"
          className={`flex items-center  h-10 px-2 rounded-lg text-dark bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/certificate' ? ('bg-teal-200 dark:bg-teal-800 dark:text-teal-300') : ('')}`}>
          <TbSchool className="text-xl mr-2" />
          <label class="cursor-pointer text-dark font-medium dark:text-gray-300">Education</label>
        </Link>

      </NavbarMenuItem>

    </Navbar>

  )

}