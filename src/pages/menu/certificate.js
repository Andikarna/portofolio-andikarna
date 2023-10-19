import TheHead from "@/components/TheHead";
import { useRouter } from "next/router";
import Link from "next/link";
import { PiCertificateBold } from "react-icons/pi";

// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// icons
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";


export default function Home() {

  const router = useRouter();
  const { locale } = router

  const onDirect = () => {
    router.push('/menu/about')
  }


  return (
    <>
      <TheHead title="Certificate | Andikarna" />

      <div className="home py-20 w-full dark:bg-gray-900">

        {/* <img src="/images/banner.png" className="rounded-xl" /> */}
        {/* Career */}
        <div className="py-5 border-b-2 dark:border-b-gray-500">
          <div className="flex justify-center sm:justify-start items-center text-2xl sm:text-3xl text-dark dark:text-gray-300">
            <PiCertificateBold className="mr-2" />
            <label>Certificate</label>
          </div>
          <p className="text-center py-2 sm:text-start text-gray-500 text-sm sm:text-md">Some of the certificates I received from companies or organizations were in the form of problem solving and basic learning.</p>


          <div className="b-line my-5"></div>



          <div className="dark:bg-gradient-to-r dark:from-gray-900 dark:to-blue-500">
            <div className="container-certificate">

              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                conteredSlides={true}
                loop={true}
                slidesPerView={'1.5'}
                coverflowEffect={
                  {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 15
                  }
                }
                navigation={{ nextEl: '.next', prevEl: '.prev', clickable: true, }}
                pagination={{ el: '.pagination', clickable: true }}
                modules={[Pagination, Navigation, EffectCoverflow]}
                className="slider"
              >
                <SwiperSlide>
                  <Link href="#">
                    <img src="/images/certificate/1.png" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#">
                    <img src="/images/certificate/3.png" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#">
                    <img src="/images/certificate/2.png" />

                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#">
                    <img src="/images/certificate/4.png" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#">
                    <img src="/images/certificate/5.png" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="#">
                    <img src="/images/certificate/6.jpg" />
                  </Link>
                </SwiperSlide>
              </Swiper>

              <div className="flex justify-center items-center">
                <div className="flex space-x-5 text-center">
                  <FiArrowLeftCircle className="prev text-3xl cursor-pointer" />

                  <div className="pagination space-x-3 cursor-pointer"></div>

                  <FiArrowRightCircle className="next text-3xl cursor-pointer" />
                </div>
              </div>

            </div>
          </div>

        </div >
      </div >
    </>
  )
}
