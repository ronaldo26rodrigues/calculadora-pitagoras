from math import asin, degrees, radians


def e_retangulo(a, b, c):
    """
        Testa se 3 valores formam um triângulo retângulo
    """
    return (a*a+b*b == c*c) or (c*c+b*b == a*a) or (a*a+c*c == b*b)


def calcular_angulo_a(triangulo):
    """"
        A = arcsen(adjascente(A)/hipotenusa)
    """
    triangulo['anguloA'] = asin(triangulo['catetoA']/triangulo['hipotenusa'])


def calcular_angulo_b(triangulo):
    """"
        B = arcsen(adjascente(B)/hipotenusa)
    """
    triangulo['anguloB'] = asin(triangulo['catetoB']/triangulo['hipotenusa'])


def calcular_angulo_ab(triangulo):
    calcular_angulo_a(triangulo)
    calcular_angulo_b(triangulo)


def rad2deg(triangulo):
    """"
    Converte os ângulos do triângulo de radianos para graus
    """
    triangulo['anguloA'] = degrees(triangulo['anguloA'])
    triangulo['anguloB'] = degrees(triangulo['anguloB'])


def deg2rad(triangulo):
    """"
    Converte os ângulos do triângulo de graus para radianos
    """
    triangulo['anguloA'] = radians(triangulo['anguloA'])
    triangulo['anguloB'] = radians(triangulo['anguloB'])
