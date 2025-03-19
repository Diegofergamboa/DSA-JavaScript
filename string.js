// createFrame(['midu', 'madeval', 'educalvolpz'])

// // Expected result:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************


function createFrame(names) {
    const allLengths = names
        .map(name => name.length)

    const maxLength = Math.max(...allLengths)
    const border = '*'.repeat(maxLength + 4);

    const content = names
        .map(name => `* ${name.padEnd(maxLength)} *`)
        .join("\n")

    return border + '\n' + content + '\n' + border;
}

console.log(createFrame(['hola', 'qwdqwdqwdqwdqwdw']))