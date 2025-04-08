def numJewelsInStones(jewels, stones):
    count = {}
    jewels_in_stones = 0

    for letter in stones:
        count[letter] = count.get(letter, 0) + 1


    for jewel in jewels:
        if count.get(jewel):
            jewels_in_stones += count[jewel]

    return jewels_in_stones


print(numJewelsInStones('eE', 'ejemploE'))
    