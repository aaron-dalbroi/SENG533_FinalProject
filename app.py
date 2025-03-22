from flask import Flask,redirect,url_for
import time
import random

app = Flask(__name__)


# Helper function to log response times
def log_response_time(start_time):
    end_time = time.time()
    response_time = end_time - start_time
    print(f"Response time: {response_time:.4f} seconds")

@app.route("/")
def entrypoint():

    # Returns a float between 0.0 and 1.0
    rand = random.random()  
    print(rand, flush=True)
    
    # 70% chance for quick task
    if rand < 0.7:
        # Wait 200ms to simulate a quick task with little/no noticable delay to the user.
        time.sleep(0.2)
        return "<p>Quick task complete!</p>"
    
    # 30% chance for slow task
    else:  
        # Wait 2s to simulate a slow task with noticable delay to the user.
        time.sleep(2)
        return "<p>Slow task complete!</p>"


# HEALTH CHECK ENDPOINT
@app.route("/health")
def health_check():
    return "OK", 200

if __name__ == "__main__":
        app.run(host="0.0.0.0", port=5000, debug=True)  # Listening on all interfaces
