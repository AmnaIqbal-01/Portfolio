import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CARD_GAP = 28;

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  category,
}) => {
  return (
    <div
      data-project-card
      className='w-[320px] sm:w-[360px] shrink-0 h-full'
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl h-full flex flex-col'
      >
        <div className='relative w-full h-[230px] shrink-0'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-between items-start m-3 card-img_hover'>
            {category && (
              <span className='black-gradient px-3 py-1 rounded-full text-[11px] text-white font-medium tracking-wide'>
                {category}
              </span>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-auto'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex flex-col flex-1'>
          <h3 className='text-white font-bold text-[24px] leading-[30px] min-h-[60px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px] leading-[22px] h-[198px] line-clamp-9 overflow-hidden'>
            {description}
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 min-h-[72px] content-start shrink-0'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const InfiniteProjectCarousel = () => {
  const scrollRef = useRef(null);
  const isLooping = useRef(false);

  const loopedProjects = useMemo(
    () => [
      ...projects.map((project, index) => ({
        ...project,
        loopKey: `set-a-${index}`,
      })),
      ...projects.map((project, index) => ({
        ...project,
        loopKey: `set-b-${index}`,
      })),
      ...projects.map((project, index) => ({
        ...project,
        loopKey: `set-c-${index}`,
      })),
    ],
    []
  );

  const getSetWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;

    const card = container.querySelector("[data-project-card]");
    if (!card) return 0;

    const cardWidth = card.getBoundingClientRect().width;
    return projects.length * cardWidth + (projects.length - 1) * CARD_GAP;
  }, []);

  const normalizeScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || isLooping.current) return;

    const setWidth = getSetWidth();
    if (!setWidth) return;

    if (container.scrollLeft < setWidth) {
      isLooping.current = true;
      container.style.scrollBehavior = "auto";
      container.scrollLeft += setWidth;
      container.style.scrollBehavior = "";
      isLooping.current = false;
    } else if (container.scrollLeft >= setWidth * 2) {
      isLooping.current = true;
      container.style.scrollBehavior = "auto";
      container.scrollLeft -= setWidth;
      container.style.scrollBehavior = "";
      isLooping.current = false;
    }
  }, [getSetWidth]);

  useLayoutEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const initScroll = () => {
      const setWidth = getSetWidth();
      if (setWidth) {
        container.scrollLeft = setWidth;
      }
    };

    initScroll();
    requestAnimationFrame(initScroll);
  }, [getSetWidth]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => normalizeScroll();

    const handleResize = () => {
      const setWidth = getSetWidth();
      if (!setWidth) return;

      const relativeOffset = container.scrollLeft % setWidth;
      container.scrollLeft = setWidth + relativeOffset;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("scrollend", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scrollend", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [getSetWidth, normalizeScroll]);

  return (
    <div
      ref={scrollRef}
      className='projects-scroll px-6 sm:px-16 pb-4'
    >
      <div className='flex gap-7 w-max items-stretch'>
        {loopedProjects.map((project) => (
          <ProjectCard key={project.loopKey} {...project} />
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A selection of native iOS applications I have built and contributed to — spanning
          client platforms, personal SwiftUI projects, and production-grade mobile architecture.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='mt-20 -mx-6 sm:-mx-16'
      >
        <InfiniteProjectCarousel />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
