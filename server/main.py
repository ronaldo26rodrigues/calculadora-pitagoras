from flask import Flask, request
from flask_cors import CORS
from math import sqrt, atan, tan, sin
from util import rad2deg, e_retangulo, calcular_angulo_b, calcular_angulo_ab, deg2rad, calcular_angulo_a

app = Flask(__name__)
CORS(app)


@app.route("/calculadora")
def calculadora():
    # Tri6angulo recebido da requisição
    triangulo = {
        'catetoA': float(request.args.get('catetoA')),
        'catetoB': float(request.args.get('catetoB')),
        'anguloA': float(request.args.get('anguloA')),
        'anguloB': float(request.args.get('anguloB')),
        'hipotenusa': float(request.args.get('hipotenusa')),
        'altura': float(request.args.get('altura')),
        'h1': float(request.args.get('h1')),
        'h2': float(request.args.get('h2')),
        'area': float(request.args.get('area'))
    }
    deg2rad(triangulo)  # recebido em graus, convertido para radianos

    # Se a requisição informa os 3 lados, primeiro testa se eles
    # formam um triângulo retângulo para poder continuar os calculos
    if triangulo['catetoA'] != 0 and triangulo['catetoB'] != 0 and triangulo['hipotenusa'] != 0:
        if e_retangulo(triangulo['catetoA'], triangulo['catetoB'], triangulo['hipotenusa']):
            pass
        else:
            return 'Os valores que você inseriu não formam um triângulo retângulo', 400

    # A partir deste ponto erros matemáticos podem ocorrer devido a valores inconsistentes
    try:
        if triangulo['catetoA'] != 0 and triangulo['catetoB'] != 0:
            triangulo['hipotenusa'] = sqrt(triangulo['catetoA']**2+triangulo['catetoB']**2)
            calcular_angulo_ab(triangulo)
        elif triangulo['catetoA'] != 0 and triangulo['hipotenusa'] != 0:
            triangulo['catetoB'] = sqrt(triangulo['hipotenusa']**2-triangulo['catetoA']**2)
            calcular_angulo_ab(triangulo)
        elif triangulo['catetoB'] != 0 and triangulo['hipotenusa'] != 0:
            triangulo['catetoA'] = sqrt(triangulo['hipotenusa']**2-triangulo['catetoB']**2)
            calcular_angulo_ab(triangulo)
    except ZeroDivisionError:
        return 'Houve uma divisão por zero', 400

    try:
        if (triangulo['anguloA'] != 0 and triangulo['anguloB'] != 0) and \
           (triangulo['catetoA'] == 0 or triangulo['catetoB'] == 0 or triangulo['hipotenusa'] == 0):
            if triangulo['catetoA'] != 0:
                triangulo['catetoB'] = triangulo['catetoA']/atan(triangulo['anguloB'])
                triangulo['hipotenusa'] = sqrt(triangulo['catetoA'] ** 2 + triangulo['catetoB'] ** 2)
            if triangulo['catetoB'] != 0:
                triangulo['catetoA'] = tan(triangulo['anguloB'])*triangulo['catetoB']
                triangulo['hipotenusa'] = sqrt(triangulo['catetoA'] ** 2 + triangulo['catetoB'] ** 2)
            if triangulo['hipotenusa'] != 0:
                triangulo['catetoA'] = sin(triangulo['anguloA'])*triangulo['hipotenusa']
                triangulo['catetoB'] = sqrt(triangulo['hipotenusa'] ** 2 - triangulo['catetoA'] ** 2)

    except Exception:
        return 'Estes valores podem não estar corretos', 400

    # altura e área
    triangulo['altura'] = (triangulo['catetoA']*triangulo['catetoB'])/triangulo['hipotenusa']
    triangulo['h1'] = sqrt(triangulo['catetoA']**2-triangulo['altura']**2)
    triangulo['h2'] = triangulo['hipotenusa'] - triangulo['h1']
    triangulo['area'] = (triangulo['catetoB']*triangulo['catetoA'])/2
    rad2deg(triangulo)

    return triangulo, 200


