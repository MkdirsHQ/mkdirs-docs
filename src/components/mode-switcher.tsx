'use client';

import { useI18n } from 'fumadocs-ui/contexts/i18n';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'fumadocs-ui/components/ui/popover';
import { useTheme } from 'fumadocs-ui/provider/base';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const labels = {
  en: {
    menu: 'Select theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  zh: {
    menu: '选择主题',
    light: '浅色',
    dark: '深色',
    system: '跟随系统',
  },
} as const;

const themes = [
  ['light', Sun],
  ['dark', Moon],
  ['system', Laptop],
] as const;

interface ModeSwitcherProps {
  className?: string;
}

export function ModeSwitcher({ className }: ModeSwitcherProps) {
  const { locale } = useI18n();
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const copy = labels[locale === 'zh' ? 'zh' : 'en'];

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme : undefined;
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        aria-label={copy.menu}
        title={copy.menu}
        className={`relative inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-fd-border bg-transparent transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground ${className ?? ''}`}
      >
        <Sun
          aria-hidden="true"
          className={`size-4 transition-all ${isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`}
        />
        <Moon
          aria-hidden="true"
          className={`absolute size-4 transition-all ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
        />
      </PopoverTrigger>
      <PopoverContent align="end" className="min-w-40 w-40 p-1">
        {themes.map(([value, Icon]) => (
          <button
            key={value}
            type="button"
            aria-pressed={activeTheme === value}
            className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-start transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground ${
              activeTheme === value
                ? 'bg-fd-primary/10 text-fd-primary'
                : 'text-fd-muted-foreground'
            }`}
            onClick={() => {
              setTheme(value);
              setOpen(false);
            }}
          >
            <Icon aria-hidden="true" className="size-4" />
            <span>{copy[value]}</span>
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
