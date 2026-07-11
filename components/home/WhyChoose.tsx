export default function WhyChoose() {
  const items = [
    {
      icon: "◎",
      title: "真实实战",
      desc: "所有内容均来自真实项目，不做概念化推荐。",
    },
    {
      icon: "⚡",
      title: "效率提升",
      desc: "聚焦 AI 与自动化工具，减少重复劳动。",
    },
    {
      icon: "↗",
      title: "持续创造价值",
      desc: "帮助你构建可持续的数字生产力系统。",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      
      {/* 标题 */}
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold text-white">
          你将获得什么
        </h2>

        <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-cyan-400" />
      </div>

      {/* 卡片 */}
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]"
          >
            {/* icon */}
            <div className="mb-6 text-3xl text-cyan-300">
              {item.icon}
            </div>

            {/* title */}
            <h3 className="text-2xl font-bold text-white">
              {item.title}
            </h3>

            {/* desc */}
            <p className="mt-4 leading-7 text-slate-400">
              {item.desc}
            </p>

            {/* hover glow line */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
} 