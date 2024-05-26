// apiService.js
export async function fetchData(endpoint: string) {
    try {
        const response = await fetch(`${endpoint}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching data from ${endpoint}: ${error}`);
    }
}
