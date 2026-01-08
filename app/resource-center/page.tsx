import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import ResourceCenterInteractive from "./components/ResourceCenterInteractive";

export const metadata: Metadata = {
  title: "Resource Center - Shilanui-real-estate",
  description:
    "Access comprehensive real estate guides, interactive calculators, video tutorials, and downloadable resources to make informed property decisions with confidence.",
};

export default function ResourceCenterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ResourceCenterInteractive />
    </main>
  );
}
