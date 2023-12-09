x = 379317333
xbin = bin(x)
xbin = str(xbin[2:len(xbin)])

print('Число', x, 'в двоичном виде:', xbin)

xbin = xbin[(len(xbin)-5):len(xbin)] + xbin[0:len(xbin)-5]
print('После циклического сдвига влево на 5:', xbin)