import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeSwicth from "./components/ThemeSwicther";
import Image from "next/image";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

// icons
import { BiHomeSmile } from "react-icons/bi";
import { TbShoppingBagSearch } from "react-icons/tb";
import { MdOutlineAllInclusive } from "react-icons/md";
import MenuItems from "./components/MenuItems";
import ModalProfile from "./components/ModalProfile";



export default function Header() {
  const router = useRouter();
  const { route } = router

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setBackdrop(backdrop);
    onOpen();
  }

  return (
    <Navbar
      className="flex  bg-white z-50 fixed top-0 w-full border-b dark:border-b-gray-800 dark:top-0 dark:border-gray-900 border dark:bg-gray-900"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* button mobile view */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Logo User */}
      <NavbarContent justify="center">
        <NavbarBrand className="flex justify-start">
          <NavbarItem className="hidden lg:flex items-center space-x-3 animate__bounce">
            <Button
              color="transparent"
              onPress={() => handleOpen()}
            >
              <Image className="flex -mr-10 rounded-full lg:w-10" src="/images/andi.webp" width={40} height={40} alt="andikarna" />
            </Button>

            <NavbarItem>
              <div className="hidden lg:block">
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full dark:bg-gray-500 dark:text-gray-100">
                  <div className="animate-pulse animate__animated animate__heartBeat">
                    <div className="online"></div>
                  </div>
                  Hire me.</span>
              </div>
              <p className="hidden dark:text-gray-200 lg:block font-medium text-dark animate__animated animate__flipInX">Welcome,</p>
            </NavbarItem>


            <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <ModalProfile onClose={onClose} />
                )}
              </ModalContent>
            </Modal>
          </NavbarItem>
        </NavbarBrand>
      </NavbarContent>

      {/* Navigasi Bar  */}
      <NavbarContent justify="center" className="hidden lg:flex justify-center w-full">
        <NavbarItem className="flex items-center h-full space-x-4">

          <Link
            href="/menu/home"
            className={`flex items-center w-fit h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/home' ? ('bg-gray-200 dark:bg-gray-800 dark:text-teal-300') : ('')}`}
          >
            <BiHomeSmile className="text-xl mr-2" />
            Home
          </Link>

          <Link
            href="/menu/about"
            className={`flex items-center w-fit h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/about' ? ('bg-gray-200 dark:bg-gray-800 dark:text-teal-300') : ('')}`}
          >
            <MdOutlineAllInclusive className="text-xl mr-2" />
            About
          </Link>

          <Link
            href="/menu/product"
            className={`flex items-center w-fit h-10 px-2 py-1 rounded-lg text-dark dark:text-gray-300 hover:bg-gray-100 dark:hover:text-teal-300 dark:hover:bg-gray-800 ${route == '/menu/product' ? ('bg-gray-200 dark:bg-gray-800 dark:text-teal-300') : ('')}`}
          >
            <TbShoppingBagSearch className="text-xl mr-2" />
            Product
          </Link>

        </NavbarItem>

      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwicth />
      </NavbarContent>

      {/* MenuItems */}
      <NavbarMenu className="dark:bg-gray-900">
        <MenuItems />
      </NavbarMenu>



    </Navbar >

  )
}