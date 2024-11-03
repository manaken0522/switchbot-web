'use client'

export default function Error({error}: {error: Error}) {
    return (
        <div className="flex justify-center">
            <h1>Error</h1>
            <p>{error.message}</p>
        </div>
    )
}