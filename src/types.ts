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
export const todayISO = () => new Date().toISOString();
