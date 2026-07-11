 export type Tool = {
  slug: string;
  name: string;
  icon: string;
  category: string;
  desc: string;
  level: string;

  bestFor?: string[];
  pros?: string[];
  cons?: string[];

  official?: string;
};

export const tools: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    icon: "🤖",
    category: "AI 对话",
    desc: "AI 对话、内容生成、工作辅助工具。",
    level: "★★★★★",

    bestFor: [
      "内容创作",
      "资料整理",
      "日常办公",
      "学习辅助",
    ],

    pros: [
      "上手简单",
      "适用场景广",
      "中文支持好",
      "生态成熟",
    ],

    cons: [
      "高级功能需要付费",
      "回答需要人工判断",
      "部分地区访问不稳定",
    ],

    official: "https://chat.openai.com",
  },
  {
    slug: "claude",
    name: "Claude",
    icon: "🧠",
    category: "长文本写作",
    desc: "适合长文写作、深度分析与结构化内容处理。",
    level: "★★★★☆",
  },
  {
    slug: "cursor",
    name: "Cursor",
    icon: "💻",
    category: "AI 编程",
    desc: "AI 编程助手，用于开发与代码生成。",
    level: "★★★★★",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    icon: "🎨",
    category: "图像生成",
    desc: "AI 图像生成与视觉创作工具。",
    level: "★★★★★",
  },
  {
    slug: "n8n",
    name: "n8n",
    icon: "⚙️",
    category: "自动化",
    desc: "工作流自动化与系统连接工具。",
    level: "★★★★☆",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    icon: "📝",
    category: "知识管理",
    desc: "知识管理与文档生成工具。",
    level: "★★★★☆",
  },
];