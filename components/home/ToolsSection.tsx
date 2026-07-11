import Link from "next/link";
import { tools } from "../../lib/tools";
export default function ToolsSection() {
   

  return (
    <section id="tools" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-4xl font-bold text-white">AI 工具工作台</h2>
        <p className="mt-4 text-slate-400">
          精选真正能提升效率的 AI 工具
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={`/tools/${tool.slug}`}
            className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            <div className="mb-5 text-4xl">{tool.icon}</div>

            <h3 className="text-2xl font-bold text-white">{tool.name}</h3>

            <p className="mt-3 text-slate-400">{tool.desc}</p>
<div className="mt-3 flex items-center justify-between">
    <span className="text-xs text-cyan-300">
        {tool.category}
    </span>

    <span className="text-xs text-yellow-400">
        {tool.level}
    </span>
</div>
            <div className="mt-6 inline-flex items-center text-sm text-cyan-300 opacity-80 transition group-hover:opacity-100">
              开始学习 →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 