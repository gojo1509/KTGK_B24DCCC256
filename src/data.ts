export type Category =
  | "Công nghệ"
  | "Du lịch"
  | "Ẩm thực"
  | "Đời sống"
  | "Khác";

export interface Post {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: Category;
  createdAt: string;
}

export const uid = () => Math.random().toString(36).slice(2, 9);

export const initialPosts: Post[] = [
  {
    id: uid(),
    title: "Bài viết mẫu đầu tiên",
    author: "Admin",
    thumbnail: "https://picsum.photos/640/360",
    content: "Đây là nội dung mẫu cho bài viết đầu tiên.",
    category: "Công nghệ",
    createdAt: new Date().toISOString(),
  },
];
