'use client'

export default function GlobalError({error}: {error: Error}) {
    return (
        <div className="flex justify-center">
            <h1>Global Error</h1>
            {error.message}
        </div>
    )
}