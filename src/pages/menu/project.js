import TheHead from "@/components/Layouts/components/TheHead.js";
import Link from "next/link";

// icons
import { SiOpenproject } from "react-icons/si";
import { TbViewportWide, TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { SiLaravel } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";


export default function Project() {
  return (
    <>
      <TheHead title="Projects | Andikarna" />
      <div className="flex justify-center py-20 px-10">
        <div className="w-screen">
          <section>
            <div className="space-y-1">
              <div className="flex text-dark dark:text-gray-300 items-center justify-center sm:justify-start space-x-1">
                <SiOpenproject className="text-3xl" />
                <h1 className="text-3xl">Projects</h1>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-start">All the projects that I have completed with several technologies</p>
            </div>

            <div className="b-line my-5"></div>

            <div className="container dark:bg-gradient-to-r px-1 dark:from-gray-900 dark:to-blue-500">
              <div className="container-box-project">

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="card-image w-auto  rounded-t-lg" src="/images/project/portofolio-next.png" alt="1" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Portofolio</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">My portfolio website, where all the information about me is here, including projects, experience and skills.</p>
                    <div className="items-center md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <TbBrandNextjs className="text-3xl text-black" />
                        <RiReactjsLine className="text-3xl text-teal-500" />
                        <SiTailwindcss className="text-3xl text-blue-500" />
                      </div>
                      <Link href="https://portofolio-andikarna.vercel.app" className="flex items-center text-sm text-gray-500 hover:text-teal-500 dark:text-gray-300" >
                        <TbViewportWide className="mr-1 text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="card-image w-full rounded-t-lg" src="/images/project/iBlog.png" alt="1" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">iBog</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Blog website that I created using restfull api and adding json files to create comment and userpages features.</p>
                    <div className="items-center md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <TbBrandNextjs className="text-3xl text-black" />
                        <RiReactjsLine className="text-3xl text-teal-500" />
                        <SiTailwindcss className="text-3xl text-blue-500" />
                      </div>
                      <Tooltip content="Detail Project" color="default" closeDelay={0}>
                        <Link href="detailProject/Iblog" className="flex items-center text-sm text-gray-500 hover:text-teal-500 dark:text-gray-300" >
                          <TbViewportWide className="mr-1 text-lg" />
                        </Link>
                      </Tooltip>
                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="card-image w-full rounded-t-lg" src="/images/project/nownime.png" alt="1" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Nownime</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Web with the help of restfull api displays Top Anime and anime details.</p>
                    <div className="items-center md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <TbBrandNextjs className="text-3xl text-black" />
                        <RiReactjsLine className="text-3xl text-teal-500" />
                        <SiTailwindcss className="text-3xl text-blue-500" />
                      </div>
                      <Link href="https://nownime-webanime.vercel.app/" className="flex items-center text-sm text-gray-500 hover:text-teal-500 dark:text-gray-300" >
                        <TbViewportWide className="mr-1 text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>


                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="w-auto card-image rounded-t-lg" src="/images/project/modernWeb.png" alt="1" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Modern Web</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Websites created with parallax animation are built using HTML, CSS and JavaScript only.</p>
                    <div className="items-center  md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <AiFillHtml5 className="text-3xl text-orange-500" />
                        <DiCss3 className="text-3xl text-blue-500" />
                        <IoLogoJavascript className="text-3xl text-yellow-400" />
                      </div>
                      <Link href="https://modern-web.karnaandi00.repl.co" className="flex items-center text-sm text-gray-500 hover:text-teal-500 dark:text-gray-300">
                        <TbViewportWide className="mr-1 text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="w-auto card-image rounded-t-lg" src="/images/project/auth-ui.png" alt="1" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Authentication</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Website with authentication feature built with Node JS and ReactJS.</p>
                    <div className="items-center  md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <RiReactjsLine className="text-3xl text-teal-500" />
                        <DiNodejs className="text-3xl text-green-500" />
                        <AiFillHtml5 className="text-3xl text-orange-500" />
                        <DiCss3 className="text-3xl text-blue-500" />
                      </div>

                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="w-auto card-image rounded-t-lg" src="/images/project/portofolio.png" alt="2" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Personal Website</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Personal website styling with TailwindCSS3.</p>
                    <div className="items-center  md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <AiFillHtml5 className="text-3xl text-orange-500" />
                        <SiTailwindcss className="text-3xl text-blue-500" />
                        <IoLogoJavascript className="text-3xl text-yellow-400" />
                      </div>
                      <Link href="https://portofoliotailwindcss3.karnaandi00.repl.co/" className="flex items-center text-sm text-gray-500 hover:text-teal-500 dark:text-gray-300">
                        <TbViewportWide className="mr-1 text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="w-auto card-image rounded-t-lg" src="/images/project/game.png" alt="3" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Game Tournament Template</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Free Source Code Web Game Schedule built with ReactJS.</p>
                    <div className="items-center md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <RiReactjsLine className="text-3xl text-teal-500" />
                        <AiFillHtml5 className="text-3xl text-orange-500" />
                        <DiCss3 className="text-3xl text-blue-500" />
                      </div>

                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="w-auto card-image rounded-t-lg" src="/images/project/blog.png" alt="4" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Blog</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Blog website with login, post, update post and delete post features.</p>
                    <div className="items-center md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <SiLaravel className="text-3xl text-orange-500" />
                        <FaBootstrap className="text-3xl text-blue-500" />
                        <GrMysql className="text-3xl text-blue-950 dark:text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="box max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
                  <div>
                    <Image width={300} height={100} className="w-auto h-auto rounded-t-lg" src="/images/project/wp.png" alt="5" />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-dark dark:text-white">Wordpress Ecommerce</h5>
                    <p className="mb-5 text-xs font-normal text-gray-500 dark:text-gray-400">Building a web using Wordpress I can create an ecommerce website very quickly</p>
                    <div className="items-center md:flex space-y-5 md:space-y-0 justify-between ">
                      <div className="flex items-center space-x-2">
                        <BsWordpress className="text-3xl text-black dark:text-white" />

                      </div>
                      <Link href="https://andikarna.wordpress.com/" className="flex items-center text-sm text-gray-500 hover:text-teal-500 dark:text-gray-300">
                        <TbViewportWide className="mr-1 text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>


              </div>
            </div>


          </section>
        </div>
      </div>
    </>
  )
}