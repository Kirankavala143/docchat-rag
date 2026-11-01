import { FileText } from "lucide-react";

import { DocumentStatusBadge } from "@/components/documents/DocumentStatusBadge";
import { cn, displayDocumentName, formatFileSize, formatRelativeTime } from "@/lib/utils";
import type { Document } from "@/types/api";

export function DocumentCard({ document, selected, onSelect }: { document: Document; selected: boolean; onSelect: () => void }) {
  const extension = document.extension.replace(".", "").toUpperCase();
  const meta = document.status === "ready"
    ? `${document.page_count} ${document.page_count === 1 ? "page" : "pages"} · ${formatFileSize(document.size_bytes)}`
    : document.status === "failed"
      ? "Needs attention"
      : "Building search index";

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group w-full rounded-lg border border-transparent p-2.5 text-left transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected && "border-border bg-card text-card-foreground shadow-sm hover:bg-card",
      )}
      aria-pressed={selected}
    >
      <div className="flex gap-3">
        <div className={cn("relative grid h-10 w-9 shrink-0 place-items-center rounded-md border border-border bg-muted text-muted-foreground", selected && "border-primary/30 bg-primary/10 text-primary")}>
          <FileText className="h-4 w-4" strokeWidth={1.8} />
          <span className="absolute -bottom-1 -right-1 rounded border border-border bg-card px-1 text-[7px] font-bold tracking-wide text-muted-foreground">{extension}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <p className="truncate text-[13px] font-medium text-foreground" title={document.filename}>{displayDocumentName(document.filename)}</p>
          </div>
          <div className="mt-1.5 flex min-w-0 items-center justify-between gap-2">
            <span className="truncate text-[10px] text-muted-foreground">{meta}</span>
            {document.status === "ready" ? <span className="shrink-0 text-[9px] text-muted-foreground/80">{formatRelativeTime(document.created_at)}</span> : <DocumentStatusBadge status={document.status} compact />}
          </div>
        </div>
      </div>
    </button>
  );
}
