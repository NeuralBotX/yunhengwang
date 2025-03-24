{/* 公共库 */}
import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

{/* 组件 */}
import ResearchCard from "@/components/ResearchCard";

{/* 加载监听和动画 */}
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

{/* 加载项目图片 */}
import paper_k_shell from "public/researchs/k_shell iteration factor.webp";


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
    projectSection && onSectionChange!("researchs");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="researchs" className="section">

      {/*Featured Projects*/}
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Researchs</h2>
        </RoughNotation>
      </div>
      {/*小字说明*/}
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        I am currently engaged in research on deep learning and complex networks.. <br />
        Here is a summary of my research achievements.
      </span>
      {/*项目列表*/}
      <div className="flex flex-wrap">
        {researchs.map((paper, index) => (
          <ResearchCard key={paper.title} index={index} paper={paper} />
        ))}
      </div>
      {/*下体字*/}
      <div className="others text-center mb-16">
        To learn more about my research, visit my {" "}
        <a
          href=""
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          Google Scholar profile.
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
  */
}
const researchs = [
  {
    title: "📜Identifying influential nodes through an improved k-shell iteration factor model (IF: 7.5, CAS: Q1)",
    type: " Cumulative Structural Iteration Factor Ranking Method, CSRM",
    image: (
      <Image
        src={paper_k_shell}
        sizes="100vw"
        fill
        alt="CSRM"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    abstract: "This paper proposes a key node identification method called the Cumulative Structural Iteration Factor Ranking Method. Based on the traditional k-core decomposition, this method incorporates structural information in the residual network and the role of neighborhood correlation in information propagation. By utilizing clustering coefficient and Pearson correlation coefficient for measurement, it effectively addresses the issue of overlapping information propagation in conventional approaches.",
    tags: ["complex network"],
    PaperUrl: "https://www.sciencedirect.com/science/article/pii/S0957417423025794",
    bgColor: "bg-[#9FD0E3]",
  },

];

export default ProjectSection;
