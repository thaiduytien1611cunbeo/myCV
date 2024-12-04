import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function WorkPage() {
  return (
    <Card className="pb-3 px-12">
      <CardHeader className="flex-col items-start">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-medium">Portfolio</h2>
          <div className="w-52 bg-gradient-to-tr from-pink-500 to-yellow-500 h-1 rounded-full"></div>
        </div>
        <p className="pt-2 text-sm">
          Hello there! I'm thrilled to welcome you to my portfolio. I am a
          passionate and versatile frontend developer with a keen interest in
          exploring the latest cutting-edge technologies.
        </p>
      </CardHeader>
      <CardBody>
        <h2 className="text-xl font-medium pb-2">What I do!</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="w-full py-1 px-5 flex shadow-none bg-orange-100 justify-end">
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-xs font-light">
              As a developer, I find myself most captivated by the power and
              flexibility of NEXT.js. I'm always eager to dive into new projects
              that leverage NEXT.js and discover innovative ways to create fast,
              scalable, and user-friendly applications.
            </p>
          </Card>
          <Card className="w-full py-1 px-5 flex shadow-none bg-cyan-100 justify-end">
            <h3 className="text-xl font-bold">App Development</h3>
            <p className="text-xs font-light">
              With a focus on user-centric design and cutting-edge technologies,
              I thrive on building intuitive and efficient apps that make a
              positive impact on people's lives. Let's turn ideas into reality
              and shape the future together.
            </p>
          </Card>
          <Card className="w-full py-1 px-5 flex shadow-none bg-cyan-100 justify-end">
            <h3 className="text-xl font-bold">UI/UX Designing</h3>
            <p className="text-xs font-light">
              Crafting visually appealing and intuitive user interfaces that
              offer a delightful user experience is something I'm truly fanatic
              about.
            </p>
          </Card>
          <Card className="w-full py-1 px-5 flex shadow-none bg-orange-100 justify-end">
            <h3 className="text-xl font-bold">Mentorship</h3>
            <p className="text-xs font-light">
              I have also found great joy in sharing my knowledge with others.
              Being a technical mentor allows me to give back to the community
              that has supported me throughout my career.
            </p>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}
