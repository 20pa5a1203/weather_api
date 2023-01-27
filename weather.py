from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/weather', methods=['GET'])
def weather():
    city = request.args.get('city')
    if not city:
        return "Please provide a city name in the 'city' query parameter", 400
    api_key = "YOUR_API_KEY" # replace with your API key
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid=081c7cbb1eb464e8c5bf244e8134ecfd"
    response = requests.get(url)
    if response.status_code != 200:
        return "Error: " + response.text, response.status_code
    return response.text

if __name__ == '__main__':
    app.run(debug=True)
