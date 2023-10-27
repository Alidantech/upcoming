# Upcoming.AI

This is an app that allows users, specifically upcoming artists, to post songs. The app uses machine learning to determine the effectiveness of the song and also identifies songs that are closely related to it.

The front-end languages used are JavaScript, HTML, and CSS for the user interface. The back-end utilizes Python(Django) and Postgre for machine learning algorithms and data storage.

## Prerequisites
- Python
- Django
- Postgre

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/Alidante254/upcoming.git
    ```
    ```bash
    cd upcoming
    ```
2. Set up and activate the virtual environment:
    ```bash
    python3 -m venv venv
    venv\bin\activate.bat
    ```

3. Install Python dependencies using pip:
    ```bash
    pip install -r requirements.txt
    ```

4. Start your postgre database server:
    ```bash
    pg_ctl start
    ```
5. Create a database in your postgre server.
    ```sql
    CREATE DATABASE upcoming;
    ```
6. Run a database migration.
    ```bash
    python manage.py migrate
    ```

## Running the Project

1. Run the Django development server:
    ```
    python manage.py runserver
    ```

2. Open your web browser and access the project at [http://localhost:8000/](http://localhost:8000/).

## Usage



## Troubleshooting


