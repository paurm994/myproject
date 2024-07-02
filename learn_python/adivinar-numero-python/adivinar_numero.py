import random


def adivinar(x):
    numero_aleatorio = random.randint(1, x)
    numero_usuario = 0
    while numero_usuario != numero_aleatorio:
        numero_usuario = int(input(f"Adivina un número entre 1 y {x}: "))
        if numero_usuario < numero_aleatorio:
            print("Mal!! El número que has metido es demasiado pequeño")
        elif numero_usuario > numero_aleatorio:
            print("Mal!! El número que has metido es demasiado grande")
    print(f"Felicidades!! Has acertado el número {numero_aleatorio} mamoncete!!!!!!")

adivinar(100)