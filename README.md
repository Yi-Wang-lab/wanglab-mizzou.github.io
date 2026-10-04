# Wang Lab 网站：上线与编辑说明

这个文件夹就是整个实验室网站。不需要会写代码，跟着下面三部分做就行：

1. **免费上线**（约 20 分钟，只做一次）
2. **让谷歌搜得到**（约 10 分钟，只做一次）
3. **以后怎么改**（加新闻、加论文、加成员、换照片）

> 这个说明文件（README.md）不会显示在网站上。

---

## 文件夹里有什么

| 文件 | 内容 |
|---|---|
| `index.html` | 首页：轮播大图、实验室简介、招生卡片、新闻 |
| `people.html` | 成员：PI 介绍、研究生、本科生、毕业生 |
| `research.html` | 三个研究方向 + 资助方 |
| `publications.html` | 期刊论文、会议论文、专利（按年份） |
| `photos.html` | 相册 |
| `contact.html` | 联系方式 + 招生说明 |
| `images/` | 所有图片。`images/people/` 放头像，`images/photos/` 放相册照片 |
| `css/`、`js/` | 网站样式和小功能，一般不用动 |
| `404.html`、`sitemap.xml`、`robots.txt` | 给浏览器和搜索引擎用的，一般不用动 |

每个 html 文件里，凡是可以改的地方，上方都有一段以 **✏️** 开头的中文说明。`<!-- -->` 之间的文字是注释，不会显示在网页上。

---

## 第一部分：免费上线（GitHub Pages）

GitHub Pages 免费、稳定、没有广告，很多大学实验室都用它。

### 1. 注册 GitHub 账号

- 打开 <https://github.com/signup>，用邮箱注册（建议用学校邮箱）。
- **用户名会出现在网址里**。用户名填 `wanglab-mizzou`，网址就是 `https://wanglab-mizzou.github.io`。
- 如果这个名字被占用了，换一个（比如 `wang-lab-mizzou`），并把本说明里所有 `wanglab-mizzou` 换成你的用户名。

### 2. 新建一个仓库（repository）

- 登录后点右上角 **+** → **New repository**。
- **Repository name** 填 `你的用户名.github.io`，例如 `wanglab-mizzou.github.io`，一个字母都不能错。
- 选 **Public**（公开）。其他选项都不用勾。
- 点 **Create repository**。

### 3. 上传网站文件

- 先把 `wanglab-website.zip` 解压。
- 在刚建好的仓库页面，点 **uploading an existing file** 这个链接（或者 **Add file → Upload files**）。
- 打开解压后的文件夹，**全选里面的所有东西**（Windows：Ctrl+A；Mac：Command+A），拖进网页的上传框。
  - 要拖的是"文件夹里面的东西"，不是整个文件夹本身，否则网址会多出一层。
  - 拖完后，列表里应该能看到 `index.html`、`css`、`images`、`js` 等。
- 拉到页面最下面，点绿色的 **Commit changes**。

### 4. 打开网站

- 进入仓库的 **Settings**（设置）→ 左侧菜单 **Pages**。
- 在 **Build and deployment** 下面：Source 选 **Deploy from a branch**，Branch 选 **main**，文件夹选 **/ (root)**，点 **Save**。（如果已经是这样，就不用改。）
- 等 1–3 分钟，刷新这个页面，上方会出现 "Your site is live at https://wanglab-mizzou.github.io/"。点开就是你的网站。

### 5. 如果你用的不是 `wanglab-mizzou` 这个名字

用第三部分的方法，改两个小文件里的网址：

- `sitemap.xml`：把 6 处 `https://wanglab-mizzou.github.io/` 换成你的网址。
- `robots.txt`：最后一行的网址同样换掉。

---

## 第二部分：让谷歌搜得到

网站上线后，谷歌一般要几天到两周才会收录。下面几步能加快收录，也能让排名更靠前。

### 1. 在 Google Search Console 登记（最重要）

1. 打开 <https://search.google.com/search-console>，用 Google 账号登录。
2. 选 **网址前缀（URL prefix）**，填 `https://wanglab-mizzou.github.io/`，点 **继续**。
3. 验证方式选 **HTML 文件**：下载它给的文件（名字类似 `google1234abcd.html`），按第三部分"上传照片"的同样方法，传到仓库最外层（和 `index.html` 放在一起），再回来点 **验证**。
   - 也可以选 **HTML 标记（HTML tag）**：把它给的那一行 `<meta ...>`，粘贴到 `index.html` 里写着"Google Search Console 验证代码贴在这一行下面"的位置。
