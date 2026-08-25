import { useTransition, animated } from "@react-spring/web";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogCard from "./ui/blog-card";
import { blogs } from "../utils/constant";
import { usePagination } from "../utils/use-pagination";

const PER_PAGE = 2;

const Blog = () => {
  const { page, totalPages, direction, next, prev } = usePagination(
    blogs.length,
    PER_PAGE
  );

  const transitions = useTransition(page, {
    key: page,
    from: { opacity: 0, transform: `translate3d(${direction * 60}%,0,0)` },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: `translate3d(${direction * -60}%,0,0)`,
      position: "absolute",
    },
    config: { tension: 280, friction: 32 },
  });

  return (
    <section className="blog" id="blog">
      <div className="flex flex-col gap-5 items-center pb-4">
        <h1 className="text-white/30 text-center text-3xl md:text-7xl font-black">
          Blog
        </h1>
        <div className="bg-[#212121] h-2 w-44 rounded-3xl">
          <div className="bg-white w-1/2 h-full rounded-3xl" />
        </div>
      </div>
      <div className="relative overflow-hidden">
        {transitions((style, item) => (
          <animated.div
            style={style}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            {blogs
              .slice((item - 1) * PER_PAGE, item * PER_PAGE)
              .map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
          </animated.div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-auto mb-10">
        <button
          className="text-black h-8 flex justify-center items-center w-8 rounded-full bg-white disabled:bg-[#1F1F1F] disabled:text-white"
          onClick={prev}
          disabled={page === 1}
        >
          <ArrowLeft />
        </button>
        <span className="text-white text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          className="text-black h-8 flex justify-center items-center w-8 rounded-full bg-white disabled:bg-[#1F1F1F] disabled:text-white"
          onClick={next}
          disabled={page === totalPages}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Blog;
