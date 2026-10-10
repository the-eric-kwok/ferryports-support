# 实施验证记录

验证日期：2026 年 10 月 10 日。

## 实施结果

- 五语言首页均在隐私说明链接之后新增同语言 frp 介绍入口，简体中文为「什么是 frp？」。
- 新增 `en/frp.html`、`zh/frp.html`、`zh-Hant/frp.html`、`ja/frp.html`、`ko/frp.html`，完整覆盖定义、工作方式、使用场景、FerryPorts 角色及官方 GitHub 入口。
- 新页复用现有导航、样式和选单脚本；未修改 `style.css` 或 `language-switcher.js`。
- 站点地图共 20 个唯一页面地址，保留原有 15 个条目并增加五个介绍页；本站 OpenSpec 上下文已补充新页面类型。
- 五语言内容对照英语基线审校，保留技术标识及 URL，明确服务器配置和 iOS 后台运行限制；上游功能描述未扩大应用能力承诺。

## 内容事实来源

本次实施时核对了 [frp 官方项目](https://github.com/fatedier/frp)、[官方概述](https://gofrp.org/en/docs/overview/) 和 [官方 SSH 示例](https://gofrp.org/en/docs/examples/ssh/)。页面采用简明自写介绍，没有固定版本号、星标数或复制配置教程。

## 浏览器验证

使用 Playwright 驱动本机 Chrome `155.0.8059.39`，访问仅监听本机的静态预览，全部检查通过。

- 五语言：首页四个操作入口顺序及宽屏位置正确，介绍页的官方 GitHub、同语言首页及支持链接可用；站内引用资源及锚点可达。
- 五语言：文档语言、单一一级标题、四个二级章节、标题与描述、canonical、Open Graph、六个 alternate（含 `x-default`）均符合规格。
- 五语言：悬浮展开、移入选单、悬浮离开收起、点击保持展开、再次点击关闭、外部点击、Space／Enter、Escape 返回入口、焦点移出关闭均可用。
- 五语言：逐一切换至其余四语言并返回，始终保留 `frp.html` 页面类型；触屏展开和激活语言链接可用。
- 五语言：跳过导航可聚焦正文，收起选单中的语言链接不出现在键盘顺序中，正文链接焦点可见。
- 五语言：首页与介绍页分别验证 1280 CSS 像素、320 CSS 像素及 200％ 等效缩放环境的明暗主题；文字、操作链接及展开选单无影响阅读的横向溢出或裁切，徽章和支持按钮仍为 48 CSS 像素高。
- 200％ 等效缩放采用 640 CSS 像素视口与 `deviceScaleFactor: 2`，对应 1280 像素宽窗口的可用布局宽度；未使用浏览器原生缩放菜单。
- 五语言：禁用 JavaScript 后，首页介绍链接、普通语言链接、官方 GitHub 链接和支持入口仍可用。
- 所有检查页面的请求均来自本机站点，没有新增第三方子资源或页面脚本异常。

临时验证脚本：`/private/tmp/verify-frp-introduction.cjs`。结果与截图：`/private/tmp/frp-introduction-verification/`。已查看简体中文桌面首页及 320 CSS 像素深色介绍页截图。

## 规格与交付状态

- `openspec validate add-multilingual-frp-introduction --strict` 通过。
- `git diff --check` 通过。
- 本地实施、主规格同步及归档完成；本次提交包含页面、站点地图、主规格及归档记录。未推送、未发布 GitHub Pages，未更新父仓库 submodule 指针。

## 具体场景文案补充

根据用户反馈，在五语言「访问局域网中的网站或 Web 服务」列表项中补充「在家里访问公司电脑上运行的 kimi code web 或 deepseek harness」的等义举例，并保留这两个名称。已刷新当前简体中文预览，确认新增列表项显示；核对五语言均包含此例，严格规格验证及差异空白检查通过。此次仅补充并合并正文列表项，未重复运行原有完整交互验证。

## 远程桌面与 NAS 场景补充

五语言的远程电脑条目扩展为 SSH、VNC、RDP，并举例在家使用公司电脑的终端或远程桌面；新增 FTP、SMB 访问 NAS 的条目，举例出差时读取家中 NAS 的文档或备份照片。基于 [frp 官方 TCP／UDP 端口转发说明](https://gofrp.org/en/docs/features/tcp-udp/) 补充应用场景，保留具体配置取决于服务类型及访问方式的说明。

已核对五语言均为三类场景、协议及项目名称完整，并在当前简体中文预览确认列表显示；严格规格验证与差异空白检查通过。本次仅修改说明文案，未连接实际远程桌面或 NAS 服务。

## 首页用途摘要补充

根据首页审阅反馈，在五语言首页新增一段简短用途摘要，概括在家访问公司 Web 服务、远程使用电脑终端或桌面、在外读取与备份 NAS 文件；移除首页后台运行限制句，保留服务器配置前提。已核对五语言摘要及限制句位置，刷新当前简体中文首页并确认显示，严格规格验证和差异空白检查通过。介绍页和支持页的详细限制说明保持原有内容。

## 首页项目举例与段落合并

在五语言首页用途摘要中补充 kimi code、deepseek harness 两个 Web 服务例子，并将服务器配置前提合并到同一段。已核对五语言名称、NAS 用途及 frps 前提位于同一段落，刷新简体中文预览并确认显示；严格规格验证和差异空白检查通过。

## 主规格同步与归档

新增 `openspec/specs/frp-introduction/spec.md`，同步五语言页面覆盖和响应式、无障碍要求至 `support-site-localization`，保留原有语言选单、事实边界及 App Store 徽章要求。13 项任务全部完成，两个主规格严格验证通过，变更严格验证通过。使用 `openspec archive add-multilingual-frp-introduction --skip-specs --yes --json` 将已同步变更归档至 `openspec/changes/archive/2026-10-10-add-multilingual-frp-introduction/`。
