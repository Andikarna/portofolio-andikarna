/* eslint-disable jsx-a11y/alt-text */
import TheHead from '@/components/Layouts/components/TheHead'
import { Code, Snippet } from '@nextui-org/react'
import Image from 'next/image'
import { Link } from "@nextui-org/react";

// icons
import { BiLeftArrowAlt } from 'react-icons/bi'

export default function Iblog() {
  return (
    <>
      <TheHead title="Projects | Andikarna" />
      <div className="flex justify-center py-20 px-10  text-dark dark:text-gray-300">
        <div className="w-[200%] sm:w-screen">
          <section className='space-y-5'>
            <Link href="/menu/project" className='flex text-dark dark:text-gray-300 items-center hover:gap-1 transition-all'>
              <BiLeftArrowAlt className='text-xl' />
              Back
            </Link>

            <h1 className='text-4xl'>iBlog</h1>
            <p className='italic py-2 text-gray-500 dark:text-gray-400'>Blog website that I created using restfull api and adding json files to create comment and userpages features.</p>

            <div className='b-line'></div>

            <Image src="/images/project/iBlog.png" alt='iblog' width={1000} height={200} className='py-10' />

            <div className='block sm:flex justify-between items-center'>
              <h3 className='text-lg font-semibold'>How to get this Projects</h3>
              <Link isBlock showAnchorIcon href="https://github.com/Andikarna/iBlog-realeses.git" className='text-sm'>
                Download ZIP
              </Link>
            </div>

            <div className='block sm:flex justify-between items-center overflow-x-auto'>
              <label>~ Clone using git</label>
              <Snippet color="default" className='text-tiny'>git clone https://github.com/Andikarna/iBlog-realeses.git</Snippet>
            </div>

            <h3 className='text-lg font-semibold'>How to run this Projects</h3>

            <div className='block sm:flex gap-2 space-x-2 items-center'>
              <label>1. run in terminal for app</label>
              <Snippet size="sm">npm run dev</Snippet>
            </div>

            <div className='block sm:flex gap-2 items-center'>
              <label>2. run in terminal for json-server</label>
              <Snippet size="sm">npm run json-serve</Snippet>
            </div>

            <p className='py-10'>~ Open <Link href='http://localhost:3000' color='primary'>http://localhost:3000</Link> with your browser to see a result.</p>

          </section>
        </div>
      </div>
    </>
  )
}
