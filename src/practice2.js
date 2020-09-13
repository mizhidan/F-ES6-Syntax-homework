const inject = (item, sections) => {
    const result = [];
    item.forEach((element, elementIndex) => {
        sections.forEach(section => {
            if(section.index === elementIndex) {
                result.push(section.content);
            }
        })
        result.push(element);
    });
    return result;
}
export { inject };
