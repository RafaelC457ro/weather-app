import { cn } from '../../libs/utils';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn(`bg-card-background rounded-2xl w-full`, className)}>{children}</div>;
}
