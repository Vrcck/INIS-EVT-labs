n = 2244899301
x = 379317333
xor = ''

nbin = bin(n)
nbin = str(nbin[2:len(nbin)])
xbin = bin(x)
xbin = str(xbin[2:len(xbin)])

while len(nbin) > len(xbin):
    xbin = '0' + xbin

for i in range(len(nbin)):
    if nbin[i] == xbin[i]:
        xor = xor + '0'
    else:
        xor = xor + '1'
print('Число', n, 'в десятичном виде:', nbin)
print('Число', x, 'в десятичном виде:', xbin)
print('Сумма по модулю 2 этих чисел:', xor)