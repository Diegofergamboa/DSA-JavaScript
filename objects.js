function createXmasTree(height, ornament) {
    const widthTree = height + height - 1;
    let innerContent = '';
    const base = '#'
        .padStart((widthTree / 2) + 1, '_')
        .padEnd(widthTree, '_');
    
    for (let i = 1; i <= height; i++) {
        const levelWidth = i + (i - 1);
        const ornaments = ornament.repeat(levelWidth);
        const paddedOrnaments = ornaments
            .padStart((widthTree + levelWidth) / 2, '_')
            .padEnd(widthTree, '_');
        
        innerContent += `${paddedOrnaments}\n`;
    }

    return `${innerContent}${base}\n${base}`;
}


const tree3 = createXmasTree(6, '@')
console.log(tree3)