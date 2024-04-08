import axios from 'axios';

const instance = axios.create({
    baseURL: `https://api.nf.domains/`,
});

export async function getNfd(address: string): Promise<string | undefined> {
    return await instance
        .get(`/nfd/lookup?address=${address}`)
        .then(({ data }) => data[address]['name'])
        .catch((error) => {
            console.log('ERR', error);
            return undefined;
        });
}
