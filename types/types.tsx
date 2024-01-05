export type Comment = {
  _id: string,
  author: string,
  comment: string,
  createdAt: string,
  blog: {
    _id: string,
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
    _id: string;
  }
}

export type Tag = {
  _id: string,
  name: string
}