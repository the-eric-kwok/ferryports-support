## 1. 内容与五语言介绍页

- [x] 1.1 对照 frp 官方 GitHub README 与当前 FerryPorts 支持页，确定英语正文基线，覆盖定义、客户端与服务端分工、典型场景、FerryPorts 角色及应用限制。
- [x] 1.2 新增 `en/frp.html`，复用当前页面结构、主导航、页脚、跳过导航、共享样式及语言选单；添加官方 GitHub、同语言首页及支持链接。
- [x] 1.3 新增 `zh/frp.html`、`zh-Hant/frp.html`、`ja/frp.html`、`ko/frp.html`，完整翻译正文、导航、标题、描述及无障碍文本，审校章节与事实等义。
- [x] 1.4 配齐五页的文档语言、canonical、Open Graph、五语言 alternate、英语 `x-default` 及指向同名介绍页的语言选单链接。

## 2. 首页入口与站点地址

- [x] 2.1 修改 `en/index.html`、`zh/index.html`、`zh-Hant/index.html`、`ja/index.html`、`ko/index.html`，在隐私说明链接后紧接添加同语言 frp 介绍链接；简体中文使用「什么是 frp？」，其余语言使用自然的等义问句。
- [x] 2.2 验证 `.page-actions` 的宽屏排列与窄屏换行，仅在确有布局问题时调整 `style.css`，保留原有 App Store 徽章尺寸、支持按钮及键盘顺序。
- [x] 2.3 在 `sitemap.xml` 加入五个 `frp.html` 的绝对地址，保留原有十五个页面条目；更新本站 `openspec/config.yaml` 的页面类型说明。
- [x] 2.4 根据首页审阅反馈，在五语言首页补充 kimi code、deepseek harness 等 Web 服务、远程电脑及 NAS 文件的简短用途摘要，合并服务器配置前提到用途段落，并移除首页后台运行限制句，保留详情页说明。

## 3. 验证与记录

- [x] 3.1 本地检查五语言首页到介绍页、介绍页到首页与支持页的链接、资源及锚点；检查 GitHub 链接精确指向 `https://github.com/fatedier/frp`，新页元信息与站点地图地址一致。
- [x] 3.2 在浏览器逐语言验证介绍页语言选单：悬浮、点击、触屏展开、切换同名页、Escape、外部点击、焦点移出及隐藏项不可聚焦；禁用 JavaScript 后检查语言链接和其他入口仍可用。
- [x] 3.3 在五语言首页与介绍页验证宽屏、320 CSS 像素、200％ 缩放及明暗主题下的布局、标题结构、跳过导航与可见键盘焦点；若修改共享 CSS，回归原有支持页及隐私页布局。
- [x] 3.4 检查介绍页加载请求均为站点自身资源，没有新增第三方徽章、字体或追踪请求；审校五语言内容没有扩大应用能力或后台运行承诺。
- [x] 3.5 运行 `openspec validate add-multilingual-frp-introduction --strict`，记录本地页面与浏览器验证结果，区分已实施与尚未发布的状态。
