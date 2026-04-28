'use client'

import { motion, useInView } from "framer-motion";
import Project from "./Project";
import { useRef } from "react";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },  // Start section hidden and offset downwards
    visible: { opacity: 1, y: 0 }, // Transition to visible with no vertical offset
};

const projectVariants = {
    hidden: { opacity: 0, y: 20 }, // Start projects hidden and slightly offset downwards
    visible: { opacity: 1, y: 0 }, // Transition to visible with no vertical offset
};

export const Projects = ({ id }: { id: string }) => {
    const sectionRef = useRef(null);
    const sectionInView = useInView(sectionRef, { amount: 0.1 });

    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);

    const project1InView = useInView(project1Ref, { amount: 0.1 });
    const project2InView = useInView(project2Ref, { amount: 0.1 });
    const project3InView = useInView(project3Ref, { amount: 0.1 });
    const project4InView = useInView(project4Ref, { amount: 0.1 });
    const project5InView = useInView(project5Ref, { amount: 0.1 });


    return (
        <motion.div
            id={id}
            ref={sectionRef}
            className="min-h-[100vh] bg-black flex flex-col items-start justify-center px-7 sm:px-14 py-20"
            variants={sectionVariants}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            transition={{ duration: 2, ease: "easeInOut" }}
        >
            <div className=" text-2xl lg:text-3xl pb-3 font-black text-left mb-10 lg:mb-14">
                Selected Works.
            </div>

            <motion.div
                ref={project1Ref}
                className="mb-12"
                variants={projectVariants}
                initial="hidden"
                animate={project1InView ? "visible" : "hidden"}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
            >
                {/* <Project
                    index={1}
                    name="Sales AI"
                    description="A tool that helps automate LinkedIn outreach. Users enter a profile URL, and the bot generates personalized message options, making lead generation faster and more effective."
                    logo="/SalesAI-logo.png"
                    image="/SalesAI.png"
                    projectLink="https://sales-ai-five.vercel.app"
                    shadowColor="#4E1CDB"
                    iconList={["/postgresql.svg", "/nextjs.svg", "/openai.svg", "/postman.svg", "/js.svg"]}
                /> */}
                <Project
                    index={1}
                    name="GStudy"
                    description="Gstudy is an AI-driven study platform designed to help students learn smarter, not harder. With powerful AI tools, Gstudy transforms lecture notes, textbooks, YouTube videos, and PDFs into structured summaries and interactive flashcards."
                    logo="/GStudy-logo.png"
                    image="/GStudy.png"
                    // projectLink="https://gstudy.pro"
                    projectLink="https://g-study.vercel.app"
                    pictureOnLeft={true}
                    shadowColor="#1063FF"
                    iconList={["/supabase.svg", "/nextjs.svg", "/prisma.svg", "/pwa.svg", "/typescript.svg"]}
                />
            </motion.div>

            {/* <motion.div
                ref={project2Ref}
                className="mb-12"
                variants={projectVariants}
                initial="hidden"
                animate={project2InView ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            >
                <Project
                    index={2}
                    name="Admark AI"
                    description="A social media management platform that helps teams plan, create, and publish content faster. Admark AI combines AI-powered idea generation, a drag-and-drop content calendar, and multi-channel post scheduling in one workflow."
                    logo="/Pilser-logo-copy.png"
                    image="/Pilser.png"
                    projectLink="https://pilser.com/"
                    pictureOnLeft={true}
                    shadowColor="#1063FF"
                    iconList={["/supabase.svg", "/nextjs.svg", "/prisma.svg", "/pwa.svg", "/typescript.svg"]}
                />
            </motion.div> */}

            <motion.div
                ref={project3Ref}
                className="mb-12"
                variants={projectVariants}
                initial="hidden"
                animate={project3InView ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            >
                <Project
                    index={3}
                    name="Grantly"
                    description="A platform for discovering and applying for grants across Australia. Grantly helps users search relevant funding opportunities, review eligibility criteria, and streamline the grant application process in one place."
                    logo="/Grantly-logo.png"
                    image="/Grantly.png"
                    projectLink="https://grantly.granton.io/"
                    pictureOnLeft={true}
                    shadowColor="#1063FF"
                    iconList={["/supabase.svg", "/nextjs.svg", "/prisma.svg", "/pwa.svg", "/typescript.svg"]}
                />
            </motion.div>

            <motion.div
                ref={project4Ref}
                className="mb-12"
                variants={projectVariants}
                initial="hidden"
                animate={project4InView ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            >
                <Project
                    index={4}
                    name="Sales AI"
                    description="A tool that helps automate LinkedIn outreach. Users enter a profile URL, and the bot generates personalized message options, making lead generation faster and more effective."
                    logo="/SalesAI-logo.png"
                    image="/SalesAI.png"
                    projectLink="https://sales-ai-five.vercel.app"
                    shadowColor="#4E1CDB"
                    iconList={["/postgresql.svg", "/nextjs.svg", "/openai.svg", "/postman.svg", "/js.svg"]}
                />
            </motion.div>

            <motion.div
                ref={project5Ref}
                className="mb-12"
                variants={projectVariants}
                initial="hidden"
                animate={project5InView ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            >
                <Project
                    index={5}
                    name="Pilser"
                    description="A platform for running security and quality assessments. Users can use or customize templates, generate reports, assign tasks, and track everything in one place."
                    logo="/Pilser-logo-copy.png"
                    image="/Pilser.png"
                    projectLink="https://pilser.com/"
                    pictureOnLeft={true}
                    shadowColor="#1063FF"
                    iconList={["/supabase.svg", "/nextjs.svg", "/prisma.svg", "/pwa.svg", "/typescript.svg"]}
                />
            </motion.div>
        </motion.div>
    );
}
