export type Comment = {
  _id: string,
  author: string,
  comment: string,
  blog: {
    title: string,
  }
}

export type Params = {
  params: {
    id: string
  }
}

export type Blog = {
  _id: string,
  title: string,
  imageUrl: string,
  body: string,
  blogTag: {
    name: string;
  }
}