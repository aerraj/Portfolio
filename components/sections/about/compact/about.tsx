import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate and creative Developer and Engineer with a keen interest in crafting beautiful and functional websites. 
              With a diverse background in web technologies and frameworks, and currently pursuing a B.Tech at NIT Delhi, 
              I thrive on learning and embracing new challenges. My expertise spans both front-end and back-end development,
               with a strong foundation in database management and system architecture. 
               I am committed to delivering exceptional web solutions through innovation and creativity.
              </p>
              <Button asChild>
                <Link href="resume.pdf" target="_blank">
                  View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
