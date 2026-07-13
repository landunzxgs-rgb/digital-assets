export default function CaseStudy() {
  const messages = [
    "王总：资质延期资料今天下午确认一下",
    "李经理：报价单什么时候能发？",
    "张总：明天上午想看人员证书情况",
    "小陈：还有一份合同没有盖章",
  ];

  const tasks = [
    {
      status: "今天必须",
      title: "确认资质延期资料",
      action: "下午联系王总，核对缺失资料。",
    },
    {
      status: "今天处理",
      title: "检查并发送报价单",
      action: "确认金额无误后发给李经理。",
    },
    {
      status: "明天跟进",
      title: "整理人员证书情况",
      action: "明天上午向张总发送证书清单。",
    },
    {
      status: "待处理",
      title: "跟进合同盖章",
      action: "联系小陈确认合同当前进度。",
    },
  ];

  return (
    <section
      id="case"
      className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 lg:px-10 xl:px-16"
    >
      {/* 标题 */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
          REAL CASE
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          看看 AI 如何解决真实工作问题
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          一堆零散工作消息，经过整理后，变成可以立即执行的行动清单。
        </p>
      </div>

      {/* 案例主体 */}
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-2xl shadow-cyan-950/10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* 左侧：原始消息 */}
        <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-400">
                整理前
              </p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                零散的工作消息
              </h3>
            </div>

            <span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300">
              容易遗漏
            </span>
          </div>

          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={message}
                className="rounded-2xl border border-white/10 bg-slate-950/35 p-4"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-slate-300">
                    {index + 1}
                  </div>

                  <span className="text-xs text-slate-500">
                    工作消息
                  </span>
                </div>

                <p className="leading-7 text-slate-300">
                  {message}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧：AI整理结果 */}
        <div className="bg-cyan-400/[0.025] p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-cyan-300">
                AI 整理后
              </p>
              <h3 className="mt-1 text-2xl font-bold text-white">
                清晰的行动清单
              </h3>
            </div>

            <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
              立即执行
            </span>
          </div>

          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.title}
                className="flex gap-4 rounded-2xl border border-cyan-400/15 bg-slate-950/30 p-4 transition hover:border-cyan-400/35"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 font-semibold text-cyan-300">
                  ✓
                </div>

                <div>
                  <p className="text-xs font-semibold text-cyan-300">
                    {task.status}
                  </p>

                  <h4 className="mt-1 font-semibold text-white">
                    {task.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    下一步：{task.action}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4">
            <p className="text-center font-medium text-slate-200">
              原本混乱的聊天记录，几分钟就变成清晰待办。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}