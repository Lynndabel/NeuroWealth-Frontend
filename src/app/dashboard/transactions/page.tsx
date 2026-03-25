import { TransactionFlow } from "@/src/components/transactions/TransactionFlow";
import { Suspense } from "react";

export default function TransactionsPage() {
  return (
    <Suspense fallback={null}>
      <TransactionFlow />
    </Suspense>
  );
}
