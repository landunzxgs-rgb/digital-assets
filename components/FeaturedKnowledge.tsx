export default function FeaturedKnowledge() {
  const articles = [
   {
  category: "AI 工作秘书",
  title: "微信工作消息太多，我是怎么用 AI 把遗漏变成待办的",
  desc: "记录我如何把零散客户消息、时间节点和未完成事项整理成持续跟进的工作清单。",
  href: "/knowledge/article1",
},
    
  ];

  return (
    <section
      id="knowledge"
      className="mx-auto max-w-[1440px] px-6 pb-24 pt-10 lg:px-10 xl:px-16"
    >
      <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-blue-500/[0.06] p-8 shadow-2xl shadow-cyan-950/10 md:p-12">
        <div className="grid min-h-[430px] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* 左侧 */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              FEATURED KNOWLEDGE
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              精选知识
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              只沉淀真正有用、值得长期保留的内容。
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/knowledge"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                查看全部知识
                <span>→</span>
              </a>

              <span className="flex items-center text-sm text-slate-400">
                首页精选，全部内容进入知识库
              </span>
            </div>
          </div>

          {/* 右侧 */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/30 p-6 backdrop-blur">
            <div className="mb-5">
              <p className="text-sm font-semibold text-cyan-300">
                精选内容
              </p>

              <h3 className="mt-1 text-2xl font-bold text-white">
                值得长期阅读的实用文章
              </h3>
            </div>

            <div className="space-y-3">
              {articles.map((article) => (
                <a
                  key={article.title}
                  href={article.href}
                  className="group block rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.045]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-cyan-300">
                        {article.category}
                      </p>

                      <h4 className="mt-1 font-semibold leading-6 text-white">
                        {article.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {article.desc}
                      </p>
                    </div>

                    <span className="mt-1 shrink-0 text-cyan-300 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 