export const projects: Project[] = [
  // tools
  {
    title: '滤镜色值转换工具',
    description: 'CSS filter滤镜任意色值转换工具',
    website: 'https://www.zhangxinxu.com/sp/filter.html',
    tags: ['tools'],
    type: 'common_tools',
  },

  // web
  {
    title: 'giscus',
    description: 'A comments system powered by GitHub Discussions',
    preview: '/img/project/giscus.png',
    website: 'https://kuizuo.cn',
    source: 'https://github.com/giscus/giscus',
    tags: ['opensource', 'favorite'],
    type: 'web',
  },
  {
    title: 'JS代码反混淆',
    description: '基于 Babel 对 JavaScript 混淆代码还原的工具',
    website: 'https://js-deobfuscator.vercel.app',
    source: 'https://github.com/kuizuo/js-deobfuscator',
    tags: ['opensource', 'favorite'],
    type: 'web',
  },

  // other
  {
    title: 'browser-rpc',
    description: 'WebSocket 远程调用浏览器函数',
    website: 'https://github.com/kuizuo/rpc-browser',
    tags: ['opensource'],
    type: 'other',
  },
  {
    title: 'Antd Pro',
    description: '通用的后台管理系统。基于 Vite4 + Vue3 + Unocss + Antdv4 + TS',
    preview: '/img/project/antd-pro.png',
    website: 'https://docs.antdv-pro.com/',
    source: 'https://github.com/antdv-pro/antdv-pro',
    tags: ['opensource', 'favorite'],
    type: 'other',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal' | 'tools'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'common_tools' | 'other'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  common_tools: '常用工具',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
  tools: {
    label: '工具',
    description: '工具项目',
    color: '#ff9e00',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
