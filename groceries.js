const groceries = (arr) => {
    if (arr.length === 1) return arr[0].item;

    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].item);
    }

    let list = arr2.join(", ");
    let pos = list.lastIndexOf(",");
    let endsInAnd = list.substring(0, pos) + " and" + list.substring(pos + 1);

    return endsInAnd;
};

let items = [
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
];
// items = [{ item: 'Bread' }, { item: 'Butter' }];
// items = [{ item: 'Cheese Balls' }];

console.log(groceries(items));
