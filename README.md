# Upcoming.AI

This is an app that allows users, specifically upcoming artists, to post songs. The app uses machine learning to determine the effectiveness of the song and also identifies songs that are closely related to it.

The front-end languages used are JavaScript, HTML, and CSS for the user interface. The back-end utilizes Python and MongoDB for machine learning algorithms and data storage.

## Prerequisites
- Python (version 3.9)
- Node.js (version 20.2.0)
- npm (version 9.6.6)

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/Alidante254/upcoming.ai.git
    cd upcoming.ai/
    ```

2. Set up and activate the virtual environment:
    ```
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install Python dependencies using pip:
    ```
    pip install -r requirements.txt
    ```

4. Install JavaScript dependencies using npm:
    ```
    npm install
    ```

## Configuration

1. Create a `.env` file in the project root directory and add the necessary environment variables:
    ```python
    DEBUG=True
    SECRET_KEY=your-secret-key
    ```

## Running the Project

1. Run the Django development server:
    ```
    python manage.py runserver
    ```

2. Open your web browser and access the project at [http://localhost:8000/](http://localhost:8000/).

## Usage

Provide instructions on how to use your Django project, including any specific features or functionality related to Wavesurfer.js.

## Troubleshooting

If users encounter any common issues during the installation or usage of your project, you can provide troubleshooting steps in this section.
