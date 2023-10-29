import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdSimCardDownload } from 'react-icons/md'

export default function Educations() {
  return (
    <div className='py-32 lg:py-0'>
      <div className="w-full z-10 px-7 py-5 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
        <ul className="py-2 text-sm  text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-5">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <Image src="/images/umt.webp" alt="umt" width={30} height={30} />
              </span>
              <h3 className="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">Universitas Muhammadiyah Tangerang</h3>
              <time className="block mb-3 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">2023 - Present</time>
              <div className="mb-2 flex flex-col">
                <span className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">Teknik Informatika</span>
                <span className="w-fit bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">Latest</span>
              </div>
              <Link href="/docs/transkip.pdf" class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <MdSimCardDownload className="mr-1 text-dark dark:text-gray-300" />
                Transcripts</Link>
            </li>

            <li className="mb-5 ml-8">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <Image src="/images/24.webp" alt="SMAN24" width={30} height={30} />
              </span>
              <h3 className="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">SMAN 24 Kabupaten Tangerang</h3>
              <time className="block mb-3 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">2016 - 2019</time>
              <div className="mb-2 flex flex-col">
                <span className="w-fit bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">Natural Science</span>
              </div>
              <Link href="/docs/transkip_sma.pdf" class="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                <MdSimCardDownload className="mr-1 text-dark dark:text-gray-300" />
                Transcripts</Link>
            </li>
          </ol>
        </ul>
      </div>
    </div>
  )
}
