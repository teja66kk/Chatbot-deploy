from flask import Flask, request, jsonify, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    # Placeholder chatbot response logic
    response_message = "This is a response to: " + user_message
    return jsonify({'message': response_message})

if __name__ == '__main__':
    app.run(debug=True)
