# Import necessary components from the Flask library.
from flask import Flask, render_template

# Create an instance of the Flask application.
# The __name__ argument is used to help Flask locate resources like templates.
app = Flask(__name__)

# The `@app.route('/')` decorator defines the URL route for the homepage.
# When a user visits the root URL, this function will be executed.
@app.route('/')
def home():
    """
    This function renders the main dashboard page.
    It tells Flask to find and display the 'dashboard.html' file
    from the 'templates' directory.
    """
    return render_template('dashboard.html')

# This is the standard way to run a Flask application.
# It ensures the server only starts when the script is executed directly.
if __name__ == '__main__':
    # `app.run()` starts the web server.
    # host='0.0.0.0' makes the server accessible from any device on your network.
    # debug=True enables live reloading, which is useful for development.
    app.run(host='0.0.0.0', debug=True)

