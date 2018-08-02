import R from 'ramda';

export const getDateFromString = (str) => new Date(str).toLocaleString(
    'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    }
)

export const getStringOfFields = (field, list) => {
    return R.join(', ', R.pluck(field, list));
};

export const getSliceIfOverflow = (str, len) => {
    if (str.length > len) {
        return R.take(len, str) + '...'
    }
    return str
}