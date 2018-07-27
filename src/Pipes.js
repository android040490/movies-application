export const getDateFromString = (str) => new Date(str).toLocaleString(
    'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    }
)