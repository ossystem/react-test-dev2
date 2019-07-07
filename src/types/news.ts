export interface Post {
  title: string,
  text: string,
  timestamp: number,
};

export interface News {
  news: Post[]
};
