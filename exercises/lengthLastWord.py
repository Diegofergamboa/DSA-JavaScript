def lengthOfLastWord(s):
    if(len(s) > 1):
        stringWithoutSpaces = s.strip()
        indexLastSpace = stringWithoutSpaces.rfind(" ")
        return len(stringWithoutSpaces[indexLastSpace:len(s)]) - 1
    else:
        return len(s) + 1



print(lengthOfLastWord('This is an example'))
