/* eslint-disable jsx-a11y/alt-text */
import TheHead from "@/components/Layouts/components/TheHead";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// icons
import { HiOfficeBuilding } from "react-icons/hi";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { IoMdPin } from "react-icons/io";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { Button } from "@nextui-org/react";


export default function Home() {

  const router = useRouter();
  const { locale } = router

  const onDirect = () => {
    router.push('/menu/about')
  }
  return (
    <>
      <TheHead title="Home | Andikarna" />

      <div className="home py-20 w-full dark:bg-gray-900">

        {/* introduce */}
        <div className="py-5 dark:border-b-gray-500">

          <ul className="block sm:flex justify-between items-end">
            <h1 className="text-center text-dark text-4xl sm:text-start sm:text-5xl dark:text-gray-300">I&apos;m <span className="text-teal">Andi</span> karna</h1>
            <li className="flex text-dark text-xs justify-center sm:text-sm sm:justify-start dark:text-gray-400">
              <IoMdPin />
              Stay in Tangerang 🇮🇩</li>
          </ul>

          <ul className="list flex justify-center sm:justify-start text-dark py-1 dark:text-gray-400">
            <li className="flex">
              <HiMiniCodeBracket className="text-xl mr-1" />
              Front End Developer</li>
          </ul>

          <ul className="py-5 text-center sm:text-start text-dark dark:text-gray-400">
            <p className="text-sm sm:text-lg">Experienced Informatics graduate with a strong focus on front end development. Proficient in Javascript and experienced in all areas of web technology. Communicative and dedicated to present a good and attractive web application in appearance.</p>
          </ul>

          <div className="flex justify-center sm:justify-start">
            <Button
              onClick={onDirect}
              className="btn box-shadow py-2 px-5 rounded-2xl border-2 dark:hover:text-teal-500 dark:text-gray-900 dark:hover:bg-gray-900"
            >About me
            </Button>
          </div>

        </div>

        <div className="b-line my-3"></div>

        {/* Career */}
        <div className="py-5 dark:border-b-gray-500">
          <div className="flex justify-center sm:justify-start items-center text-xl sm:text-2xl text-dark dark:text-gray-300">
            <HiOfficeBuilding />
            <label>Career</label>
          </div>
          <p className="text-center sm:text-start text-gray-500 text-xs sm:text-sm">last career experience</p>

          <div className="container 
          dark:bg-gradient-to-r dark:from-gray-900 dark:to-blue-500">
            <div className="container-box">
              <div className="box flex box-shadow bg-white dark:bg-gray-100 rounded-lg space-x-3 py-2 px-2 hover:scale-105">
                <div className="flex items-center border-r-2 px-1 ">
                  <Image src="/images/ihh.webp" className="w-auto h-auto" width={40} height={10} alt="ihh" />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-dark text-md font-semibold">Grpahic Designer</h3>
                  <Link href="https://indonesiaharapanharmonis.com/" className="flex items-center space-x-1 text-sm">
                    <HiOutlineOfficeBuilding className="text-dark" />
                    <p className="underline text-dark">Ihh.com</p>
                  </Link>
                  <div className="flex space-x-1 text-xs">
                    <MdDateRange className="text-dark " />
                    <p className="text-dark text-xs">Jun 2023 - Aug 2023</p>
                  </div>
                  <p className="text-gray-500 py-1 text-sm text-center">~ 3 Months</p>
                </div>
              </div>

              <div className="box flex box-shadow bg-white dark:bg-gray-100 rounded-lg space-x-3 py-2 px-2 hover:scale-105">
                <div className="flex items-center border-r-2 px-1 ">
                  <Image src="/images/app.webp" className="w-auto h-auto" width={40} height={20} alt="anugrahpirmaperdana" />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-dark text-md font-semibold">Machine Operator</h3>
                  <Link href="https://www.anugrah-app.com/" className="flex items-center space-x-1 text-sm">
                    <HiOutlineOfficeBuilding className="text-dark" /><p className="underline text-dark">App.com</p>
                  </Link>
                  <div className="flex space-x-1 text-xs">
                    <MdDateRange className="text-dark " />
                    <p className="text-dark text-xs">Feb 2020 - Feb 2023</p>
                  </div>
                  <p className="text-gray-500 py-1 text-sm text-center">~ 3 years</p>
                </div>
              </div>

              <div className="box flex box-shadow bg-white dark:bg-gray-100 rounded-lg space-x-3 py-2 px-2 hover:scale-105">
                <div className="flex items-center border-r-2 px-1 ">
                  <Image src="/images/paragon.webp" className="w-auto h-auto" width={50} height={20} alt="Paragon Tekhnology Inovation" />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="text-dark text-md font-semibold">Engineering</h3>
                  <Link href="https://www.paragon-innovation.com/" className="flex items-center space-x-1 text-sm">
                    <HiOutlineOfficeBuilding className="text-dark" />
                    <p className="underline text-dark">Paragon.com</p>
                  </Link>
                  <div className="flex space-x-1 text-xs">
                    <MdDateRange className="text-dark " />
                    <p className="text-dark text-xs">Jun 2019 - Des 2019</p>
                  </div>
                  <p className="text-gray-500 py-1 text-sm text-center">~ 6 Months</p>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}
