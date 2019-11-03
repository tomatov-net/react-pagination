//some api emulation
export const users = () => {
    let data = [];
    for (let i = 0; i < 100; i++) {
        let random = `${i}`;
        data.push({
            name: `Jacob_${random}`,
            id: i
        });

    }
    return data;
};