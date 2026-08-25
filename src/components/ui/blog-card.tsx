import { BlogPost } from "../../utils/types";
import Icon from "./icon";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <a
      href={post.url}
      className="text-white bg-dark p-4 rounded-[20px] shadow-md flex flex-col md:flex-row gap-4"
    >
      <img
        src={post.image}
        className="w-full max-h-40 md:w-40 md:h-40 shrink-0 object-cover rounded-2xl"
        alt={post.title}
      />
      <div className="flex flex-col">
        <span className="text-white/40 text-xs">{post.date}</span>
        <h2 className="text-white font-bold mt-1">{post.title}</h2>
        <p className="text-white/60 text-sm font-normal mt-2">
          {post.description}
        </p>
        <span className="text-white font-black text-sm flex items-center gap-2 mt-auto pt-3">
          Read more
          <Icon icon="fluent:arrow-right" height={14} width={14} />
        </span>
      </div>
    </a>
  );
};

export default BlogCard;
