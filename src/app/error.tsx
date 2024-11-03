'use client'

export default function Error({error}: {error: Error}) {
    return (
        <div>
            <h1 style={{color: "var(--sb-primary)"}} className="text-4xl text-center mb-4">Error</h1>
            <p className="text-center">{error.message}</p>
        </div>
    )
}