import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "success" | "secondary" | "danger";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-azul text-white hover:bg-azul-escuro",
  success: "bg-confirmado text-white hover:brightness-95",
  secondary:
    "bg-white text-cinza-escuro border-2 border-cinza-escuro/20 hover:bg-cinza-claro",
  danger: "bg-white text-red-600 border-2 border-red-200 hover:bg-red-50",
};

export function buttonClasses(variant: ButtonVariant = "primary", className = "") {
  return `btn-grande px-6 rounded-xl text-lg font-bold shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center ${VARIANT_CLASSES[variant]} ${className}`;
}

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}

export function LinkButton({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl border border-cinza-escuro/10 shadow-sm p-5 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}

const STATUS_CONFIG = {
  CONFIRMADO: { label: "Confirmado", icon: "✓", fg: "text-confirmado", bg: "bg-confirmado-bg" },
  PENDENTE: { label: "Pendente", icon: "⏳", fg: "text-pendente", bg: "bg-pendente-bg" },
  CANCELADO: { label: "Cancelado", icon: "✕", fg: "text-cancelado", bg: "bg-cancelado-bg" },
} as const;

export function StatusBadge({ status }: { status: keyof typeof STATUS_CONFIG }) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${config.fg} ${config.bg}`}
    >
      <span aria-hidden>{config.icon}</span>
      {config.label}
    </span>
  );
}
