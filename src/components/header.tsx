import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header style={{backgroundColor: "var(--sb-primary)", color: "white"}} className="flex justify-center mb-4 w-full h-12">
            <div className="px-64 flex w-full justify-evenly">
                <Link className="text-3xl my-auto" href="/">SwitchBot Web</Link>
                <Link className="text-xl my-auto text-gray-100" href="/">Home</Link>
                <Link className="text-xl my-auto text-gray-100" href="/guide">Guide</Link>
                <Link className="text-xl my-auto text-gray-100" href="/login">Login</Link>
                <Link className="my-auto" href="https://github.com/manaken0522/switchbot-web"><Image src="/images/github.svg" width={40} height={40} className="fill-white" alt="Github" /></Link>
            </div>
        </header>
    )
}