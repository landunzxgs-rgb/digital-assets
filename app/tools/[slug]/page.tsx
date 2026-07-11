 import { tools } from "../../../lib/tools";

export default async function ToolDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return (
      <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="text-cyan-300">← 返回首页</a>
          <h1 className="mt-10 text-4xl font-bold">工具未找到</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-cyan-300">← 返回首页</a>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="text-5xl">{tool.icon}</div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              {tool.category}
            </span>
            <span className="text-yellow-400">{tool.level}</span>
          </div>

          <h1 className="mt-6 text-5xl font-bold">{tool.name}</h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">
            {tool.desc}
          </p>

          {tool.official && (
            <a
              href={tool.official}
              target="_blank"
              className="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              访问官网 →
            </a>
          )}
        </section>

        {tool.bestFor && (
          <section className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold">适合场景</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {tool.bestFor.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}

        {tool.pros && (
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-bold">优点</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {tool.pros.map((item) => (
                  <li key={item}>✅ {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-2xl font-bold">注意事项</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {tool.cons?.map((item) => (
                  <li key={item}>⚠️ {item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}