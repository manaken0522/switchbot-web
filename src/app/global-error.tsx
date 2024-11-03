'use client'

export default function GlobalError({error}: {error: Error}) {
    return (
        <div>
            <h1>GlobalError</h1>
            {error.message}
        </div>
    )
}