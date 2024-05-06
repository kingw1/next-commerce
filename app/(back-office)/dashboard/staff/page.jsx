import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        heading="Staff"
        linkTitle="Add Staff"
        href="/dashboard/staff/new"
      />

      <TableActions />

      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
