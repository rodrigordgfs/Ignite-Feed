import { Author } from "./IAuthor";
import { Content } from "./IContent";

export interface PostProps {
  id?: string;
  author: Author;
  content: Content[];
  tags: string[];
  publishedAt: Date;
}
