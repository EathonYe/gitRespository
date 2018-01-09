function push(array, ...items) {
    array.push(...items);
    console.log(...items);
}

push([], [1, 2, 3]);

console.log(Math.max(1, 2, 5, 7, 4));

const params = {
    sortOrder: 'desc',
    sortName: 'time',
    pageNumber: 10,
    pageSize: 2
};
let {pageNumber, pageSize} = params;
console.log(pageNumber, pageSize);