import BlogCard from "./ui/blog-card";
import { blogs } from "../utils/constant";
import { useScrollReveal } from "../utils/use-scroll-reveal";

const Blog = () => {
  const gridRef = useScrollReveal<HTMLDivElement>({ y: 50, stagger: 0.15 });

  return (
    <section className="blog" id="blog">
      <div className="flex flex-col gap-5 items-center pb-12 md:pb-16">
        <span className="font-mono uppercase tracking-[0.3em] text-white/40 text-xs md:text-sm">
          ( Writing )
        </span>
        <h1 className="text-white text-center text-3xl md:text-6xl font-black">
          Thoughts
        </h1>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
