export default function FeaturedKnowledge() {
  const articles = [
    {
      category: "AI 工作秘书",
      title: "微信工作消息太多，如何用 AI 整理成待办？",
      desc: "把零散聊天内容整理成今日必须、明日跟进和下一步动作。",
      href: "#",
    },
    {
      category: "AI 办公",
      title: "如何用 AI 整理企业申报资料？",
      desc: "从资料分类、缺失检查到任务清单，减少重复整理。",
      href: "#",
    },
    {
      category: "内容生产",
      title: "一条视频，如何适配多个内容平台？",
      desc: "同一个核心内容，分别适配抖音、小红书、视频号和长文章。",
      href: "#",
    },
    {
      category: "AI 自动化",
      title: "哪些重复工作值得优先自动化？",
      desc: "从高频、规则明确、容易出错的工作开始，提高投入产出比。",
      href: "#",
    },
    {
      category: "数字产品",
      title: "如何把工作经验做成可销售的数字产品？",
      desc: "把模板、提示词、方法和案例沉淀成可以重复交付的产品。",
      href: "#",
    },
    {
      category: "效率系统",
      title: "为什么学了很多 AI 工具，工作还是没有变轻松？",
      desc: "真正的问题往往不是工具不够，而是没有建立固定工作流程。",
      href: "#",
    },
  ];

  return (
    <section
      id="knowledge"
      className="mx-auto max-w-[1440px] px-6 pb-24 pt-10 lg:px-10 xl:px-16"
    >
      {/* 标题 */}
      <div className="mb-12 flex flex-col gap-5 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            FEATURED KNOWLEDGE
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            精选知识
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            只沉淀真正有用、值得长期保留的内容。
          </p>
        </div>

        <a
          href="/knowledge"
          className="inline-flex items-center justify-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
        >
          查看全部知识
          <span>→</span>
        </a>
      </div>

      {/* 文章卡片 */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <a
            key={article.title}
            href={article.href}
            className="group flex min-h-[260px] flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/35 hover:bg-cyan-400/[0.04] hover:shadow-[0_0_50px_rgba(34,211,238,0.1)]"
          >
            <div>
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                {article.category}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold leading-9 text-white">
              {article.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              {article.desc}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-300">
              <span>阅读全文</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}