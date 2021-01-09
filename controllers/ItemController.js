import fs from "fs";
let products = JSON.parse(fs.readFileSync("./data/products.json", {
    encoding: "utf8",
}));
function getItem(id) {
    for (let category in products) {
        let items = products[category];
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return items[i];
            }
        }
    }
}
export { getItem };
