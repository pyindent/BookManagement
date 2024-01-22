# Django Vue Book Management App Documentation ✌️ 🐍

![Vue Logo](/src/assets/logo.png "Vue Logo")
![Django Logo](/src/assets/logo-django.png "Django Logo")

Welcome to the documentation for the Django Vue Book Management App – a sleek example application integrating Vue.js and Django Rest Framework.

## Technologies Used

### Django
- Django
- Django REST Framework
- Django REST Framework Simple JWT
- SQLITE

### Vue
- Vue
- Vue Router
- Vuex
- Vuetify
- Axios

## Installation Prerequisites

Ensure you have the following installed on your system:

- Python `v3.12.1`
- Yarn `v1.22.21`

## Project Structure

| Location             |  Content                                   |
|----------------------|--------------------------------------------|
| `/backend`           | Django Project & Backend Configuration    |
| `/apps`              | Django Apps (`/user`, `/books`)            |
| `/src`               | Vue App                                    |
| `/src/main.js`       | JS Application Entry Point                 |
| `/public/index.html` | [HTML Application Entry Point](https://cli.vuejs.org/guide/html-and-static-assets.html) (`/`) |
| `/upload`            | Uploaded Images                            |
| `/dist/`             | Bundled Assets Output (generated at `yarn build`) |

## Project Setup

1. **Clone the Repository:**
   ```bash
   git clone git@github.com:elitesuper/bookmanagementapp.git
   cd django-vue-template
   ```
2. **Backend Setup**
- Create and activate a Python virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Linux
    venv\Scripts\activate     # On Windows
    ```

- Install required Python packages and set up the server:

    ```bash
    pip install -r requirement.txt
    py manage.py makemigrations # On Linux please use python instead py
    py manage.py migrate # On Linux please use python instead py
    py manage.py createsuperuser # On Linux please use python instead py
    py manage.py runserver # On Linux please use python instead py
    ```

3. **Frontend Setup**
- Install Vue packages and start the development server:

    ```bash
    yarn add
    yarn serve
    ```
