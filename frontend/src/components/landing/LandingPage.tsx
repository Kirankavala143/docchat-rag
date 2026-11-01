
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Files,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Brand } from "@/components/common/Brand";
import { Button } from "@/components/ui/button";

interface LandingPageProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: Files,
    title: "Your documents, organized",
    description:
      "Upload your documents and keep the information you need in one workspace.",
  },
  {
    icon: MessageSquareText,
    title: "Ask questions naturally",
    description:
      "Chat with your documents using AI instead of manually searching every page.",
  },
  {
    icon: FileSearch,
    title: "Answers you can verify",
    description:
      "Explore source passages and citations to understand where answers come from.",
  },
];

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />

          <Button onClick={onGetStarted} className="gap-2 rounded-lg">
            Sign in
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.12),_transparent_55%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Your AI-powered document workspace
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Turn your documents into{" "}
              <span className="text-blue-600">clear answers.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Upload documents, ask questions in natural language, and explore
              source-backed answers in one focused workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={onGetStarted}
                className="h-12 gap-2 rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>

              <a
                href="#features"
                className="inline-flex h-12 items-center rounded-xl border border-slate-200 px-5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                Source-backed answers
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-blue-600" />
                Account-protected workspace
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-blue-950/10">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <span className="ml-2 text-xs font-medium text-slate-500">
                  DocChat workspace
                </span>
              </div>

              <div className="space-y-5 p-5 sm:p-7">
                <div className="flex gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-600 text-white">
                    <Files className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Your knowledge, connected</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Documents ready to search and discuss
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    YOUR QUESTION
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-800">
                    What are the main findings in this document?
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-900">
                    <Sparkles className="h-4 w-4" />
                    Document-grounded answer
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Get a focused response based on your uploaded material,
                    with references that help you check the original source.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-xs text-blue-700">
                    <FileSearch className="h-3.5 w-3.5" />
                    Source references available
                  </div>
                </div>

                <p className="text-center text-[11px] text-slate-400">
                  Illustrative preview · Not live document data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-blue-600">BUILT FOR YOUR WORKFLOW</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Work smarter with your documents
            </h2>
            <p className="mt-4 text-slate-600">
              Find information faster while keeping answers connected to their sources.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={onGetStarted}
              className="gap-2 rounded-xl bg-blue-600 px-6 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <Brand compact />
          <p>DocChat · AI-powered document conversations</p>
        </div>
      </footer>
    </main>
  );
}
