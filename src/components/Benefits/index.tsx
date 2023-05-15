import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import HText from "../UI/HText";
import BenefitCard from "./BenefitCard";
import ActionButton from "../UI/ActionButton";

import { PageProps } from "@/models/PropsTypes/PageProps";
import { SelectedPage } from "@/models/types";
import { BenefitType } from "@/models/types";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos at ut nesciunt pariatur dolore similique suscipit expedita ex distinctio, soluta beatae deleniti, adipisci possimus? Deserunt beatae illo esse veniam.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos at ut nesciunt pariatur dolore similique suscipit expedita ex distinctio, soluta beatae deleniti, adipisci possimus? Deserunt beatae illo esse veniam.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Professional and Expert Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dignissimos at ut nesciunt pariatur dolore similique suscipit expedita ex distinctio, soluta beatae deleniti, adipisci possimus? Deserunt beatae illo esse veniam.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits: React.FC<PageProps> = ({ setSelectedPage }) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((obj) => (
            <BenefitCard
              key={obj.title}
              {...obj}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTIONS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          {/* DESCRIPTION */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractWaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dolor iste, blanditiis amet architecto fugit id dicta
                cum ea, aspernatur tempora harum ex est totam illo, voluptas et.
                Provident, repellendus? Vitae dolor ex voluptatum eaque nisi sit
                perspiciatis rem quas impedit porro odit delectus itaque atque
                amet, omnis, excepturi nostrum, non ea expedita. A mollitia
                veniam temporibus nobis totam ex?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                cumque id fugiat reiciendis vero at voluptatem, veritatis, illo
                odit officia delectus tenetur! Quo eveniet natus perspiciatis
                accusamus enim! Suscipit, reprehenderit?
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