4. 验证成功后：
   - 左侧菜单 **站点地图（Sitemaps）** → 填 `sitemap.xml` → **提交**。
   - 在最上方的搜索框粘贴首页网址 → 点 **请求编入索引（Request indexing）**。

### 2. 让别的网站链接到你（对排名帮助最大）

- **学院的教师主页**：你在 engineering.missouri.edu 上的个人页目前没有网站链接。给系里或学院负责网站的老师发邮件，请他们加上实验室网址。来自 missouri.edu 的链接对谷歌分量很重。
- **Google Scholar**：编辑个人资料，在 **Homepage（主页）** 一栏填实验室网址。
- 邮件签名、LinkedIn、ResearchGate、ORCID、CV、报告的最后一页，都写上网址。

### 3. 可选

- **Bing**：在 <https://www.bing.com/webmasters> 可以直接从 Google Search Console 导入。
- **自己的域名**：比如 `wanglab.org`（每年大约 10–15 美元），买了以后在 **Settings → Pages → Custom domain** 填上即可。也可以问学院 IT 能否给一个 missouri.edu 的子域名。不弄也完全没问题。
- **中国大陆**：github.io 在国内有时打不开或很慢，百度也很少收录。如果以后想让国内学生更方便地看到，可以再考虑国内的镜像。

收录以后，可以试着搜：`Wang Lab Mizzou`、`Yi Wang University of Missouri lab`、`Yi Wang EHD printing Missouri`。

---

## 第三部分：以后怎么改

### 基本方法（所有修改都一样）

1. 打开仓库页面，例如 `https://github.com/wanglab-mizzou/wanglab-mizzou.github.io`。
2. 点要改的文件（比如 `index.html`）。
3. 点右上角的 **铅笔图标（Edit this file）**。
4. 按 **Ctrl+F**（Mac：Command+F）搜你要改的那句话，直接改。
5. 点右上角绿色的 **Commit changes...**，在弹出的框里再点一次 **Commit changes**。
6. 等 1–2 分钟，打开网站刷新。看不到变化就强制刷新：Windows 按 **Ctrl+F5**，Mac 按 **Command+Shift+R**。

**两条规矩，照做就不会出错：**

- 只改尖括号 `< >` **外面**的英文文字。
- 要加新内容时，**复制一整条现成的，再改里面的字**。

### ① 加一条新闻（`index.html`）

搜 `news-list`，找到对应年份，在那一年第一条的**上面**粘贴：

```html
<li><span class="news-date">Oct</span> Yao Yao passed the Ph.D. qualifying exam. Congratulations!</li>
```

- 月份用英文缩写：Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec。
- 不确定月份就留空：`<span class="news-date"></span>`。
- 加粗：`<strong>文字</strong>`；期刊名斜体：`<i>Materials Horizons</i>`。
- **新的一年（比如 2027）**：复制一整块 `<div class="news-group"> …… </div>`，把 `<h3>2026</h3>` 改成 `<h3>2027</h3>`，删掉里面的旧新闻、写上新的，放在 2026 那一块的上面。

### ② 加一篇论文（`publications.html`）

找到对应年份（没有这一年就照上面的方法复制一整块 `<div class="pub-year"> …… </div>`），在最上面粘贴：

```html
<li>Yao, Y., Rayan, F., &amp; <b>Wang, Y.</b>* <span class="pub-title">Your Paper Title Here.</span> <i>Journal Name</i>, 12(3), 456–789.</li>
```

- `&amp;` 显示出来就是 `&`。
- 想让题目可以点开：

  ```html
  <span class="pub-title"><a href="https://doi.org/10.xxxx/xxxxx">Your Paper Title Here.</a></span>
  ```

- 获奖论文在最后加：`<span class="pub-award">Best Paper Award</span>`
- 重要的论文，也可以加到 `research.html` 对应方向的 "Selected publications" 里。

### ③ 加一位新成员（`people.html`）

在 Graduate students 部分，复制一整块：

