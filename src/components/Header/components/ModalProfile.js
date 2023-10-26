/* eslint-disable jsx-a11y/alt-text */
import { Button, Card, CardBody, CardHeader, ModalBody, ModalFooter, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HiDownload, HiGift, HiOutlineChat } from "react-icons/hi";

// icons
import { MdVerified } from "react-icons/md";

export default function ModalProfile({ onClose }) {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1 dark:bg-gray-900">My Profile</ModalHeader>
      <ModalBody className="dark:bg-gray-900">
        <Card className="flex">
          <Image
            src="/images/banner.webp"
            alt="banner-andi"
            width={500}
            height={300}
            className="w-full h-full z-0 object-cover"
          />
          <CardHeader className="absolute bottom-0 gap-2">
            <Image
              src="/images/andi.webp"
              alt="andikarna"
              height={50} width={50}
              className="rounded-full shadow-md"
            />
            <p className="text-dark text-sm font-semibold flex items-center" role="none">
              @ndi.kan
              <MdVerified className="text-blue-500" />
            </p>
          </CardHeader>
        </Card>
        <Card className="dark:bg-gray-900">
          <CardBody className="gap-2 text-dark dark:text-gray-300">
            <Button
              href="https://wa.me/6289636238885/"
              color="default"
              variant="bordered"
              endContent={<HiOutlineChat className="text-dark dark:text-gray-300" />}
            >
              <Link href="https://wa.me/6289636238885/">Messages</Link>
            </Button>
            <Button
              href="/docs/Andikarna_CV.pdf"
              color="default"
              variant="bordered"
              endContent={<HiDownload className="text-dark dark:text-gray-300" />}
            >
              <Link href="/docs/Andikarna_CV.pdf">Download CV</Link>
            </Button>
            <Button
              href="https://saweria.co/andikarna"
              color="default"
              variant="bordered"
              endContent={<HiGift className="text-dark dark:text-gray-300" />}
            >
              <Link href="https://saweria.co/andikarna">Coffee Time</Link>
            </Button>
          </CardBody>
        </Card>
      </ModalBody >
      <ModalFooter className="flex justify-center dark:bg-gray-900">
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
      </ModalFooter>
    </>
  )
}