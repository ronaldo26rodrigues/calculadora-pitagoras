from flask import Flask, request
from flask_cors import CORS
from math import sqrt, asin, atan, tan, sin, degrees, radians

app = Flask(__name__)
CORS(app)

@app.route("/calculadora")
def hello():
    global triangulo
    triangulo = {
        'catetoA': float(request.args.get('catetoA')),
        'catetoB': float(request.args.get('catetoB')),
        'anguloA': float(request.args.get('anguloA')),
        'anguloB': float(request.args.get('anguloB')),
        'hipotenusa': float(request.args.get('hipotenusa')),
        'altura': float(request.args.get('altura')),
        'h1': float(request.args.get('h1')),
        'h2': float(request.args.get('h2'))
    }
    deg2rad()
    if triangulo['catetoA'] != 0 and triangulo['catetoB'] != 0 and triangulo['hipotenusa'] != 0:
        if e_retangulo(triangulo['catetoA'], triangulo['catetoB'], triangulo['hipotenusa']):
            pass
        else:
            return 'não é retangulo'

    if triangulo['catetoA'] != 0 and triangulo['catetoB'] != 0:
        triangulo['hipotenusa'] = sqrt(triangulo['catetoA']**2+triangulo['catetoB']**2)
        calcular_angulo_ab()
    elif triangulo['catetoA'] != 0 and triangulo['hipotenusa'] != 0:
        triangulo['catetoB'] = sqrt(triangulo['hipotenusa']**2-triangulo['catetoA']**2)
        calcular_angulo_ab()
    elif triangulo['catetoB'] != 0 and triangulo['hipotenusa'] != 0:
        triangulo['catetoA'] = sqrt(triangulo['hipotenusa']**2-triangulo['catetoB']**2)
        calcular_angulo_ab()

    if (triangulo['anguloA'] != 0 and triangulo['anguloB'] != 0) and (triangulo['catetoA'] == 0 or triangulo['catetoB'] == 0 or triangulo['hipotenusa'] == 0):
        if triangulo['catetoA'] != 0:
            triangulo['catetoB'] = triangulo['catetoA']/atan(triangulo['anguloB'])
            triangulo['hipotenusa'] = sqrt(triangulo['catetoA'] ** 2 + triangulo['catetoB'] ** 2)
        if triangulo['catetoB'] != 0:
            triangulo['catetoA'] = tan(triangulo['anguloB'])*triangulo['catetoB']
            triangulo['hipotenusa'] = sqrt(triangulo['catetoA'] ** 2 + triangulo['catetoB'] ** 2)
        if triangulo['hipotenusa'] != 0:
            triangulo['catetoA'] = sin(triangulo['anguloA'])*triangulo['hipotenusa']
            triangulo['catetoB'] = sqrt(triangulo['hipotenusa'] ** 2 - triangulo['catetoA'] ** 2)

    triangulo['altura'] = (triangulo['catetoA']*triangulo['catetoB'])/triangulo['hipotenusa']
    triangulo['h1'] = sqrt(triangulo['catetoA']**2-triangulo['altura']**2)
    triangulo['h2'] = triangulo['hipotenusa'] - triangulo['h1']

    rad2deg()

    print(triangulo)
    return triangulo


def e_retangulo(a, b, c):
    return (a*a+b*b == c*c) or (c*c+b*b == a*a) or (a*a+c*c == b*b)


def calcular_angulo_a():
    print(triangulo['catetoA'])
    triangulo['anguloA'] = asin(triangulo['catetoA']/triangulo['hipotenusa'])


def calcular_angulo_b():
    triangulo['anguloB'] = asin(triangulo['catetoB']/triangulo['hipotenusa'])


def calcular_angulo_ab():
    calcular_angulo_a()
    calcular_angulo_b()


def rad2deg():
    triangulo['anguloA'] = degrees(triangulo['anguloA'])
    triangulo['anguloB'] = degrees(triangulo['anguloB'])


def deg2rad():
    triangulo['anguloA'] = radians(triangulo['anguloA'])
    triangulo['anguloB'] = radians(triangulo['anguloB'])
