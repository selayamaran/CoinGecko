let ENDPOINT = 'https://api.coingecko.com/api/v3/coins';

interface FetchApiArgs {
    path: string;
    body?: unknown;
    responseType?: 'json' | 'text';
    method?: 'GET'
}
  
export async function fetchAPI<T>({
    method = 'GET',
    path,
    body,
    responseType = 'json'
  }: FetchApiArgs): Promise<{ success: true; body: T } | { success: false }> {
 
    let apiUrl = `${ENDPOINT}/${path}`;

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    try {
        const apiReq = await fetch(apiUrl, {
            method,
            headers,
            ...(method === 'GET' ? {} : { body: JSON.stringify(body) }),
        });
  
        // success
        if (apiReq.status < 300 && apiReq.status >= 200) {
            let data;
            if (responseType === 'json') {
            data = await apiReq.json();
            } else if (responseType === 'text') {
            data = await apiReq.text();
            }
            return { success: true, body: data };
        }

        return { success: false };
    } catch (err) {
      return { success: false };
    }
}