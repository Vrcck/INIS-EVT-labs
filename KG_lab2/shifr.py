key = [['q','w','e','r','t'],['y','u','i','o','p'],['a','s','d','f','g'],['h','k','l','z','x'],['c','v','b','n','m']]
text = 'semyonova varvara olegovna'
bigramm = []
shifr = ''

import re

# se my on ov av ar va ra ol eg ov na
# wd pc fr nu cs qf sc fq zi dt nu fc - wdpcfrnucsqfscfqzidtnufc

text = re.sub(r'\s+', '', text)
print(text)
#for i in range (len(text)):

