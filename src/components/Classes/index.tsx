import React from "react";
import { motion } from "framer-motion";

import HText from "../UI/HText";
import ClassCard from "./ClassCard";

import { PageProps } from "@/models/PropsTypes/PageProps";
import { SelectedPage } from "@/models/types";
import classesItem from "@/utils/db";

const Classes: React.FC<PageProps> = ({ setSelectedPage }) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              soluta error, maiores repellendus voluptas esse, ad impedit nisi
              iste excepturi rerum reiciendis enim officiis harum sunt adipisci
              voluptates beatae.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classesItem.map((item) => (
              <ClassCard key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
