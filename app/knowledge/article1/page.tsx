 import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";

export const metadata: Metadata = {
  title: "微信工作消息太多，我是怎么用 AI 整理待办的",
  description:
    "结合企业资质业务的真实工作场景，分享如何把零散微信消息整理成可执行的待办清单，以及 AI 能做什么、不能做什么。",
};

const messages = [
  "王总：延期资料下午确认一下。",
  "李经理：报价单什么时候能发？",
  "张总：明天上午想看一下人员证书情况。",
  "小陈：有一个合同还没盖章。",
];

const tasks = [
  {
    time: "今天下午前",
    title: "确认王总的延期资料",
    detail:
      "先检查延期资料是否完整，确认缺少哪些内容，再联系王总。不能只回复“收到”，否则事情仍然没有往前推进。",
  },
  {
    time: "今天尽快",
    title: "回复李经理报价单进度",
    detail:
      "先确认报价单目前做到哪一步，再给出明确发送时间。即使暂时发不了，也要告诉对方什么时候可以收到。",
  },
  {
    time: "今天跟进",
    title: "确认合同盖章进度",
    detail:
      "联系小陈确认合同现在由谁保管、卡在哪个环节、预计什么时候可以盖完。",
  },
  {
    time: "今天准备，明天上午发送",
    title: "整理张总需要的人员证书",
    detail:
      "今天先把人员名单和证书整理好，检查是否存在过期、缺失或信息不一致，避免明天临时翻找。",
  },
];

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />

      <article className="mx-auto max-w-[780px] px-6 pb-20 pt-10">
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          <span>←</span>
          返回知识库
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-300">
            AI 工作秘书
          </span>

          <h1 className="mt-5 text-[32px] font-bold leading-[1.3] tracking-tight text-white md:text-[40px]">
            微信工作消息太多，
            <br className="hidden sm:block" />
            我是怎么用 AI 整理待办的
          </h1>

          <p className="mt-4 text-[15px] leading-7 text-slate-400">
            这不是一篇介绍 AI 工具的文章，而是一次真实的工作整理过程。
          </p>
        </header>

        <div className="pt-8 text-[15px] leading-7 text-slate-300">
          <p>
            做企业资质申报、延期、增项和人员维护，很多事情并不是在一个完整的业务系统里推进的，而是在微信聊天里一点一点完成的。
          </p>

          <p className="mt-4">
            客户突然问一句资料什么时候确认，合作方催一下报价，同事提醒合同还没有盖章，另一个客户说明天上午想看人员证书。每一件事单独看都不复杂，但它们分散在不同的聊天窗口里，时间要求也不一样。
          </p>

          <p className="mt-4">
            真正让人累的，并不是某一项工作特别难，而是脑子里要一直挂着很多没有做完的小事：
            谁还在等回复，哪件事今天必须处理，哪件事明天还要继续跟进。
          </p>

          <p className="mt-4">
            我以前也会在微信聊天记录里反复往上翻，或者临时记在纸上。但只要当天消息稍微多一点，还是可能出现漏回、忘记跟进，或者想起来时已经晚了的情况。
          </p>

          <h2 className="mt-10 text-[23px] font-bold leading-snug text-white">
            一开始，我只是让 AI“帮我整理一下”
          </h2>

          <p className="mt-4">
            有一天，我把下面几条工作消息复制给 AI：
          </p>

          <div className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {messages.map((message) => (
              <p
                key={message}
                className="py-3.5 text-[15px] leading-7 text-slate-200"
              >
                {message}
              </p>
            ))}
          </div>

          <p className="mt-5">
            我当时给出的要求很简单，只写了一句：
          </p>

          <div className="mt-4 border-l-2 border-cyan-400/50 bg-white/[0.025] px-5 py-4 text-slate-200">
            帮我把这些工作消息整理一下。
          </div>

          <p className="mt-5">
            AI 确实整理了。它把每个人说了什么重新归纳了一遍，内容看起来也很完整。
          </p>

          <p className="mt-4">
            但我看完以后发现，这个结果更像一份聊天摘要，而不是一份真正能用的工作清单。
          </p>

          <p className="mt-4">
            它告诉了我“发生了什么”，却没有告诉我：
          </p>

          <ul className="mt-4 space-y-2 pl-5 text-slate-300">
            <li className="list-disc">哪件事应该先做；</li>
            <li className="list-disc">哪件事今天必须处理；</li>
            <li className="list-disc">哪件事明天还要继续跟进；</li>
            <li className="list-disc">每件事的下一步到底是什么。</li>
          </ul>

          <p className="mt-5">
            这也是很多人第一次使用 AI 时容易遇到的问题：答案没有错，但没有真正进入工作流程。
          </p>

          <h2 className="mt-10 text-[23px] font-bold leading-snug text-white">
            后来我才明白，我需要的不是“总结”
          </h2>

          <p className="mt-4">
            对实际工作来说，知道聊天内容只是第一步。真正有价值的是把聊天内容转换成行动。
          </p>

          <p className="mt-4">
            所以后来我重新调整了要求，不再让 AI 自己判断该怎么输出，而是明确告诉它，我需要什么样的结果。
          </p>

          <div className="mt-5 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.045] px-5 py-5">
            <pre className="whitespace-pre-wrap font-sans text-[14px] leading-7 text-slate-200">
{`请你扮演我的工作助理，把下面的工作消息整理成一份可以直接执行的待办清单。

要求：
1. 按重要程度和时间要求排序
2. 标出今天必须处理的事项
3. 标出明天需要跟进的事项
4. 每一项写清楚下一步动作
5. 最后生成一份简洁提醒清单

工作消息如下：

王总：延期资料下午确认一下
李经理：报价单什么时候能发？
张总：明天上午想看人员证书情况
小陈：有一个合同还没盖章`}
            </pre>
          </div>

          <p className="mt-5">
            改完以后，输出结果才开始接近我真正需要的东西。
          </p>

          <h2 className="mt-10 text-[23px] font-bold leading-snug text-white">
            一份能执行的清单，应该具体到下一步
          </h2>

          <p className="mt-4">
            下面这份结果，没有复杂的分类，也没有很多看起来正确但没法落地的话。它只回答三个问题：什么时候处理、处理什么、下一步做什么。
          </p>

          <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {tasks.map((task, index) => (
              <div
                key={task.title}
                className="grid grid-cols-[34px_1fr] gap-4 py-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/30 text-xs font-bold text-cyan-300">
                  {index + 1}
                </div>

                <div>
                  <p className="text-xs font-semibold text-cyan-300">
                    {task.time}
                  </p>

                  <h3 className="mt-1.5 text-[17px] font-semibold leading-7 text-white">
                    {task.title}
                  </h3>

                  <p className="mt-1.5 text-[14px] leading-6 text-slate-400">
                    {task.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5">
            这里有一个很重要的区别。
          </p>

          <p className="mt-4">
            比如“合同还没有盖章”，只是一个事实。真正的下一步不是把这句话再抄一遍，而是确认合同现在在哪里、由谁负责、卡在哪个环节，以及什么时候能盖完。
          </p>

          <p className="mt-4">
            只有写到这个程度，一条微信消息才算真正变成了一项可以执行的工作。
          </p>

          <h2 className="mt-10 text-[23px] font-bold leading-snug text-white">
            AI 能帮我整理，但它不知道真实进度
          </h2>

          <p className="mt-4">
            用了一段时间以后，我也越来越清楚，这种方法有价值，但不能把所有事情都交给 AI。
          </p>

          <p className="mt-4">
            AI 可以根据文字识别时间要求、事项类型和可能的下一步动作，但它并不知道真实业务情况。
          </p>

          <p className="mt-4">
            它不知道报价单到底有没有完成，也不知道延期资料还缺哪一项，更不知道哪个客户目前最着急、哪个项目风险最高。
          </p>

          <p className="mt-4">
            这些信息往往存在于人的经验、客户关系和实际项目进度里，不会完整地出现在一条微信消息中。
          </p>

          <div className="mt-6 grid gap-5 border-y border-white/10 py-6 md:grid-cols-2">
            <div>
              <h3 className="text-[16px] font-semibold text-white">
                AI 比较适合做的事
              </h3>

              <ul className="mt-3 space-y-2 text-[14px] leading-6 text-slate-400">
                <li>整理零散消息</li>
                <li>识别时间要求</li>
                <li>归纳待办事项</li>
                <li>补充基础的下一步动作</li>
                <li>生成提醒清单</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[16px] font-semibold text-white">
                仍然需要自己判断的事
              </h3>

              <ul className="mt-3 space-y-2 text-[14px] leading-6 text-slate-400">
                <li>真实项目进度</li>
                <li>客户优先级</li>
                <li>资料是否真正完整</li>
                <li>业务风险和责任归属</li>
                <li>是否已经处理完成</li>
              </ul>
            </div>
          </div>

          <p className="mt-5">
            所以我现在更愿意把 AI 当成一个“整理助手”，而不是替我做决定的人。
          </p>

          <h2 className="mt-10 text-[23px] font-bold leading-snug text-white">
            手动复制消息有效，但还不是最终解决方案
          </h2>

          <p className="mt-4">
            目前，把当天重要消息集中复制给 AI，已经能减少一部分遗漏。尤其是在事情比较多的时候，它能帮助我先把头绪理清楚。
          </p>

          <p className="mt-4">
            但这个方法仍然有一个明显问题：每天还需要自己挑选消息、复制内容、重新整理。
          </p>

          <p className="mt-4">
            如果当天特别忙，很可能连整理这一步都会忘记。没有完成的事项，也不会自动出现在第二天的清单里。
          </p>

          <p className="mt-4">
            因此，从长期来看，真正更完整的方案应该是把企业微信、资料文件夹、待办提醒和工作台连接起来。
          </p>

          <p className="mt-4">
            消息进入以后，先自动归类；需要今天处理的事项进入今日待办；没有完成的内容自动保留到明天；相关的资料和聊天记录也能够放在一起。
          </p>

          <p className="mt-4">
            这才是我真正想做的“微信工作秘书”。现在用 AI 手动整理，只是第一步，但这一步能够让我先验证：这个需求到底有没有价值。
          </p>

          <h2 className="mt-10 text-[23px] font-bold leading-snug text-white">
            我最后保留的提醒清单
          </h2>

          <div className="mt-5 border-l-2 border-cyan-400/50 pl-5">
            <ul className="space-y-2.5 text-[15px] leading-7 text-slate-300">
              <li>下午前确认王总的延期资料是否完整。</li>
              <li>尽快回复李经理报价单的明确发送时间。</li>
              <li>今天确认合同卡在哪个盖章环节。</li>
              <li>今天整理人员证书，明天上午发给张总。</li>
            </ul>
          </div>

          <p className="mt-8">
            用了一段时间以后，我发现 AI 在这个场景里最大的价值，并不是替我处理业务，而是先帮我把混乱变清楚。
          </p>

          <p className="mt-4">
            它不能替我确认资料，也不能替我维护客户关系，但它能让我面对一堆零散消息时，先知道今天到底应该做什么。
          </p>

          <p className="mt-4">
            对每天依靠微信处理工作的人来说，这一步看起来不大，但确实能减少遗漏，也能让脑子里少挂几件事。
          </p>

          <div className="mt-10 border-t border-white/10 pt-8 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
            >
              返回知识库
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}