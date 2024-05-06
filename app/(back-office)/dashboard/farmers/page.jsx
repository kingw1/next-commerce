import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        heading="Farmers"
        linkTitle="Add Farmer"
        href="/dashboard/farmers/new"
      />

      <TableActions />

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
