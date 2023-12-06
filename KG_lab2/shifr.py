key = [['q','w','e','r','t'],['y','u','i','o','p'],['a','s','d','f','g'],['h','k','l','z','x'],['c','v','b','n','m']] 
# J и I объединены в одну ячейку

text = 'semyonova varvara olegovna'
shifr = ''

import re

# se my on ov av ar va ra ol eg ov na
# wd pc fr nu cs qf sc fq zi dt nu fc - wdpcfrnucsqfscfqzidtnufc

text = re.sub(r'\s+', '', text)

for i in range(0, len(text), 2):
    for j in range(5):
        if text[i] in key[j]:
            index12 = key[j].index(text[i])
            index11 = j
        if text[i+1] in key[j]:
            index22 = key[j].index(text[i+1])
            index21 = j
    print(text[i]+text[i+1], index11, index12, ',', index21, index22)

    if index11 != index21 and index12 != index22:
        shifr = shifr + str(key[index21][index12]) + str(key[index11][index22])
    elif index11 != index21 and index12 == index22:
        if index11 == 4:
            shifr = shifr + str(key[0][index12])
        else:
            shifr = shifr + str(key[index11 + 1][index12])
        if index21 == 4:
            shifr = shifr + str(key[0][index22])
        else:
            shifr = shifr + str(key[index21 + 1][index22])
    elif index11 == index21 and index12 != index22:
        if index12 == 4:
            shifr = shifr + str(key[index11][0])
        else:
            shifr = shifr + str(key[index11][index12 + 1])
        if index22 == 4:
            shifr = shifr + str(key[index21][0])
        else:
            shifr = shifr + str(key[index21][index22 + 1])

print(text)
print(shifr)