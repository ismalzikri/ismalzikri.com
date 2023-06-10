async function getData() {
  const res = await fetch('https://my-backend-infra.mhaidarhanif.com/api')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main>
      <h1>Ismal Zikri</h1>
      <pre>{JSON.stringify(data)}</pre>
    </main>
  )
}
