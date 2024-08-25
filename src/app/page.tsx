import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1>Balolewami is learning....</h1>

      <div className="flex gap-3 ">
        <Link href='./photo-feed'>Photo feed</Link>
        <Link href='./blog'>Blogs</Link>
        <Link href='./mainrender'>My function</Link>
      </div>
    </main>
  )
}
