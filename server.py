from flask import Flask, send_from_directory
import os

public_folder = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), 'public')
app = Flask(__name__, static_url_path="")


@app.route('/')
def index():
    return send_from_directory(public_folder, 'index.html')


@app.route('/files/<path:route>')
def files(route):
    # Access static files here
    # Implement more elaborate logic as needed
    route = route.split("/")
    filename = route[len(route)-1]
    route = route[:-1]
    route = "/".join(route)
    return send_from_directory(public_folder + "/" + route, filename)


@app.route('/api/<path:route>')
def api(route):
    print(route)
    return "api"


if __name__ == "__main__":
    app.run(debug=True)
