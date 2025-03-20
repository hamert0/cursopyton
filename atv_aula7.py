# Solicita ao usuário que insira um número
numero = int(input("Digite um número para ver sua tabuada:"))

# Exibe a tabuada ao usuário de 1 a 10
print(f"\nTabuada de {numero}:")

for i in range(1, 1001):
    print(f"{numero} x {i} = {numero * i}")