export default function WhyChoose() {
  const solutions = [
    {
      icon: "💬",
      title: "AI 工作秘书",
      desc: "整理微信工作消息，自动生成今日待办、明日跟进和下一步动作。",
      href: "#case",
    },
    {
      icon: "📄",
      title: "AI 办公助手",
      desc: "协助处理资料、报价、合同和表格，减少重复整理工作。",
      href: "#case",
    },
    {
      icon: "✦",
      title: "AI 内容生产",
      desc: "把一个真实主题，快速转化为视频、文章和多平台内容。",
      href: "#knowledge",
    },
    {
      icon: "↗",
      title: "AI 数字资产",
      desc: "把模板、知识和工作流程沉淀为可重复使用和销售的数字产品。",
      href: "#products",
    },
  ];

  return (
    <section
      id="solutions"
      className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 lg:px-10 xl:px-16"
    >
      {/* 标题 */}
      <div className="mb-14 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
          SOLUTIONS
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          效率派解决方案
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          不只是介绍 AI 工具，而是帮你把 AI 用到真实工作中。
        </p>
      </div>

      {/* 卡片 */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group relative flex min-h-[300px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.045] hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-2xl">
              {item.icon}
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              {item.desc}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cyan-300">
              <span>查看方案</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            <div className="absolute inset-x-8 bottom-0 h-px scale-x-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/70 to-cyan-400/0 transition-transform duration-500 group-hover:scale-x-100" />
          </a>
        ))}
      </div>
    </section>
  );
} 