```html
<article class="member">
  <img src="images/people/placeholder.svg" alt="Jane Doe" width="400" height="400" loading="lazy">
  <h3>Jane Doe</h3>
  <p class="member-role">Ph.D. student, Industrial Engineering</p>
  <p class="member-bio">Jane received her B.S. from ... Her research focuses on ...</p>
</article>
```

- 有照片后：先上传照片（见 ⑤），再把 `placeholder.svg` 改成照片文件名，例如 `images/people/jane-doe.jpg`。
- `member-bio` 那一行可有可无，不要就整行删掉。
- 本科生只需在 Undergraduate researchers 的列表里加一行：`<li>Jane Doe</li>`。

### ④ 学生毕业了（`people.html`）

- 研究生：删掉他那一整块 `<article class="member"> …… </article>`，然后在 Alumni 的 `<ul class="name-list">` 和 `</ul>` 之间加一行：

  ```html
  <li>Yao Yao, Ph.D. 2027, now Assistant Professor at XX University</li>
  ```

- 本科生：把他那一行 `<li>名字</li>` 剪切，粘贴到 Alumni 的列表里。
- 有了第一位毕业生后，可以删掉 "Former lab members will be listed here as they graduate." 这一行。

### ⑤ 上传和更换照片

1. **文件名只用英文小写字母、数字和横线**，不要空格、不要中文。例如 `yi-wang.jpg`、`group-2026.jpg`。
2. **别太大**：头像 600×600 左右；其他照片宽度 1600 像素以内，每张最好小于 500 KB。可以用 <https://squoosh.app> 免费压缩。
3. 在 GitHub 上打开对应文件夹（头像进 `images/people`，相册进 `images/photos`）→ 右上角 **Add file → Upload files** → 把照片拖进去 → **Commit changes**。
4. 回到对应的 html 文件，把 `src="images/……"` 改成新文件名。

目前需要换成真照片的地方：

| 位置 | 在哪个文件 | 现在的占位图 |
|---|---|---|
| 你的头像 | `people.html` | `images/people/placeholder.svg` → 改成 `images/people/yi-wang.jpg` |
| 学生头像 | `people.html` | 每人一个 `placeholder.svg` |
| 首页轮播图、研究页配图 | `index.html`、`research.html` | `images/research-printing.svg` 等三张示意图。换成你们真实的设备、器件或实验照片会更好（横图，宽度至少 1600 像素） |
| 相册 | `photos.html` | `images/photos/placeholder.svg`，以及两条 "Example entry" 示例文字 |

### ⑥ 加一组相册照片（`photos.html`）

复制一整块，放在最上面：

```html
<article class="photo-entry">
  <h2>Oct 2026</h2>
  <div>
    <p>Lab group photo after the fall kickoff meeting.</p>
    <div class="photo-row">
      <img src="images/photos/group-2026.jpg" alt="Wang Lab group photo, fall 2026" loading="lazy">
      <img src="images/photos/lab-2026.jpg" alt="Students working in the lab" loading="lazy">
    </div>
  </div>
</article>
```

放上第一组真照片以后，记得删掉两条 "Example entry" 示例。

### ⑦ 改研究方向的文字（`research.html`、`index.html`）

- 研究页：直接改 `<h2>` 标题和 `<p>` 段落。
- 首页轮播图上的标题和一句话介绍，在 `index.html` 的最上面。
- 不要改 `id="printing"`、`id="bioelectronics"`、`id="smart"` 这几个名字，首页按钮靠它们跳转。

### ⑧ 改实验室名字或主色

- 名字：每个页面的顶部和底部都有 "Wang Lab"。最省事的办法是告诉 Claude 新名字，让它一次全部改好。
- 颜色：`css/style.css` 最上面的 `--gold: #f1b82d;` 是主色（Mizzou 金色）。

---

## 出错了怎么办

- **页面乱了**：通常是多删或少删了一个 `<` 或 `>`。打开那个文件 → 右上角 **History** → 找到你改之前的版本 → 把旧内容复制回来。
- **改了看不到**：等 2 分钟再强制刷新；或者看仓库的 **Actions** 标签页，最新一条是绿色 ✓ 就说明已经发布。
- **最省事**：把那个 html 文件和你想改的内容一起发给 Claude，让它改好，你再传回 GitHub。

## 让学生帮忙维护

仓库 **Settings → Collaborators → Add people**，输入学生的 GitHub 用户名。他们就能帮你更新新闻和论文。每次修改 GitHub 都有记录，随时可以恢复。
