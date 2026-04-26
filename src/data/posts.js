/**
 * Blog posts data
 * Add new posts here — no build steps needed, hot reload works
 */
export const posts = [
  {
    id: 'about-website',
    title: '关于创建这个网站的想法',
    date: '2026-02-20',
    categories: ['website', 'thoughts'],
    author: 'NSIE Team',
    excerpt: '实践是学习金字塔中效率最高的一环，若想要快速提升前后端、服务器搭建、数据库使用等能力，使用一个网站作为项目是一个非常不错的选择。',
    content: `
<p>实践是学习金字塔中效率最高的一环，若想要快速提升前后端、服务器搭建、数据库使用等能力，使用一个网站作为项目是一个非常不错的选择。</p>

<p>在学习人工智能过程中，有很多自己原创的小项目、小工具，需要一个平台供其他人使用，向他人展示功能，搭建一个属于自己的平台是很有必要的。</p>

<h2>技术选型</h2>
<p>这个网站最初使用纯HTML/CSS/JavaScript构建，现在迁移到Vue 3 + Vite 以更好地管理内容和扩展功能。</p>

<h2>未来计划</h2>
<ol>
  <li>添加更多实用工具</li>
  <li>集成评论系统</li>
  <li>完善内容体系</li>
  <li>添加API接口</li>
</ol>
    `.trim()
  },
  {
    id: 'os-summary',
    title: '操作系统总结',
    date: '2026-02-22',
    categories: ['operating-system', 'study'],
    author: 'NSIE Team',
    excerpt: '操作系统是计算机系统的核心软件，负责管理硬件资源并提供公共服务。本文总结操作系统的基本概念和重要组件。',
    content: `
<p>操作系统是计算机系统的核心软件，负责管理硬件资源并提供公共服务。本文总结操作系统的基本概念和重要组件。</p>

<h2>进程管理</h2>
<p>进程是程序的执行实例。操作系统负责：</p>
<ul>
  <li>进程创建和终止</li>
  <li>进程调度</li>
  <li>进程同步</li>
  <li>进程通信</li>
</ul>

<h2>内存管理</h2>
<p>内存管理包括：</p>
<ul>
  <li>内存分配和回收</li>
  <li>地址转换</li>
  <li>虚拟内存</li>
  <li>页面置换算法</li>
</ul>

<h2>文件系统</h2>
<p>文件系统提供持久化存储：</p>
<ul>
  <li>文件和目录管理</li>
  <li>磁盘空间分配</li>
  <li>文件访问控制</li>
</ul>

<h2>设备管理</h2>
<p>设备管理负责：</p>
<ul>
  <li>设备驱动程序</li>
  <li>缓冲和缓存</li>
  <li>设备分配</li>
</ul>

<h2>安全与保护</h2>
<p>操作系统提供安全机制：</p>
<ul>
  <li>用户认证</li>
  <li>访问控制</li>
  <li>加密支持</li>
</ul>

<hr>
<p><em>持续更新中...</em></p>
    `.trim()
  }
]

export function getAllCategories() {
  const catSet = new Set()
  posts.forEach(p => p.categories.forEach(c => catSet.add(c)))
  return Array.from(catSet)
}

export function getPostsByCategory(category) {
  return posts.filter(p => p.categories.includes(category))
}
