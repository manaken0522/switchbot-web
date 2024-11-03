import './global.scss'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ja">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>SwitchBot Web</title>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}