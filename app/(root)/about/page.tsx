import Image from "next/image";
import AnimatedDiv from "@/components/ui/animated_div";
import { Timeline } from "@/components/ui/timeline";
import Skillset from "@/components/ui/skills";
import {
  about,
  experience,
  education,
  current_work,
  greeting,
  others
} from "@/constants/personal-data";
import {skillSet} from "@/constants/skill-set";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 sm:px-6 md:max-w-3xl xl:px-0 justify-between ">
      <AnimatedDiv>
        {/*Biography*/}
        <h1 className="font-bold text-2xl text-left text-cement">Biography</h1>
        <div className="my-7 mx-5">
          <p className="text-lg text-justify">{about}</p>
          <br />
          <div className="self-center">
            <Image
              src="/images/gowthamaan.png"
              alt="Picture of the author"
              width={750}
              height={500}
            />
            <br />
          </div>
          <p className="text-lg text-justify">{current_work}</p>
          <br />
          <p className="text-lg text-justify">{greeting}</p>
        </div>
        <span className="block h-[20px]"></span>

        {/*Skills*/}
        <span className="block h-[20px]"></span>
        <h1 className="font-bold text-2xl text-left text-cement">Skills</h1>
        <Skillset skillset={skillSet} />
        <span className="block h-[80px]"></span>

        {/*Education*/}
        <h1 className="font-bold text-2xl text-left text-cement">Education</h1>
        <Timeline data={education} />
        <span className="block h-[20px]"></span>

        {/*Experience*/}
        <h1 className="font-bold text-2xl text-left text-cement">Experience</h1>
        <Timeline data={experience} />
        <span className="block h-[20px]"></span>

        {/*Others*/}
        <h1 className="font-bold text-2xl text-left text-cement">Others</h1>
        <br />
        <p className="text-lg text-justify">{others}</p>
        <span className="block h-[20px]"></span>
      </AnimatedDiv>
    </main>
  );
}
