import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function page404() {
  return (
    <div className="px-10 w-full flex justify-center dark:bg-gray-900">
      <div className="w-screen dark:border-b-gray-500">
        <section>
          <div className="flex-col flex justify-center items-center h-screen text-center">
            <Image src="/icons/404.svg" width={100} height={100} alt="error"/>
            <Link isBlock showAnchorIcon href="/menu/home" color="foreground">
              Page not found, back to homepage!
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}