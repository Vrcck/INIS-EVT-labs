alf = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
text = input('Введите текст для зашифровки: ')
a = float(input('Введите десятичный коэффициент: '))
s = float(input('Введите коэффициент сдвига: '))
shifr = ''

import re

text = re.sub(r'\s+', '', text)
for i in range(len(text)):
    x = a*alf.index(text[i])+s
    while x >= len(alf):
        x = x - len(alf)
    shifr = shifr + alf[int(x)]
print('Зашифрованный текст: ', shifr)