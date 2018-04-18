export function mockGoodsData(size = 15) {
    let data = [];
    for (let i = 0; i < size; i++) {
        data.push({
            name: `冰淇淋${i}`,
            price: (2 + 5 * Math.random()).toFixed(1),
            image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1311259096,1314524532&fm=27&gp=0.jpg'
        });
    }
    return data;
}