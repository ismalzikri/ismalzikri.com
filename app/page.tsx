async function getArticles() {
  const res = await fetch(`${process.env.API_URL}/api/articles`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <main>
      <h1>Ismal Zikri</h1>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
    </main>
  );
}
