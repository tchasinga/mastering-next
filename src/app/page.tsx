import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1>Balolewami is learning....</h1>

      <div className="flex gap-3 ">
        <Link href='./blog'>Blod</Link>
        <Link href='./about'>About</Link>
        <Link href='./products'>Products</Link>
        <Link href='./login'>Login</Link>
        <Link href='./order-product'>Order</Link>
        <Link href='./complex-dashboard'>Huge Dashboard</Link>
      </div>
    </main>
  )
}
