import { formatBRL } from "@/lib/money";
import { Button, Card } from "./ui";

export function SuccessModal({
  count,
  totalCents,
  onClose,
}: {
  count: number;
  totalCents: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
    >
      <Card className="w-full max-w-sm text-center">
        <p className="text-3xl mb-2" aria-hidden>
          ✓
        </p>
        <h2 className="text-2xl font-extrabold text-confirmado mb-4">
          SALVO COM SUCESSO!
        </h2>
        <p className="text-lg mb-1">
          {count} {count === 1 ? "novo pagamento foi" : "novos pagamentos foram"}{" "}
          adicionado{count === 1 ? "" : "s"}
        </p>
        <p className="text-2xl font-bold text-verde-escuro mb-6">
          Total: {formatBRL(totalCents)}
        </p>
        <Button variant="success" className="w-full" onClick={onClose} autoFocus>
          OK, VOLTAR
        </Button>
      </Card>
    </div>
  );
}
