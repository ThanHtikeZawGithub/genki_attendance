import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center justify-center h-screen w-full">
        <h1 className="text-2xl font-semibold">Login Page Coming Soon..</h1>
        <Link href={'/admin'}>
        <Button>Admin</Button>
        </Link>
    </main>
  )
}
