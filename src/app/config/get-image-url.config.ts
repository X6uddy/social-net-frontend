export const getImageUrl = (url = '') => {
    return url ? process.env.BACK_URL + url : null;
}