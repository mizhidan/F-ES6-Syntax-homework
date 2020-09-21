// TODO 使用解构的方式取出data与column
const parseData = (input) => {
    // TODO 使用map做数组与数组的转化，不用声明result
    const result = []
    input.data.forEach(array => {
        let columnObj = {}
        // TODO 不需要单独声明index, 可以查一下forEach内函数的第二个参数就是index
        let arrayIndex = 0
        input.column.forEach(obj => {
            columnObj[obj.name] = array[arrayIndex]
            arrayIndex++
        })
        result.push(columnObj)
    })
    return result;
}


export { parseData };
