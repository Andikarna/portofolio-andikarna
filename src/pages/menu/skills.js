/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import TheHead from "@/components/Layouts/components/TheHead";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from 'react';


// icons
import { FaSuperpowers, FaLaravel, FaBootstrap, FaHtml5, FaCss3Alt, FaFileWord, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiExpress, SiReactrouter, SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs, TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { LiaGoogle } from "react-icons/lia";


export default function skills() {

  let xPercent = 0;
  let direction = -0.7;

  let xPercent_2 = -70;
  let direction_2 = +0.7;

  const items_1 = useRef(null);
  const items_2 = useRef(null);

  useEffect(() => {
    requestAnimationFrame(animation);
  }, [])

  const animation = () => {
    if (xPercent <= -50) {
      direction = +0.7;
    }
    if (xPercent > 50) {
      direction = -0.7;
    }
    if (xPercent_2 >= 10) {
      direction_2 = -0.7;
    }
    if (xPercent_2 < -100) {
      direction_2 = +0.7;
    }

    gsap.set(items_1.current, { xPercent: xPercent })
    gsap.set(items_2.current, { xPercent: xPercent_2 })
    xPercent += 0.1 * direction;
    xPercent_2 += 0.1 * direction_2;
    requestAnimationFrame(animation);
  }

  return (
    <>
      <TheHead title="Skills | Andikarna" />

      <div className="py-10 px-10 w-full flex justify-center dark:bg-gray-900 h-screen">
        <div className="w-screen dark:border-b-gray-500">
          <section>
            <div className="pt-10 flex justify-center sm:justify-start items-center text-2xl sm:text-3xl text-dark dark:text-gray-300">
              <FaSuperpowers className="mr-2" />
              <label>Skills</label>
            </div>
            <p className="text-center py-2 sm:text-start text-gray-500 text-sm sm:text-md">My Coding & other skill.</p>
            <div className="b-line my-5"></div>
            <div className="">

              <div className="container-box-skill">

                {/* ProgrammingLanguages */}
                <div className="">
                  <h3 className="py-1 px-3 bg-dark w-fit text-white rounded-full text-xs sm:text-sm">Programming languages</h3>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 w-fit items-center text-sm ">
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5 w-fit rounded-full dark:bg-gray-800">
                        <IoLogoJavascript className="text-xl mr-2 text-yellow-300" />
                        <p className="text-dark dark:text-gray-300">Javascript</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5 w-fit rounded-full dark:bg-gray-800">
                        <SiPhp className="text-xl mr-2 text-purple-500" />
                        <p className="text-dark dark:text-gray-300">PHP</p>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* framwork&libraries */}
                <div className="mr-5 sm:mr-0">
                  <h3 className="py-1 px-3 w-fit bg-dark text-white rounded-full text-xs sm:text-sm">Frameworks & Libraries</h3>
                  <div className="overflow-hidden">
                    <div ref={items_1} className="flex w-fit m-5 items-center text-sm space-x-5">
                      <Link href="" className="flex w-fit items-center box-shadow py-1 px-3 rounded-full dark:bg-gray-800 ">
                        <TbBrandNodejs className="text-xl mr-2 text-green-500" />
                        <p className="text-dark dark:text-gray-300">NodeJs</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <RiReactjsLine className="text-xl mr-2 text-blue-400" />
                        <p className="text-dark dark:text-gray-300">ReactJs</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <TbBrandNextjs className="text-xl mr-2 text-black" />
                        <p className="text-dark dark:text-gray-300">NextJs</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <FaLaravel className="text-xl mr-2 text-orange-500" />
                        <p className="text-dark dark:text-gray-300">Laravel</p>
                      </Link>
                    </div>

                    <div ref={items_2} className="flex w-fit m-5 items-center text-sm space-x-5 ">
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <SiExpress className="text-xl mr-2 text-black" />
                        <p className="text-dark dark:text-gray-300">ExpressJs</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <SiReactrouter className="text-xl mr-2 text-gray-900" />
                        <p className="text-dark dark:text-gray-300">Reactrouter</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <RiReactjsLine className="text-xl w-fit mr-2 text-pink-500" />
                        <p className="text-dark dark:text-gray-300">ReactIcons</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <SiTailwindcss className="text-xl mr-2 text-blue-700" />
                        <p className="text-dark dark:text-gray-300">TailwindCSS</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <FaBootstrap className="text-xl mr-2 text-purple-800" />
                        <p className="text-dark dark:text-gray-300">Bootstrap</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 w-fit rounded-full dark:bg-gray-800 ">
                        <LiaGoogle className="text-xl mr-2 text-black" />
                        <p className="text-dark dark:text-gray-300">GoogleFont</p>
                      </Link>
                    </div>

                  </div>
                </div>

                {/* other skill */}
                <div className="">
                  <h3 className="py-1 px-3 bg-dark w-fit text-white rounded-full text-xs sm:text-sm">Other Skill</h3>
                  <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-3 w-fit items-center text-sm  ">
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5 w-fit rounded-full dark:bg-gray-800">
                        <FaHtml5 className="text-xl mr-2 text-orange-600" />
                        <p className="text-dark dark:text-gray-300">HTML</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5  w-fit rounded-full dark:bg-gray-800">
                        <FaCss3Alt className="text-xl mr-2 text-blue-600" />
                        <p className="text-dark dark:text-gray-300">CSS</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5 w-fit rounded-full dark:bg-gray-800">
                        <FaFileWord className="text-xl mr-2 text-blue-800" />
                        <p className="text-dark dark:text-gray-300">Word</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5 w-fit rounded-full dark:bg-gray-800">
                        <FaFileExcel className="text-xl mr-2 text-green-800" />
                        <p className="text-dark dark:text-gray-300">Excel</p>
                      </Link>
                      <Link href="" className="flex items-center box-shadow py-1 px-3 m-5 w-fit rounded-full dark:bg-gray-800">
                        <FaFilePowerpoint className="text-xl mr-2 text-orange-800" />
                        <p className="text-dark dark:text-gray-300">PowerPoint</p>
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>
        </div >
      </div >
    </>
  )
}