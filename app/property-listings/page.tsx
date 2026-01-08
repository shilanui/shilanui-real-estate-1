import type { Metadata } from "next";
import Header from "@/src/components/common/Header";
import PropertyListingsInteractive from "./components/PropertyListingsInteractive";

export const metadata: Metadata = {
  title: "Property Listings - Shilanui-real-estate",
  description:
    "Discover premium properties with intelligent matching, virtual tours, neighborhood insights, and investment metrics. Browse houses, apartments, condos, and villas with advanced search and filtering.",
};

export default function PropertyListingsPage() {
  return (
    <>
      <Header />
      <PropertyListingsInteractive />
    </>
  );
}
