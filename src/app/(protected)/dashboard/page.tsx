"use client";

export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Dashboard</div>;
}
