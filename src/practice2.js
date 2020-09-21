const inject = (item, sections) => {
    // TODO 数组与数组之间转化用map
    const result = [];
    item.forEach((element, elementIndex) => {
        sections.forEach(section => {
            if(section.index === elementIndex) {
                // TODO 嵌套太多，想想有没有减少嵌套的办法
                // TODO 查一查数组的splice方法
                result.push(section.content);
            }
        })
        result.push(element);
    });
    return result;
}
export { inject };
