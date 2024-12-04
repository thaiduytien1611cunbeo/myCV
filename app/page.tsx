"use client";

import {
  EmailIcon,
  FacebookIcon,
  GithubIcon,
  PhoneIcon,
} from "@/components/icons";
import { TabsComponent } from "@/components/tabs";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Divider,
  CardFooter,
  Link,
} from "@nextui-org/react";

export default function page() {
  return (
    <section className="grid grid-cols-7 gap-4 items-center justify-center">
      <div className="col-span-2 h-full">
        <Card className="overflow-visible pb-3 px-3">
          <CardHeader className="flex flex-col gap-3">
            <Image
              alt="avatar"
              height={130}
              radius="sm"
              src="/avatar.jpg"
              width={150}
              className="avatar"
            />
            <div className="flex flex-col items-center">
              <p className="text-md">Thái Duy Tiến</p>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                href="https://github.com"
                as={Link}
                color="default"
                variant="solid"
              >
                <GithubIcon />
              </Button>
              <Button
                href="https://web.facebook.com/iamthaiduytien/"
                as={Link}
                color="default"
                variant="solid"
              >
                <FacebookIcon />
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <Card shadow="none" style={{ background: "#F2F5F9" }}>
              <CardHeader className="flex gap-3">
                <PhoneIcon />
                <div className="flex flex-col">
                  <p className="text-sm">Phone</p>
                  <p className="text-small text-default-500">0976897134</p>
                </div>
              </CardHeader>
              <Divider />
              <CardHeader className="flex gap-3">
                <EmailIcon />
                <div className="flex flex-col">
                  <p className="text-sm">Email</p>
                  <p className="text-small text-default-500">
                    thaiduytien@gmail.com
                  </p>
                </div>
              </CardHeader>
              <Divider />
              <CardFooter className="flex justify-center">
                <Button
                  radius="full"
                  className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                >
                  Download Resume
                </Button>
              </CardFooter>
            </Card>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-5 h-full">
        <TabsComponent />
      </div>
    </section>
  );
}
