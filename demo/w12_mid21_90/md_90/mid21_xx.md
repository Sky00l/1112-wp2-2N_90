# (30%) Web 程式設計 2N 期中上機考-2 -- 斷網考試

##### 2024-4-17 at E201

#### Note:

1. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
2. iClass 上請繳交 mid21_xx.md, mid21_xx.pdf，還有 client_xx.zip, server_xx.zip 四個檔案 (node_modules 請刪除)
3. 請直接將答案寫在 mid21_xx.md 上，老師實作的圖片放在 mid21_htc.pdf 上，請依照老師所給的圖片來實作並標註
4. 跟期中考相關的檔案及目錄名稱有 xx 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
5. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
6. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (?, ?)

##### Mid21 斷網題目 (30%)

- P1 (5%): ? 分
- P2 (5%): ? 分
- P3 (5%): ? 分
- P4 (5%): ? 分
- P5 (5%): ? 分
- P5 (6%): ? 分

##### 總分: ? 分

---

## (5%) P1: server 端顯示規定的 6 筆 blog 資料

請用老師在 server_xx 所提供的 dataBlogs_xx.js，建立 json 陣列，名稱為 blogs_xx，其資料請自 all_blogs_xx.js 中取得。 比較學號最後一碼，比對 id，往下取 5 筆，如果到底，則循環回到第 1 筆繼續往下取。學號最後一碼如為 0，則從第 1 筆往下取 5 筆。下圖是以學號最後一碼為 7 當成範例。

![mid21-p1-1.png](mid21-p1-1.png)

請在 server_xx 端實作路由 /api/blogs，能透過 Chrome 顯示如上 blogs_xx 之 6 筆資料，如下

![mid21-p1-2.png](mid21-p1-2.png)

#### Your Answer

##### => (2%) 放在 dataBlogs_xx.js 上的 6 筆 blog 資料

![mid21-p1-3.png](mid21-p1-3.png)

##### => (3%) 透過 Chrome 路由 /api/blogs 顯示 6 筆 blogs 資料

![mid21-p1-4.png](mid21-p1-4.png)

---

#### (5%) P2: React 端讀取 Node 端的 blogs 資料

React 端，請在 Mid2NodeBlog_xx.jsx 中透過 React Query 及路由 /mid2Blog_xx 呼叫後端 API http://localhost:5000/api/blogs 可以讀取 blogs 資料並顯示在前端。

##### => 前端 Chrome 顯示 6 筆 blog 資料 (透過 DevTools console)

![mid21-p2-1.png](mid21-p2-1.png)

##### => 前端 DevTools (Network) 及後端終端機 (terminal) 分別顯示成功存取 6 筆 blog 資料

![mid21-p2-2.png](mid21-p2-2.png)

#### Your Answer

##### => 前端 Chrome 顯示 6 筆 blog 資料 (透過 DevTools console)

![mid21-p2-3.png](mid21-p2-3.png)

##### => 前端 DevTools (Network) 及後端終端機 (terminal) 分別顯示成功存取 6 筆 blog 資料

![mid21-p2-4.png](mid21-p2-4.png)

##### => React 前端相對應的 code

![mid21-p2-5.png](mid21-p2-5.png)

---

#### (5%) P3: 實作 ClearAll (前端、後端要配合)

請在 React 前端，透過路由 DELETE /api/blogs/clearAll 呼叫 Node 後端，並能夠將全部 blogs 清除

##### => 前端 DevTools (Network) 及後端終端機 (terminal) 分別顯示如下圖

![mid21-p3-1.png](mid21-p3-1.png)

#### Your Answer

##### => ClearAll 前端與後端截圖，如上圖

![mid21-p3-2.png](mid21-p3-2.png)

##### => ClearAll 後端的 code

![mid21-p3-3.png](mid21-p3-3.png)

##### => ClearAll 前端的 code

![mid21-p3-4.png](mid21-p3-4.png)

---

#### (5%) P4: 實作 loadAll (前端、後端要配合)

請在 React 前端，透過路由 PATCH /api/blogs/loadAll 呼叫 Node 後端，並能夠還原 P1 題的 6 筆 blogs，請將 loadAll 視為特別的 id 來處理

##### => 前端 DevTools (Network) 及後端終端機 (terminal) 分別顯示如下圖

![mid21-p4-1.png](mid21-p4-1.png)

#### Your Answer

##### => loadAll 前端與後端截圖，如上圖

![mid21-p3-2.png](mid21-p3-2.png)

##### => loadAll Node 後端的 code

![mid21-p3-3.png](mid21-p3-3.png)

##### => loadAll React 前端的 code

![mid21-p3-4.png](mid21-p3-4.png)

---

#### (5%) P5: 實作 Add Blog

請加入一筆資料，id=10，title 是你的姓名及學號，圖片檔名是 my-1.jpg，category 是 lifestyle，顯示如下圖

##### => 前端 DevTools (Network) 及後端終端機 (terminal) 分別顯示如下圖

![mid21-p5-1.png](mid21-p5-1.png)

#### Your Answer

##### => Add Blog 之前端與後端截圖，如上圖

![mid21-p5-2.png](mid21-p5-2.png)

##### => Node 後端的 code

![mid21-p5-3.png](mid21-p5-3.png)

##### => React 前端的 code

![mid21-p5-4.png](mid21-p5-4.png)

---

#### (5%) P6: 實作 Del

請在某一個 blog 之右下角，按下 Del 按鈕，即可刪除該 blog。下圖是將 P5 新增的資料刪除。

##### => 前端 DevTools (Network) 及後端終端機 (terminal) 分別顯示如下圖

![mid21-p6-1.png](mid21-p6-1.png)

#### Your Answer

##### => Del 之 之前端與後端截圖，如上圖

![mid21-p6-2.png](mid21-p6-2.png)

##### => Node 後端的 code

![mid21-p6-3.png](mid21-p6-3.png)

##### => React 前端的 code

![mid21-p6-4.png](mid21-p6-4.png)

---
