import { useEffect, useRef } from 'react'

export function useEffectUpdate(fn, deps) {
    const isMountedRef = useRef(false)
    
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true
            return
        }
        
        return fn()
    }, deps)
}