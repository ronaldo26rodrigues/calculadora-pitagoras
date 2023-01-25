from math import asin, degrees, radians


def e_retangulo(a, b, c):
    return (a*a+b*b == c*c) or (c*c+b*b == a*a) or (a*a+c*c == b*b)


def calcular_angulo_a(triangulo):
    print(triangulo['catetoA'])
    triangulo['anguloA'] = asin(triangulo['catetoA']/triangulo['hipotenusa'])


def calcular_angulo_b(triangulo):
    triangulo['anguloB'] = asin(triangulo['catetoB']/triangulo['hipotenusa'])


def calcular_angulo_ab(triangulo):
    calcular_angulo_a(triangulo)
    calcular_angulo_b(triangulo)


def rad2deg(triangulo):
    triangulo['anguloA'] = degrees(triangulo['anguloA'])
    triangulo['anguloB'] = degrees(triangulo['anguloB'])


def deg2rad(triangulo):
    triangulo['anguloA'] = radians(triangulo['anguloA'])
    triangulo['anguloB'] = radians(triangulo['anguloB'])
