const gifts = [
    10,
    20,
    30,
    30,
    40
  ];

function prepareGifts(gifts) {
    const pivotIndex = Math.floor(gifts.length / 2)
    const pivot = gifts[pivotIndex];
    const giftsLeft = [];
    const giftsRight = [];

    if (gifts.length > 1) {
        for (let i = 0; i < gifts.length; i++) {
            if (i !== pivotIndex) {
                if (gifts[i] <= pivot && !giftsLeft[i]) {
                    giftsLeft.push(gifts[i])
                } else if (gifts[i] <= pivot && !giftsRight[i]) {
                    giftsRight.push(gifts[i])
                }
            }
        }
    } else {
        return gifts
    }

    return [...prepareGifts(giftsLeft), pivot, ...prepareGifts(giftsRight)];
}


console.log(prepareGifts(gifts))


