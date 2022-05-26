import Axios from "axios";

const createBlog = async (data) =>
  await Axios.post(`${process.env.VUE_APP_ROOT_API2}/blog/create`, data);

const getAllBlogs = async () =>
  await Axios.get(`${process.env.VUE_APP_ROOT_API2}/allblogs`);

const BlogOperations = () => {
  return {
    createBlog,
    getAllBlogs,
  };
};

export default BlogOperations;
