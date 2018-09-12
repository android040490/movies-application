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

export const splitStringBy = ( string, separator, connector ) => {
    let regExp = new RegExp(separator, 'g');
    return string.replace( regExp, connector )
}

export const firstCharToUpperCase = ( string ) => {
    return(string.charAt(0).toUpperCase() + string.substring(1))
}

export const getSliceIfOverflow = (str, len) => {
    if (str.length > len) {
        return R.take(len, str) + '...'
    }
    return str
}