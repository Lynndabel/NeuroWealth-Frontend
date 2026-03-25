import { PortfolioDashboard } from "@/src/components/dashboard/PortfolioDashboard";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <PortfolioDashboard />
    </Suspense>
  );
}
