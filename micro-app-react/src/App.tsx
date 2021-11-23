/*
 * @Author: kingford
 * @Date: 2021-11-23 14:38:23
 * @LastEditTime: 2021-11-23 19:09:22
 */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import List from "./pages/list";

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "/";
const App = () => {
  // 设置路由命名空间
  return (
    <BrowserRouter basename={BASE_NAME}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/list" element={<List></List>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
