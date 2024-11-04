'use client'

import axios, { AxiosError } from 'axios';

export default function Page() {
    const handleSubmit = () => {
        let element: HTMLElement | null;

        element = document.getElementById('token');
        const tokenElement = element as HTMLInputElement;
        element = document.getElementById('client_secret');
        const csElement = element as HTMLInputElement;

        if(tokenElement.value != '' && csElement.value != '') {
            axios.post('/api/proxy/devices', {token: tokenElement.value, client_secret: csElement.value})
                .then(response => {
                    if(response.status === 200) {
                        console.log(response.data);
                    }
                })
                .catch(error => {
                    if(error instanceof AxiosError) {
                        if(error.status === 401) {
                            console.log('TokenかClient Secretが間違っています');
                        }
                        else if(error.status === 500) {
                            const responseJson = JSON.parse(error.response?.data);
                            if(responseJson.type === 0) {
                                console.log('プロキシでエラーが返されました');
                            }
                            else if(responseJson.type === 1) {
                                console.log('SwitchBot APIでエラーが返されました');
                            }
                        }
                    }
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