import Image from 'next/image'

export default function Page() {
    return (
        <div>
            <h1 style={{color: "var(--sb-primary)"}} className="text-4xl text-center">Guide</h1>
            <br />
            <h2 style={{color: "var(--sb-secondary)"}} className="text-3xl text-center">Tokenの入手方法</h2>
            <div className="flex justify-evenly">
                <span>
                    1. &quot;プロフィール&quot; を押します
                    <Image src="/images/1.jpg" width={216} height={0} alt='1' />
                </span>
                <span>
                    2. &quot;設定&quot; を押します
                    <Image src="/images/2.jpg" width={216} height={0} alt='2' />
                </span>
                <span>
                    3. &quot;基本データ&quot; を押します
                    <Image src="/images/3.jpg" width={216} height={0} alt='3' />
                </span>
                <span>
                    4. &quot;アプリバージョン&quot; を連打します
                    <Image src="/images/4.jpg" width={216} height={0} alt='4' />
                </span>
                <span>
                    5. &quot;開発者向けオプション&quot; を押します
                    <Image src="/images/5.jpg" width={216} height={0} alt='5' />
                </span>
                <span>
                    6. TokenとClient Secretが入手できます
                    <Image src="/images/6.jpg" width={216} height={0} alt='6' />
                </span>
            </div>
        </div>
    )
}