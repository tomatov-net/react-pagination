//for using with redux
import axios from 'axios'
export const githubUsers = async () => {
    let data = [];

    await axios.get('https://api.github.com/users?since=0')
        .then((r) => {
            const resp = r.data;
            data = resp.map((user) => {
                return {
                    name: user.login,
                    id: user.id
                }
            });
        }).catch((e) => {
            data = [];
            console.dir(e.message);
        });

    return data;
};