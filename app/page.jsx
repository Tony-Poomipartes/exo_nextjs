"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/jeu">jeux</Link>
      </nav>
    </main>
  )
}

