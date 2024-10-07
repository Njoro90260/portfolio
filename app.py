from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Connecting to the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'  # Correct key here
db = SQLAlchemy(app)

# Define the User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)  # Corrected db.String

# Create the database and tables (Uncomment this to create the tables)
# db.create_all()

# Define routes
@app.route('/')
def home():
    return render_template('index.html')

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
