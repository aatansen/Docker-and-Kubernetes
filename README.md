<div align="center">
<h1>Docker and Kubernetes</h1>
</div>

## Context
- [Context](#context)
  - [Docker Setup](#docker-setup)
  - [Basic Docker Containers](#basic-docker-containers)
    - [Creating First Docker Container](#creating-first-docker-container)
    - [Ubuntu Container](#ubuntu-container)
    - [Busybox Container](#busybox-container)
    - [Alpine Container](#alpine-container)
    - [Alpine vs Busybox](#alpine-vs-busybox)
    - [Notes I](#notes-i)
  - [Port and Volume Mapping in the Docker Containers](#port-and-volume-mapping-in-the-docker-containers)
    - [Running Nginx with exposed Port](#running-nginx-with-exposed-port)
    - [Nginx container with custom content](#nginx-container-with-custom-content)
    - [Using path variable in volume mapping](#using-path-variable-in-volume-mapping)
    - [Notes II](#notes-ii)
  - [Docker Containers Management (Ubuntu, NGINX)](#docker-containers-management-ubuntu-nginx)
    - [Running containers in background](#running-containers-in-background)
    - [Notes III](#notes-iii)
    - [Running container with Pseudo TTY](#running-container-with-pseudo-tty)
    - [Creating multiple Ubuntu containers from the same image](#creating-multiple-ubuntu-containers-from-the-same-image)
    - [Running multiple Nginx servers](#running-multiple-nginx-servers)
    - [Notes IV](#notes-iv)
    - [Cleaning up stopped containers](#cleaning-up-stopped-containers)
  - [Running Python Applications in Docker](#running-python-applications-in-docker)
    - [Get python image](#get-python-image)
    - [Simple Python program](#simple-python-program)
    - [CHALLENGE Simple Python calendar app](#challenge-simple-python-calendar-app)
    - [Notes V](#notes-v)
  - [Running Node.js Applications in Docker](#running-nodejs-applications-in-docker)
    - [Running Node.js container](#running-nodejs-container)
    - [Hello World Application with Node](#hello-world-application-with-node)
    - [Express web server using Node](#express-web-server-using-node)
    - [Add handling of the SIGINT and SIGTERM signals (CTRL+C)](#add-handling-of-the-sigint-and-sigterm-signals-ctrlc)
    - [CHALLENGE Create files handling Node app](#challenge-create-files-handling-node-app)

### Docker Setup

- Download and install [Docker](https://www.docker.com/products/docker-desktop/)
- Now open Docker to complete the setup

[⬆️ Go to Context](#context)

### Basic Docker Containers

#### Creating First Docker Container

- Open terminal and run `docker run hello-world`
- To see the images run `docker images`
- To see the list of running images run `docker ps` or `docker container ls`

[⬆️ Go to Context](#context)

#### Ubuntu Container

- Run `docker run ubuntu`
- See detail log or running container `docker ps -a`
- Only using `run` command it existed immediately
- Run Ubuntu container by `docker run -it ubuntu`
- See list of bin inside Ubuntu container `ls bin`
- Get host details by running `hostname -i`
- Get the details of running Ubuntu `cat /etc/os-release`
- Exit container by running `exit`

[⬆️ Go to Context](#context)

#### Busybox Container

- It is not fully featured OS; It is just collection of utilities
- Run `docker run busybox`
- Similarly run `docker run -it busybox`

[⬆️ Go to Context](#context)

#### Alpine Container

- Run `docker pull alpine`
- Now run `docker run -it alpine`

#### Alpine vs Busybox

- Alpine is based on busybox
- Alpine is fully featured OS
- Busybox is not OS
- Busybox is collection of utilities

[⬆️ Go to Context](#context)

#### Notes I

> [!NOTE]
>
> - To get an image `docker pull image_name`
> - To run a container interactively `docker run -it image_name`
> - To exit a container `exit`
> - To get the list of running container `docker ps`
> - `-it` is referred to `interactive` & `TTY`

[⬆️ Go to Context](#context)

### Port and Volume Mapping in the Docker Containers

#### Running Nginx with exposed Port

- Get the image `docker pull nginx`
- Run the container `docker run nginx`
- Open browser and navigate to `localhost:80`
  - It will refuse to connect
  - Stop the container
  - To stop a running container `docker stop container_id`
    > only first three letters of the `container_id` will do the work
  - Run `docker run -p 8080:80 nginx`
  - Now navigate to `localhost:8080`

[⬆️ Go to Context](#context)

#### Nginx container with custom content

- Create HTML file `index.html`
- Copy the path where `index.html` is created `full_path_of_ngnix_container`
  - `H:...\Docker-and-Kubernetes\containers\ngnix`
- Now run `docker run -p 8081:80 -v "full_path_of_ngnix_container:/usr/share/nginx/html" nginx`
  > In PowerShell: `docker run -p 8081:80 -v ${PWD}:/usr/share/nginx/html nginx`
- Navigate to `localhost:8081` to see the output of `index.html`
- Adding favicon to the project
  - Generate free favicon from text [favicon.io](https://favicon.io/favicon-generator/)
  - Unzip the downloaded favicon in `index.html` path
  - Now add those in the head section of HTML

    ```html
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    ```

[⬆️ Go to Context](#context)

#### Using path variable in volume mapping

- In Linux run `docker run -p 8081:80 -v $PWD:/usr/share/nginx/html nginx`
- In windows `PowerShell` or `Git Bash` run `docker run -p 8081:80 -v ${PWD}:/usr/share/nginx/html nginx`

[⬆️ Go to Context](#context)

#### Notes II

> [!NOTE]
>
> - To stop a container `docker stop container_id`
> - `-p` is referred to port & `-v` is referred to `volume`
> - For volume mapping `$PWD` is used
> - New name can be assigned by `--name` option

[⬆️ Go to Context](#context)

### Docker Containers Management (Ubuntu, NGINX)

#### Running containers in background

- Run `docker run hello-world`
  - This will terminate automatically as there is no process to run in the container. The same goes for `docker run alpine`
- Check history `docker history alpine`
- Run in background with `-d` `docker run -p 8081:80 -d nginx`

[⬆️ Go to Context](#context)

#### Notes III

> [!NOTE]
>
> - To check container history `docker history container_name` e.g: `docker history alpine`
> - To run container in background `-d` e.g: `docker run -p 8081:80 -d nginx`

[⬆️ Go to Context](#context)

#### Running container with Pseudo TTY

- To run a container with a **Pseudo TTY**, we use the `-t` option.
  - `docker run -i -t alpine`
- We can also combine `-i` (interactive) and `-t` (TTY) into a single option
  - `docker run -it alpine`

[⬆️ Go to Context](#context)

#### Creating multiple Ubuntu containers from the same image

- Running the following command in different terminal sessions will create multiple containers:
  - `docker run -it ubuntu`
- Each execution of this command starts a new container based on the Ubuntu image.

- Characteristics of Created Containers:
  - Each container has a unique Container ID.
    - `docker ps -a --format "{{.ID}} {{.Image}}"`
  - Each container runs in isolation from the others.
  - Each container has its own file system and processes.
    - We can check it by creating different files in those containers
  - Each container has different IP addresses assigned by Docker.
    - `hostname -i`
  - Changes made inside a container do not affect the base image or other containers unless explicitly shared.

[⬆️ Go to Context](#context)

#### Running multiple Nginx servers

- Go to the custom content path 1 `containers/ngnix1`
  - Run `docker run -p 8081:80 -v ${PWD}:/usr/share/nginx/html --name nginx1 nginx`
- Go to the custom content path 2 `containers/ngnix2`
  - Run `docker run -p 8082:80 -v ${PWD}:/usr/share/nginx/html --name nginx2 nginx`
- Now we can access both nginx by navigating to `localhost:8081` and `localhost:8082`

> As we are using different ports, we can run multiple containers on Nginx

[⬆️ Go to Context](#context)

#### Notes IV

> [!NOTE]
>
> - To remove a container `docker rm name/id`
> - To remove all containers `docker rm $(docker ps -a -q)`
> - To restart a previously run container `docker start/restart name/id`
> - To get into running container `docker attach running_container_id`
> - To start and get into container `docker start -ai container_id`

[⬆️ Go to Context](#context)

#### Cleaning up stopped containers

- `docker run name/id` create new container
- Docker start is used to start a stopped container
- `docker rm name/id` is used to remove a container
- Remove multiple containers `docker rm container_id1 container_id2`
- Remove all containers `docker container prune`
- Remove all containers & images `docker system prune -a -f`

[⬆️ Go to Context](#context)

### Running Python Applications in Docker

#### Get python image

- Run `docker pull python` to get the image
- Run `docker run -it python` to run the image
- `help()` to get the list of commands
- `q` to exit from `help` section
- `exit` to exit from python container

[⬆️ Go to Context](#context)

#### Simple Python program

- Create a file `containers/python/first.py`
- Now run `docker run -it -v ${PWD}/containers/python/:/app python python3 app/first.py`
  - Here normally we run `docker run -it python` to run the python container
  - `-v ${PWD}/containers/python/:/app` → Mounts local folder to `/app` in the container.
  - `python3 app/first.py` → Runs the Python file inside the container.
  - We can add `-w /app` to change the working directory to `/app` and run the file from there.
  - `docker run -it -v ${PWD}/containers/python/:/app -w /app python python3 first.py`

[⬆️ Go to Context](#context)

#### CHALLENGE Simple Python calendar app

- Show a month of the year in the terminal using the `calendar` module

  - Create the file `containers/python/calender_app.py`

    ```py
    import calendar

    print("Welcome to the calender application")

    year = int(input("Enter any year number: "))
    month = int(input("Enter any month number: "))

    print(calendar.month(year, month))
    print("Have a nice day :)")
    ```

- Run `docker run -it -v ${PWD}/containers/python/:/app -w /app python python3 calender_app.py`

[⬆️ Go to Context](#context)

#### Notes V

> [!NOTE]
>
> - In cmd `${PWD}` won't work so use `%cd%`
> - `docker run -it -v "%cd%/containers/python/:/app" -w /app python python3 calender_app.py`

[⬆️ Go to Context](#context)

### Running Node.js Applications in Docker

#### Running Node.js container

- Pull node image
  - `docker pull node`
- Run the container
  - `docker run -it node`
- Exit by `.exit`

> Here `docker run node` will exit immediately so `-it` is used for REPL(Read Eval Print Loop) interactively and give it a `TTY` and `stdin`

[⬆️ Go to Context](#context)

#### Hello World Application with Node

- Create [hello.js](./containers/node/hello.js) inside [containers](./containers/node/)

  ```js
  console.log("Executed by Node.js container!");
  ```

- Now run the command

  ```sh
  docker run -it -v "%cd%/containers/node/:/app" -w /app node node hello.js
  ```

  - Here `-it` is `TTY` and `stdin` for REPL(Read Eval Print Loop)
  - `-v "%cd%/containers/node/:/app"` is volume assign to `/app`path
  - `-w /app` which is working directory
  - `node` is image name
  - and finally `node hello.js` which will be run after the creation of the container
  - So simply it is `docker run -it node hello.js` with more extra things

[⬆️ Go to Context](#context)

#### Express web server using Node

- Create [express](./containers/node/express/) folder inside [containers/node](./containers/node/)
- Get a [sample code](https://www.npmjs.com/package/express) of express server to run

  ```js
  import express from 'express'

  const app = express()

  app.get('/', (req, res) => {
    res.send('Express app executed by Node.js Container')
  })

  app.listen(3000)
  ```

- Now to run Express app we need to install it first
- Initial it

  ```sh
  docker run -it -v "%cd%/containers/node/express/:/app" -w /app node npm init
  ```

- Now install express

  ```sh
  docker run -it -v "%cd%/containers/node/express/:/app" -w /app node npm install express
  ```

- Now run the express app

  ```js
  docker run -it -v "%cd%/containers/node/express/:/app" -w /app -p 3000:3000 node node app.js
  ```

  - Here `-p <external>:<internal>` port mapping is done otherwise it will reject

[⬆️ Go to Context](#context)

#### Add handling of the SIGINT and SIGTERM signals (CTRL+C)

- Edit and add process to enable `SIGINT` & `SIGTERM`

  ```js
  import process from 'process'

  process.on('SIGINT',()=>{
      console.log('Application is being interrupted...');
      process.exit(0)
  })

  process.on('SIGTERM',()=>{
      console.log('Application is being terminated...');
      process.exit(0)
  })
  ```

[⬆️ Go to Context](#context)

#### CHALLENGE Create files handling Node app

> [!NOTE] Task
> Ask user to enter a file name and its content and create it using node module `fs` and `readline`
>
> Run the file in docker

- Create a file [challenge01.js](./containers/node/files/challenge01.js) in [files](./containers/node/files/)
  
  ```js
  const readline = require('readline');
  const fs = require('fs');

  // Create interface for input/output
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter file name: ', (name) => {
    rl.question('Enter some text: ', (text) => {
      let filePath = name + '.txt';
      fs.writeFile(filePath,text,(err)=>{
        if (err) throw err
      console.log('File created successfully!');
      rl.close();
      })
    });
  });
  ```

- Run it

  ```sh
  docker run -it -v "%cd%/containers/node/files/:/app" -w /app node node challenge01.js
  ```

[⬆️ Go to Context](#context)
