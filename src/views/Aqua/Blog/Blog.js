import Axios from "axios";

const createBlog = async (data) =>
  await Axios.post(`${process.env.VUE_APP_ROOT_API_AQUA}/blog/create`, data);

const BlogOperations = () => {
  return {
    createBlog,
  };
};

export default BlogOperations;
