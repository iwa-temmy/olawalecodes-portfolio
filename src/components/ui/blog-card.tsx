import { BlogPost } from "../../utils/types";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <a
      href={post.url}
      className="group relative block aspect-video w-full overflow-hidden rounded-[20px]"
    >
      <img
        src={post.image}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        alt={post.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="text-white/60 text-xs">{post.date}</span>
        <h3 className="text-white font-bold mt-1">{post.title}</h3>
      </div>
    </a>
  );
};

export default BlogCard;
