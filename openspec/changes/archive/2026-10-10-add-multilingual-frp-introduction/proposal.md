## Why

支持站首页直接介绍 FerryPorts 的用途，但初次接触的用户缺少了解 frp 及其与 FerryPorts 关系的入口。新增五语言介绍页，让用户先理解基本概念，再前往支持指南或 frp 官方项目。

## What Changes

- 在五语言首页操作行的隐私说明链接之后新增 frp 介绍链接；简体中文显示「什么是 frp？」，宽屏位于「了解数据处理方式」右边，窄屏按同一顺序自然换行。
- 在 `en/`、`zh/`、`zh-Hant/`、`ja/`、`ko/` 下新增 `frp.html`，介绍 frp 的用途、`frpc` 与 `frps` 的基本关系、典型使用场景及 FerryPorts 的角色。
- 介绍页提供 frp 官方 GitHub 链接 `https://github.com/fatedier/frp`，并提供当前语言的首页与支持页入口。
- 介绍页沿用既有静态页面样式、明暗主题、同页语言选单、无脚本回退和语言元信息；将五个新地址加入站点地图。
- 根据首页审阅反馈，补充 Web 服务、远程电脑和 NAS 文件的简短用途摘要；首页移除后台运行限制句，保留服务器配置前提及详情页的完整说明。

## Capabilities

### New Capabilities

- `frp-introduction`：定义首页介绍入口、五语言介绍内容、FerryPorts 与上游项目的关系及官方 GitHub 目的地。

### Modified Capabilities

- `support-site-localization`：将 `frp.html` 纳入五语言页面完整覆盖及响应式、无障碍验收范围。

## Impact

- 修改五语言的 `index.html`，新增五语言的 `frp.html`；如现有操作行无法容纳新增链接，仅对共享 `style.css` 作必要调整。
- 更新 `sitemap.xml` 及本站 `openspec/config.yaml` 的页面类型说明。
- 复用 `language-switcher.js`；实现时核对新页面的同名语言链接，无需新增运行时依赖、远程字体或追踪资源。
- 工作范围为 `ferryports-support` 仓库；应用既有支持页、隐私页地址契约继续有效。本次仅创建规格变更，页面实施与提交、推送、发布另行执行。
