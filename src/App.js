import PostsList from "./components/posts/PostsList";
import AddPostForm from "./components/posts/AddPostForm";
import SinglePostPage from "./components/posts/SinglePostPage";
import EditPostForm from "./components/posts/EditPostForm";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
