export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/lists", {
    cache: "no-store",
  });
  const data = await response.text();

  return <div>GoCart!</div>;
}
