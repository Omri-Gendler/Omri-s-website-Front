// Utility function to get correct asset paths for different environments
export function getAssetPath(path) {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    // In production (GitHub Pages), use the base URL, in development use root
    return import.meta.env.PROD ? `/Omri-s-website-Front/${cleanPath}` : `/${cleanPath}`
}