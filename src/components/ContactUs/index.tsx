import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import HText from "../UI/HText";

import { PageProps } from "@/models/PropsTypes/PageProps";
import { SelectedPage } from "@/models/types";
import image from "@/assets/ContactUsPageGraphic.png";

const ContacUs: React.FC<PageProps> = ({ setSelectedPage }) => {
  const inpuStyles =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const submitHandler = async (e: React.MouseEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            labore distinctio quae velit ea, quaerat laboriosam ad cum eos quasi
            nisi voluptatem ratione nesciunt? Dolorem magnam mollitia vero
            quidem quos?
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form
              target="_blank"
              onSubmit={submitHandler}
              action="https://formsubmit.co/d2923a25b225ccdeb3eb536137f34798"
              method="POST"
            >
              <input
                className={inpuStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required!"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters!"}
                </p>
              )}
              <input
                className={inpuStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required!"}
                  {errors.email.type === "pattern" && "Invalid email address!"}
                </p>
              )}
              <textarea
                className={inpuStyles}
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required!"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters!"}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={image}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContacUs;
