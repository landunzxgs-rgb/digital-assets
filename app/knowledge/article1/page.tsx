import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../../components/Header";

export const metadata: Metadata = {
  title: "微信工作消息太多，我是怎么用 AI 把遗漏变成待办的",
  description:
    "记录我在企业资质、人员证书、合同和收付款工作中，如何把零散微信消息整理成可持续跟进的待办清单，以及 AI 的实际作用和使用边界。",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />

      <article className="mx-auto max-w-[760px] px-6 pb-20 pt-10">
        <Link
          href="/knowledge"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
        >
          <span>←</span>
          返回知识库
        </Link>

        <header className="mt-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300">
            AI 工作秘书
          </p>

          <h1 className="mt-4 text-[30px] font-bold leading-[1.3] tracking-tight text-white md:text-[38px]">
            微信工作消息太多，我是怎么用 AI 把遗漏变成待办的
          </h1>

          <p className="mt-4 text-[15px] leading-7 text-slate-400">
            这不是一篇工具介绍，而是我在真实工作中处理微信消息和未完成事项的一次复盘。
          </p>
        </header>

        <div className="mt-10 text-[15px] leading-7 text-slate-300">
          <p>
            一天下来，微信里会塞满各种事情。
          </p>

          <p className="mt-4">
            有客户问资质延期，有人员要报名或复审，有合同要写，还有收款、付款需要核对。
          </p>

          <p className="mt-4">
            真正麻烦的不是事情多，而是这些事情不会排队等你。新的消息一来，原来记在纸上的内容很快就被压下去。
          </p>

          <p className="mt-4">
            最容易忘的，往往不是大事，而是那些“我已经答应了，但不是现在马上办”的事情。
          </p>

          <p className="mt-4">
            比如人员证书报名、复审节点，或者一笔还需要继续核对的收付款。事情当时记住了，过一会儿被其他工作打断，就可能彻底沉下去。
          </p>

          <h2 className="mt-9 text-[22px] font-bold leading-snug text-white">
            纸笔能记录，但不能追踪
          </h2>

          <p className="mt-4">
            我以前主要靠记忆和纸笔。
          </p>

          <p className="mt-4">
            后来我发现，纸笔能解决“当时记下来”，却不能保证“以后还会再看到”。
          </p>

          <p className="mt-4">
            它能告诉我“我记过”，却不能提醒我“这件事还没做完”。
          </p>

          <p className="mt-4">
            新事情不断插进来以后，旧记录越来越靠后。人员证书报名或复审节点容易漏掉，收付款核对也可能没有及时确认。
          </p>

          <h2 className="mt-9 text-[22px] font-bold leading-snug text-white">
            第一次用 AI，我只会说“帮我整理一下”
          </h2>

          <p className="mt-4">
            一开始，我也不知道应该怎么给 AI 下指令。
          </p>

          <p className="mt-4">
            我会把几条微信消息复制进去，然后只说一句：
          </p>

          <blockquote className="mt-4 border-l-2 border-cyan-400/60 pl-5 text-slate-200">
            帮我整理一下。
          </blockquote>

          <p className="mt-5">
            AI 确实整理了，内容看起来也比原消息整齐。
          </p>

          <p className="mt-4">
            但我看完以后，还是不知道先做什么。
          </p>

          <p className="mt-4">
            它只是告诉我发生了什么，却没有告诉我哪件事今天必须处理、哪件事以后还要继续跟进、下一步应该做什么，以及现在到底完成了没有。
          </p>

          <p className="mt-4">
            后来我才明白，我需要的不是一份聊天摘要，而是一张“未完成事项地图”。
          </p>

          <h2 className="mt-9 text-[22px] font-bold leading-snug text-white">
            真正有用的不是总结，而是工作状态
          </h2>

          <p className="mt-4">
            这张“未完成事项地图”，至少要回答七个问题：
          </p>

          <ul className="mt-4 space-y-2 pl-5 text-slate-300">
            <li className="list-disc">谁的事情</li>
            <li className="list-disc">具体是什么事</li>
            <li className="list-disc">什么时候处理</li>
            <li className="list-disc">今天是否必须完成</li>
            <li className="list-disc">以后是否还要继续跟进</li>
            <li className="list-disc">下一步动作是什么</li>
            <li className="list-disc">当前是否已经完成</li>
          </ul>

          <p className="mt-5">
            另外，涉及收付款的事情要单独列出来；没有完成的事项，下一次整理时还要继续保留。
          </p>

          <p className="mt-4">
            把这些要求写清楚以后，AI 给出的结果明显比原来有用。
          </p>

          <p className="mt-4">
            比如一句：
          </p>

          <blockquote className="mt-4 border-l-2 border-cyan-400/60 pl-5 text-slate-200">
            合同还没盖章。
          </blockquote>

          <p className="mt-5">
            以前 AI 可能只会整理成：
          </p>

          <blockquote className="mt-4 border-l-2 border-slate-600 pl-5 text-slate-400">
            跟进合同盖章。
          </blockquote>

          <p className="mt-5">
            现在我会要求它写清楚：
          </p>

          <blockquote className="mt-4 border-l-2 border-cyan-400/60 pl-5 text-slate-200">
            今天确认合同目前在哪里、由谁负责、卡在哪个环节，以及预计什么时候完成。当前状态：待跟进。
          </blockquote>

          <p className="mt-5">
            同样一句话，从“记录事实”变成了“推动事情往前走”。
          </p>

          <h2 className="mt-9 text-[22px] font-bold leading-snug text-white">
            我现在实际使用的提示词
          </h2>

          <p className="mt-4">
            目前，我仍然是把重要微信消息手动复制给 ChatGPT。
          </p>

          <p className="mt-4">
            我现在会使用类似下面的要求：
          </p>

          <blockquote className="mt-5 border-l-2 border-cyan-400/60 pl-5 text-[14px] leading-7 text-slate-200">
            <p>
              请你扮演我的工作助理，把下面的微信工作消息整理成一份可以持续跟进的工作清单。
            </p>

            <p className="mt-3">每一项必须包含：</p>

            <ol className="mt-2 space-y-1 pl-5">
              <li className="list-decimal">客户或相关人员</li>
              <li className="list-decimal">具体事项</li>
              <li className="list-decimal">今天是否必须处理</li>
              <li className="list-decimal">以后是否需要继续跟进</li>
              <li className="list-decimal">明确时间</li>
              <li className="list-decimal">下一步动作</li>
              <li className="list-decimal">
                当前状态：未开始、处理中、待确认或已完成
              </li>
            </ol>

            <p className="mt-3">另外：</p>

            <ul className="mt-2 space-y-1 pl-5">
              <li className="list-disc">
                涉及收款或付款的事项单独列出
              </li>
              <li className="list-disc">
                未完成事项继续保留
              </li>
              <li className="list-disc">
                不要只复述原消息
              </li>
              <li className="list-disc">
                信息不足时标记“待确认”
              </li>
              <li className="list-disc">
                不得编造款项是否到账
              </li>
              <li className="list-disc">
                不得自行判断人员证书是否能够使用
              </li>
            </ul>

            <p className="mt-3">
              微信工作消息如下：
            </p>

            <p className="mt-2 text-slate-400">
              【把当天的重要消息粘贴到这里】
            </p>
          </blockquote>

          <p className="mt-5">
            这个提示词并不复杂，但它改变了一件事：
          </p>

          <p className="mt-4 font-medium text-white">
            AI 不再只是整理文字，而是开始整理工作状态。
          </p>

          <h2 className="mt-9 text-[22px] font-bold leading-snug text-white">
            AI 可以整理，但不能替我确认事实
          </h2>

          <p className="mt-4">
            这个方法有效，但边界也很明确。
          </p>

          <p className="mt-4">
            AI 可以帮我整理“这笔收款需要核对”，但不能替我确认钱是否真的到账。
          </p>

          <p className="mt-4">
            它可以标记“人员证书待核验”，但不能替我判断这个人员能不能真正使用。
          </p>

          <p className="mt-4">
            涉及资金、人员、证书有效性、资料真实性和实际业务进度，最后仍然必须人工确认。
          </p>

          <p className="mt-4">
            所以我现在更愿意把 AI 当成整理助手，而不是业务判断者。
          </p>

          <h2 className="mt-9 text-[22px] font-bold leading-snug text-white">
            手动复制有效，但还不是最终解决方案
          </h2>

          <p className="mt-4">
            目前，把重要微信消息手动复制给 ChatGPT，已经比完全靠记忆和纸笔清楚很多。
          </p>

          <p className="mt-4">
            但只要我忙到忘记复制，那些消息仍然可能留在聊天窗口里。前一天没有完成的事项，也需要和第二天的新消息重新放到一起。
          </p>

          <p className="mt-4">
            所以我越来越确定，真正需要的不是一次整理，而是一套能够持续保留未完成事项的工作机制。
          </p>

          <p className="mt-4">
            这也是我最近一直在完善“微信工作助手”的原因。
          </p>

          <p className="mt-4">
            我希望它以后不只是帮我临时整理一次消息，而是能把聊天中的待办、时间节点、收付款事项和未完成任务持续保留下来。
          </p>

          <p className="mt-4">
            新的消息进来以后自动归类，今天必须处理的进入今日清单，已经处理的事项可以关闭，没有完成的继续保留到下一天。
          </p>

          <p className="mt-4">
            现在它还在不断调整和测试。我也在把真实工作里遇到的问题一点点放进去。等这个流程真正稳定下来，我会继续整理它的使用方式、实际效果和中间踩过的坑。
          </p>

          <p className="mt-8">
            对我来说，AI 最有价值的地方，不是替我做业务，而是让那些已经答应、还没完成的事情，不再悄悄消失。
          </p>

          <p className="mt-4 font-medium text-white">
            这也是“微信工作助手”真正想解决的问题。
          </p>

          <div className="mt-12 text-center">
            <Link
              href="/knowledge"
              className="inline-flex items-center justify-center text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              ← 返回知识库
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
} 