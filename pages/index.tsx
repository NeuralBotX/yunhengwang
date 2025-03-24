import type { GetStaticProps, NextPage } from "next";

// 组件
import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

// 套件
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import ContactSection from "@/sections/ContactSection";
import HeroSection from "@/sections/HeroSection";
import ResearchSection from "@/sections/ResearchSection";

import { getAllPosts } from "utils/api";
import { MdxMeta } from "../pages/blog/posts/[slug]";


type Props = {
  blogPosts: MdxMeta[];
};


export const meta = {
  description:
    "Sat Naing is a full-stack developer based in Yangon, Myanmar. He is passionate about writing codes and developing web applications to solve real-life challenges.",
  author: "Yunheng Wang",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  siteName: "Yunheng Wang",
  imageAlt: "Sat Naing portfolio website",
};


const Home: NextPage<Props> = ({ blogPosts }) => {
  return (
    <>
      <AppHead
        title="Yuneheng Wang - A Tech Enthusiast"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Yunheng-Wang</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          
          <SkipToMain />
          
          <Header />

          <main id="main">
            {/*part : front*/}
            <HeroSection /> 

            {/*part : who am i*/}
            <AboutSection />
            {/*part : Featured Projects*/}
            <ProjectSection />

            {/*part : Featured researchs*/}
            <ResearchSection />

            {/*part : Blog*/}
            <BlogSection posts={blogPosts} />
            {/*part : contact*/}
            <ContactSection />
          </main>

          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = getAllPosts([
    "coverImage",
    "coverImageAlt",
    "slug",
    "title",
    "excerpt",
    "datetime",
    "featured",
  ]);

  return {
    props: {
      blogPosts,
    },
  };
};

export default Home;
