'use client';

import { useI18n } from 'fumadocs-ui/contexts/i18n';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'fumadocs-ui/components/ui/popover';
import { Languages } from 'lucide-react';
import type { SVGProps } from 'react';
import { Github } from './github-icon';
import { ModeSwitcher } from './mode-switcher';
import { Youtube } from './youtube-icon';

interface SidebarFooterProps {
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.24 2h3.68l-8.04 9.19L23.34 22h-7.41l-5.8-7.58L3.5 22H-.18l8.59-9.82L-.66 2h7.6l5.24 6.93L18.24 2Zm-1.29 18.1h2.04L5.83 3.8H3.64l13.31 16.3Z" />
    </svg>
  );
}

export function SidebarFooter({
  githubUrl,
  twitterUrl,
  youtubeUrl,
}: SidebarFooterProps) {
  const { locale, locales, onChange } = useI18n();
  const languageLabel = locale === 'zh' ? '切换语言' : 'Change language';

  return (
    <div className="flex items-center border-t border-fd-border pt-3 text-fd-muted-foreground">
      <div className="flex items-center gap-1">
        {twitterUrl ? (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            title="X (Twitter)"
            className="inline-flex size-8 items-center justify-center rounded-full border border-fd-border bg-transparent transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <XIcon className="size-4" />
          </a>
        ) : null}
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="inline-flex size-8 items-center justify-center rounded-full border border-fd-border bg-transparent transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <Github className="size-4" />
          </a>
        ) : null}
        {youtubeUrl ? (
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            title="YouTube"
            className="inline-flex size-8 items-center justify-center rounded-full border border-fd-border bg-transparent transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <Youtube className="size-4" />
          </a>
        ) : null}
      </div>

      <div className="ms-auto flex items-center gap-1">
        <Popover>
          <PopoverTrigger
            aria-label={languageLabel}
            title={languageLabel}
            className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-fd-border bg-transparent transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <Languages aria-hidden="true" className="size-4" />
          </PopoverTrigger>
          <PopoverContent align="end" className="min-w-40 w-40 p-1">
            {locales?.map((item) => (
              <button
                key={item.locale}
                type="button"
                aria-pressed={item.locale === locale}
                className={`w-full cursor-pointer rounded-lg px-2 py-1.5 text-start text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground ${
                  item.locale === locale
                    ? 'bg-fd-primary/10 text-fd-primary'
                    : 'text-fd-muted-foreground'
                }`}
                onClick={() => onChange?.(item.locale)}
              >
                {item.name}
              </button>
            ))}
          </PopoverContent>
        </Popover>
        <ModeSwitcher />
      </div>
    </div>
  );
}
