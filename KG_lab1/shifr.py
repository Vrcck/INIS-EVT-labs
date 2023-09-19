text = 'srobdoskdehwlf vxevwlwxwlrq flskhuv'
text2 = 'kjgyvgkcvwzqdx nswnqdqsqdji xdkczmn'
alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
num = []

for i in range(0, int(len(text))):
    for j in range(0, int(len(alf))):
        if text[i] == alf[j]:
           num.append(j)
           break
        elif text[i] == ' ':
            num.append(' ')
            break

shifr = []
n=0

for i in range(len(alf) - 1):
    alf.insert(0,alf.pop())
    for j in range(len(num)):
        if num[j] != ' ':
            shifr.append(alf[int(num[j])])
        else:
            shifr.append(' ')
    print('Является ли следующий текст расшифрованным?: ', *shifr)
    a = input()
    if a == 'Да' or a == 'ДА' or a == 'да' or a == 'da' or a == 'DA' or a == 'Da':
        break
    else:
        shifr.clear()

#polyalphabetic substitution ciphers
#kjgyvgkcvwzqdx nswnqdqsqdji xdkczmn
text = []
num = list(text2)
alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
text2 = []

for i in range(len(alf)):
    for j in range(len(shifr)):
        if alf[i] == shifr[j]:
            text.append(num[j])
            text2.append(shifr[j])
            break

print('Ключ шифра простой замены:')
print(*text, ' - Шифр')
print(*text2, ' - Расшифровка')