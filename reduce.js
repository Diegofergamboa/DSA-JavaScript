function organizeShoes(shoes) {
    const leftShoes = shoes.filter(shoe => shoe.type == 'I')
    const sizes = leftShoes.map(item => item.size)
    return shoes.reduce((acc, item) => {
        if (item.type == 'R' &&  sizes.includes(item.size)) {
            acc.push(item.size)
            delete shoes[item]
        }
        return acc;
    }, [])
  }


  const shoes = [
    { type: 'I', size: 39 },
    { type: 'R', size: 39 },
    { type: 'R', size: 39 }
  ]
console.log(organizeShoes(shoes))


