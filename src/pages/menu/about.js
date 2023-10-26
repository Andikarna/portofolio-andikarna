import { useState } from "react";
import Link from "next/link";
import TikTokEmbed from '../tiktokEmbed.js';
import TheHead from "@/components/Layouts/components/TheHead.js";

// icons
import { AiOutlineLink } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export default function About() {

  const [isClick, setIsClick] = useState(false)

  const clickBtn = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <TheHead title="About | Andikarna" />
      <div className="py-10 px-10 w-full flex justify-center">
        <div className="w-screen">
          <section>
            <div className="py-10 sm:flex justify-between text-center">
              <h1 className="text-3xl text-dark dark:text-gray-300 sm:text-5xl font-medium">About,</h1>
              <div className="flex justify-center items-center my-3 sm:my-0">
                <button type="button" className="flex text-dark dark:text-gray-300 bg-gray-200 hover:bg-gray-300 border border-gray-200 font-medium rounded-lg text-xs sm:text-sm px-2 py-2 text-center items-center dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" onClick={clickBtn}>
                  <AiOutlineLink className="mr-1"/>
                  Social Media
                </button>
              </div>

            </div>

            {isClick ? (
              <div className="flex justify-center sm:justify-end">
                <div class="absolute w-80 -mt-8 bg-white border border-gray-200 rounded-lg shadow p-6 sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                  <h5 class="mb-3 text-base font-semibold text-center sm:text-start text-gray-900 md:text-xl dark:text-white ">
                    Social Media
                  </h5>
                  <p class="text-sm font-normal text-center sm:text-start text-gray-500 dark:text-gray-400">Connect with one of our available media and lets communicate.</p>
                  <ul class="my-4 space-y-3">
                    <li>
                      <Link href="https://www.tiktok.com/@ndilyo?is_from_webapp=1&sender_device=pc" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <FaTiktok />
                        <span class="flex-1 ml-3 whitespace-nowrap">Tiktok</span>
                        <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/ndi.kan/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <RiInstagramFill className=" text-red-500" />
                        <span class="flex-1 ml-3 whitespace-nowrap">Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/in/andikarna/" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <AiFillLinkedin className="text-blue-600"/>
                        <span class="flex-1 ml-3 whitespace-nowrap">Linkedin</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/Andikarna" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <AiFillGithub />
                        <span class="flex-1 ml-3 whitespace-nowrap">Github</span>
                      </Link>
                    </li>

                  </ul>
                  <div>
                    <Link href="#" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                      <svg class="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      Why do I need to connect with my media?</Link>
                  </div>
                </div>
              </div>

            ) : (
              ""
            )}

            <div className="text-center sm:text-start space-y-5 text-dark dark:text-gray-400">
              <p>Hi! I am Andi Karna, I am an experienced informatics graduate with a deep dedication to creating good and efficient solutions through code. With a strong foundation in Programming, as well as a basic understanding of frontend tools and frameworks, I have embraced the ever-evolving web development with enthusiasm and dedication. Currently, domiciled in Tangerang, Indonesia 🇮🇩.
              </p>
              <p>
                As a fast learner and active thinker, I thrive in a dynamic environment where innovation is the driving force. My collaborative nature allows me to integrate seamlessly with the team, contributing not only to my technical prowess but also a humble attitude that values each member&apos;s input.
              </p>
              <p>
                When I&apos;m not engrossed in lines of code, you might find me exploring the latest trends in the tech world, tinkering with personal coding projects, or engaging in thought-provoking discussions about software architecture and design patterns.
              </p>
              <p>
                This website is my platform to share insights, experiences and discoveries from my journey as an informatics graduate. Join me as we dive into the ever-exciting world of technology, where every line of code has the potential to advance digital development in incredible ways.
              </p>
              <p>
                Thank you for visiting, and I hope you can join and socialize in terms of technology, especially websites.
              </p>
            </div>
            

            {/* embed TIktok */}
            <div className="-mx-10 my-10">
              <div className="mx-20 mb-1 flex justify-between items-center">
                <div className="flex items-center text-xl dark:text-gray-300">
                  <FaTiktok />
                  <label className="font-semibold text-2xl">Tiktok</label>
                </div>
                <Link href="https://www.tiktok.com/@ndilyo" className="text-dark dark:text-gray-400">@ndilyo</Link>
              </div>
              <label className="mx-20 text-gray-700 dark:text-gray-400 ">find me in tiktok,</label>

              <TikTokEmbed />
            </div>
          </section >
        </div>
      </div>
    </>
  )
}