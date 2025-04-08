def numJewelsInStones(jewels, stones):
    coincidences_counter = 0
    pointer = len(stones) - 1

    jewelsList = list(jewels)
    stoneslist = list(stones)


    while pointer >= 0:
        if stoneslist[pointer] in jewelsList:
            coincidences_counter += 1

        pointer -= 1

    return coincidences_counter



print(numJewelsInStones('eE', 'ejemploE'))
    