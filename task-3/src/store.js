const STORE_KEY = 'myData'

export const setItemsToStore = items => {
        sessionStorage.setItem(STORE_KEY, JSON.stringify(items));
    }

export const getItemsWithStore = () => {
    const data = JSON.parse(sessionStorage.getItem(STORE_KEY))
    console.log('data', data)
    return data === null  ? [] : data;
}

export const clearStore = () => {
    sessionStorage.clear()
}