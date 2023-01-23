from flask import Flask

app = Flask(__name__)

@app.route("/calculadora")
def hello():
    return "aaaaaaaaaaaaaaa"
