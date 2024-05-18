import Link from "next/link";

export default function Navbar(){
    return (
        <section className="flex items-center justify-between px-4 py-2 bg-slate-800 w-full h-[10vh]">
                <h1>User Auth</h1>
            <aside className="flex items-center gap-4">
                <Link href="/auth/login" >Login</Link>
                <Link href="/auth/register" >Register</Link>
            </aside>
        </section>
    )
}