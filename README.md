
* https://laravel.com/docs/10/installation
  # Installation : 1
 git clone https://github.com/kamalkishoree/Word-Combination-App.git

# Installation steps for laravel-backend.

### Go to the project folder

```bash
cd Word-Combination-App/laravel-backend
```

2. Install composer
3. Create environment
4. Start local service


## Installation details


### Install composer

```bash
sudo apt-get install composer
```





### Update dependencies

```bash
composer install
```

### Create environment

* Create initial .env file using the template file .env.example
* Creating a security key for the application

```bash
cp .env.example .env
php artisan key:generate
```

### Activate debug mode (optional)

In `laravel-app/.env`, change APP_DEBUG to true

```
APP_DEBUG=true
```

### Start local service

```bash
php artisan serve
```

### Open local application

http://localhost:8000/


  # Installation : 2

# Installation steps for react-frontend.
### Go to the project folder
```bash
cd Word-Combination-App/react-front-end
```

# How to Install - Step by Step Guide

1. Go to the project folder and run npm install
   #### `cd my-first-project`
   #### `npm install`

2. Now run your app in development
   #### `npm run dev`

### Deployment
##READ MORE
https://create-react-app.dev/docs/deployment/
