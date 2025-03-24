{/* 公共库 */}
import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

{/* 组件 */}
import ProjectCard from "@/components/ProjectCard";

{/* 加载监听和动画 */}
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

{/* 加载项目图片 */}
import Expressway from "public/projects/Expressway.webp";


const ProjectSection: React.FC = () => {
  {/* 监听事件 用于顶部栏跳转 */}
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">

      {/*Featured Projects*/}
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      {/*小字说明*/}
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        "Talk is cheap. Show me the code"? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      {/*项目列表*/}
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      {/*下体字*/}
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Yunheng-Wang"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};


{/*项目内容数组*/}
{
  /*
  title -> 标题
  type  -> 项目类型（未显示）
  image -> 图片
  desc -> 基本描述
  tags -> 标签
  liveUrl -> 项目主页网址
  codeUrl -> 项目github源代码网址
  bgColor -> 背景颜色（未显示）
  githubApi -> 获取项目star数的api
  */
}
const projects = [
  {
    title: "Expressway",
    type: "complex network",
    image: (
      <Image
        src={Expressway}
        sizes="100vw"
        fill
        alt="Expressway"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "🚀 Expressway network planning 🚦 project in Chongqing🛤️, Sichuan Province🐼",
    tags: ["python", "networkx", "complex network"],
    liveUrl: "https://github.com/Yunheng-Wang/Expressway",
    codeUrl: "https://github.com/Yunheng-Wang/Expressway",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Yunheng-Wang/Expressway",
  },
  {
    title: "Expressway",
    type: "complex network",
    image: (
      <Image
        src={Expressway}
        sizes="100vw"
        fill
        alt="Expressway"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "🚀 Expressway network planning 🚦 project in Chongqing🛤️, Sichuan Province🐼",
    tags: ["python", "networkx", "complex network"],
    liveUrl: "https://github.com/Yunheng-Wang/Expressway",
    codeUrl: "https://github.com/Yunheng-Wang/Expressway",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Yunheng-Wang/Expressway",
  },
  {
    title: "Expressway",
    type: "complex network",
    image: (
      <Image
        src={Expressway}
        sizes="100vw"
        fill
        alt="Expressway"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "🚀 Expressway network planning 🚦 project in Chongqing🛤️, Sichuan Province🐼",
    tags: ["python", "networkx", "complex network"],
    liveUrl: "https://github.com/Yunheng-Wang/Expressway",
    codeUrl: "https://github.com/Yunheng-Wang/Expressway",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Yunheng-Wang/Expressway",
  },
  {
    title: "Expressway",
    type: "complex network",
    image: (
      <Image
        src={Expressway}
        sizes="100vw"
        fill
        alt="Expressway"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "🚀 Expressway network planning 🚦 project in Chongqing🛤️, Sichuan Province🐼",
    tags: ["python", "networkx", "complex network"],
    liveUrl: "https://github.com/Yunheng-Wang/Expressway",
    codeUrl: "https://github.com/Yunheng-Wang/Expressway",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Yunheng-Wang/Expressway",
  },
  {
    title: "Expressway",
    type: "complex network",
    image: (
      <Image
        src={Expressway}
        sizes="100vw"
        fill
        alt="Expressway"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "🚀 Expressway network planning 🚦 project in Chongqing🛤️, Sichuan Province🐼",
    tags: ["python", "networkx", "complex network"],
    liveUrl: "https://github.com/Yunheng-Wang/Expressway",
    codeUrl: "https://github.com/Yunheng-Wang/Expressway",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Yunheng-Wang/Expressway",
  },
];

export default ProjectSection;
