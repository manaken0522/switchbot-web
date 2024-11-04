'use client'

import axios from 'axios'

export default function Page() {
    const handleSubmit = () => {
        let element: HTMLElement | null;

        element = document.getElementById('token');
        const tokenElement = element as HTMLInputElement;
        element = document.getElementById('client_secret');
        const csElement = element as HTMLInputElement;

        if(tokenElement.value != '' && csElement.value != '') {
            axios.post('/api/proxy/devices', {token: tokenElement.value, client_secret: csElement.value})
                .then((response) => {
                    console.log(response.data);
                })
        }
    }

    return (
        <div>
            <h1 style={{color: "var(--sb-primary)"}} className="text-4xl text-center mb-4">Login</h1>
            <div className="max-w-xl mx-auto rounded">
                <form className="shadow-2xl rounded p-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label style={{color: "var(--sb-primary)"}} className="block text-sm font-bold mb-2" htmlFor="username">Token</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="token" type="password" placeholder="Token" />
                    </div>
                    <div className="mb-4">
                        <label style={{color: "var(--sb-primary)"}} className="block text-sm font-bold mb-2" htmlFor="username">Client Secret</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="client_secret" type="password" placeholder="Client Secret" />
                    </div>
                    <div className="flex items-center justify-evenly">
                        <button style={{backgroundColor: "var(--sb-primary)"}} className=" text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>Login</button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-600" href="/guide">How to get Token</a>
                    </div>
                </form>
            </div>
        </div>
        
    )
}