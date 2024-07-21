"use client";
import { Footer } from "@ui/Footer";
import { Header } from "@ui/Header";
import { Button } from "@ui/button/Button";
import Image from "next/image";

const story = {
  image: "/blog-hero.png",
  heading: "Using Conversational AI Platforms to Find the Real ROI",
  des: "As conversational AI reshapes business processes, major platforms like OneReach.ai and Cognigy are emerging as pivotal players in scalable implementations.",
  readTime: "5 min read",
  author: "john doe",
};

const LatestStories = () => {
  return (
    <>
      <section className="first-section w-full px-20">
        <div className="my-5 flex items-center gap-8">
          <h1 className="text-lg font-semibold">Latest Stories</h1>
          <div className="ml-4 h-2 flex-grow border-t border-white"></div>
        </div>
        <div className="flex gap-8">
          <div className="w-[70%]">
            <div className="flex h-full flex-col overflow-hidden rounded-lg bg-transparent shadow-lg">
              <img
                src="/blog-hero.png"
                alt="First Story"
                className="h-[650px] w-full object-cover"
              />
              <div className="mt-3 flex flex-grow flex-col py-6">
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Using Conversational AI Platforms to Find the Real ROI
                </h3>
                <p className="mb-4 flex-grow text-gray-600">
                  As conversational AI reshapes business processes, major
                  platforms like OneReach.ai and Cognigy are emerging as pivotal
                  players in scalable implementations.
                </p>
                <div className="flex gap-3  text-sm text-gray-500">
                  <span className="text-purple-500">5 min read</span>|{" "}
                  <span>John Doe</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] space-y-8">
            <StoryCard story={story} />
            <StoryCard story={story} />
          </div>
        </div>
      </section>
      <section className="second-section my-20 mt-4 flex flex-row gap-6  px-20">
        <StoryCard story={story} />
        <StoryCard story={story} />
        <StoryCard story={story} />
      </section>
    </>
  );
};

const ResearchBlogs = () => {
  return (
    <section className="my-20 px-20">
      <div className="my-5 flex items-center gap-8">
        <h1 className="text-lg font-semibold">Research Blogs</h1>
        <div className="ml-4 h-2 flex-grow border-t border-white"></div>
      </div>
      <div>
        <div className="flex flex-row gap-6">
          <div className="w-[55%]">
            <StoryCard story={story} />
          </div>
          <div className="w-[45%]">
            <StoryCard story={story} />
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <div className="w-[45%]">
            <StoryCard story={story} />
          </div>
          <div className="w-[55%]">
            <StoryCard story={story} />
          </div>
        </div>
      </div>
    </section>
  );
};

const StoryCard = ({ story }: { story: any }) => {
  console.log(story);
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-black shadow-lg">
      <img
        src={story.image}
        alt="Third Story"
        className="h-56 w-full object-cover"
      />
      <div className="flex flex-grow flex-col py-6">
        <h3 className="mb-2 text-lg font-semibold text-white">
          {story.heading}
        </h3>
        <p className="mb-4 flex-grow text-gray-600">{story.des} </p>
        <div className="flex gap-3  text-sm text-gray-500">
          <span className="text-purple-500">{story.readTime}</span>|{" "}
          <span>{story.author}</span>
        </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Header />
      <section className="blog-hero">
        <h1 className="mt-20 text-center text-5xl font-bold">
          Taming the wild west of
          <br /> AI-generated search results
        </h1>
        <Image
          src={"/blog-hero.png"}
          alt="hero-image"
          className="mt-20 h-auto w-full"
          width={1500}
          height={500}
        />
        <div className="blog-hero-info my-12 flex flex-row gap-6 px-20">
          <div>
            <h3 className="mb-2 font-semibold">
              <span className="mr-2 font-medium">By:</span>Sancha Brodsky
            </h3>
            <button className="rounded-sm border-0 bg-[#5A4595] px-2">
              Artificial Intelligence
            </button>
          </div>
          <div>
            Companies are racing to integrate generative AI into their search
            engines, hoping to revolutionize the way users access information.
          </div>
        </div>
      </section>
      <LatestStories />
      <ResearchBlogs />
      <hr />
      <Footer />
    </div>
  );
};

export default BlogPage;
