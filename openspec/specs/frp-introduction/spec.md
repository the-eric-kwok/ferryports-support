# frp-introduction Specification

## Purpose

定义支持站首页的 frp 介绍入口与用途摘要、五语言介绍页的内容及应用事实边界、官方 GitHub 入口和同页语言切换地址。

## Requirements

### Requirement: 首页 frp 介绍入口

五语言首页 SHALL 在操作行的隐私说明链接之后紧接提供当前语言的 frp 介绍链接，指向当前语言的 `frp.html`。简体中文文案 MUST 为「什么是 frp？」；其他语言 MUST 使用自然的等义问句，保留小写 `frp`。宽屏容纳操作行时，新入口 MUST 位于隐私说明链接右边；窄屏 SHALL 按 DOM 顺序自然换行，保留原有入口及目的地。

#### Scenario: 从简体中文首页打开介绍
- **WHEN** 用户打开 `zh/index.html` 并激活「了解数据处理方式」后的「什么是 frp？」
- **THEN** 打开 `zh/frp.html`
- **AND** 宽屏的新入口在隐私说明链接右边，现有 App Store、支持及隐私链接仍可使用

#### Scenario: 从其他语言首页打开介绍
- **WHEN** 用户在英语、繁体中文、日语或韩语首页激活 frp 介绍入口
- **THEN** 打开相同语言目录下的 `frp.html`，入口文案使用当前页面语言

#### Scenario: 操作行换行
- **WHEN** 在 320 CSS 像素视口或 200％ 缩放下浏览首页
- **THEN** 新入口在阅读和键盘顺序上仍紧随隐私说明链接，必要时换行且无重叠、裁切或影响阅读的横向溢出

### Requirement: 首页使用场景摘要

五语言首页 MUST 在应用介绍之后、操作行之前提供简短的使用场景摘要，涵盖在家访问公司电脑上的 kimi code、deepseek harness 等 Web 服务、远程使用电脑终端或桌面、在外读取与备份 NAS 文件。项目名称 MUST 保留原值。首页 SHALL 将自行准备有权访问的 frps 服务器及配置的前提合并至用途段落，移除首页的后台运行限制句；介绍页及支持页 MUST 保留现有应用能力与后台运行限制说明。

#### Scenario: 首页快速了解用途
- **WHEN** 用户打开任一语言首页
- **THEN** 可通过简短段落了解 Web 服务、远程电脑和 NAS 文件三类用途
- **AND** 仍可了解服务器配置前提，并通过 frp 介绍或支持入口阅读详细说明
- **AND** 同一用途段落包含 kimi code、deepseek harness 两个例子和服务器配置前提

### Requirement: frp 介绍内容与应用关系

五语言 `frp.html` MUST 用当前语言完整介绍 frp 的定义、用途、`frpc` 与 `frps` 的基本关系、典型场景及 FerryPorts 的角色。内容 MUST 依据官方项目事实自写，并保持五语言含义一致；技术标识 `frp`、`frpc`、`frps` MUST 保持原值。页面 MUST 明确 FerryPorts 是 iOS 上的 frp 客户端，用户需要自行准备有权访问的 frps 服务器及配置，后台运行受 iOS、网络状态和权限限制；MUST NOT 将上游全部功能表述为 FerryPorts 已支持能力。

#### Scenario: 初次接触 frp
- **WHEN** 用户阅读任一语言的介绍页
- **THEN** 能了解 frp 用于将 NAT 或防火墙后的本地服务通过反向代理等方式提供访问，及 `frpc` 客户端与 `frps` 服务端的分工
- **AND** 能通过内网服务访问等具体场景理解用途，并了解 FerryPorts 在其中的客户端角色
- **AND** 使用场景包括在家里访问公司电脑上运行的 kimi code web 或 deepseek harness，五语言均保留这两个名称
- **AND** 使用场景包括通过 SSH、VNC、RDP 使用公司电脑的终端或远程桌面，以及通过 FTP、SMB 在出差时访问家中 NAS 的文档或备份照片

#### Scenario: 核对五语言事实边界
- **WHEN** 对照五种语言的介绍内容
- **THEN** 定义、角色、场景及应用限制含义一致，各页章节完整且没有占位正文
- **AND** 不声称 FerryPorts 提供服务器、支持所有上游功能或保证永久后台在线

### Requirement: 官方 GitHub 与站内后续入口

每个介绍页 MUST 提供清晰标识为 frp 官方项目的 GitHub 链接，精确指向 `https://github.com/fatedier/frp`，并提供当前语言的首页及支持页入口。链接 MUST 使用可理解的当前语言名称，使用无需 JavaScript 的普通链接；页面加载 MUST NOT 为展示官方项目入口而请求任何第三方子资源。

#### Scenario: 查看官方项目
- **WHEN** 用户激活介绍页的 frp 官方 GitHub 链接
- **THEN** 前往 `https://github.com/fatedier/frp`
- **AND** 链接不指向 FerryPorts 仓库或搜索结果

#### Scenario: 继续查看应用帮助
- **WHEN** 用户从介绍页激活首页或支持入口
- **THEN** 分别进入当前语言的 `index.html` 或 `support.html`
- **AND** 禁用 JavaScript 时上述入口和官方 GitHub 链接仍可使用

#### Scenario: 子资源来源
- **WHEN** 加载任一语言的介绍页并检查页面子资源请求
- **THEN** 资源来自站点自身，不因 GitHub 入口新增第三方资源请求

### Requirement: 介绍页同页语言切换与检索地址

五语言介绍页 MUST 沿用 `support-site-localization` 中的同页语言选单、语言声明及无脚本回退约定。每页 MUST 具有当前语言的标题、描述及 Open Graph 元信息，canonical 与 Open Graph 地址 MUST 指向自身绝对地址，五语言 alternate MUST 指向各语言的 `frp.html`，`x-default` MUST 指向 `en/frp.html`。站点地图 MUST 包含五个介绍页的绝对地址。

#### Scenario: 从介绍页切换语言
- **WHEN** 用户在任一介绍页打开语言选单并选择另一种语言
- **THEN** 打开目标语言的 `frp.html`，可切回原语言介绍页
- **AND** 打开选单本身不改变地址，当前语言不可激活，禁用 JavaScript 后仍可通过普通链接切换

#### Scenario: 检查新页元信息和站点地图
- **WHEN** 检查五个介绍页的 HTML 及 `sitemap.xml`
- **THEN** 文档语言、标题、描述、canonical、Open Graph、alternate 及 `x-default` 与各页语言和介绍页地址一致
- **AND** 地图新增五个 `frp.html` 地址，保留现有十五个页面地址
