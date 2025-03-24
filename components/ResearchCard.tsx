import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


type Props = {
  index: number;
  paper: {
    title: string;
    type: string;
    image: JSX.Element;
    abstract: string;
    tags: string[];
    PaperUrl: string;
    bgColor: string;
  };
};


const ProjectCard: React.FC<Props> = ({ index, paper }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const even = index % 2 === 0 ? true : false;
  const [expanded, setExpanded] = useState(false);

  // 项目卡片的动画效果
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });
    tl.fromTo(
      q(".project-image"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".project-text"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".project-desc"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      )
      .fromTo(
        q(".project-tags"),
        { y: -40 },
        { y: 0, stagger: 0.1, ease: "Elastic.easeOut" },
        "<25%"
      );
  }, []);

  
  return (
    <div ref={sectionRef} className={`md:basis-1/2 md:px-8 py-2 md:py-4`}>
      <div className={`project-card project-card-${index}`}>
        {/* 项目图片 */}
        <div className="overflow-hidden">
          <div
            className={`project-image ${paper.bgColor} relative aspect-[16/9]`}
          >
            {paper.image}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="project-text flex items-center justify-between">

            {/* 项目名称 */}
            <h3 className=" text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium">
              <a
                href={paper.PaperUrl}
                title={`See live demo of '${paper.title}'`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium hover:underline"
              >{paper.title}</a>
            </h3>
          </div>
        </div>

        {/* 项目简介 */}
        <div className="overflow-hidden">
          <p className={`project-desc ${expanded ? "" : "line-clamp-2"}`}>
            {paper.abstract}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-500 hover:underline mt-2"
          >
            {expanded ? "Show less" : "Learn more..."}
          </button>
        </div>

        {/* 项目标签 */}
        <ul
          aria-label={`Tech Stack used in ${paper.type}`}
          className={`flex flex-wrap mt-2 mb-4 md:mt-2 md:mb-6 text-sm overflow-hidden`}
        >
          {paper.tags.map((tag) => (
            <li
              key={tag}
              className={`project-tags mr-2 my-1 bg-[#E2EFEF] dark:bg-carddark py-1 px-2 rounded`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
