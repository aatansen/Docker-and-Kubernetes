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
- Run ubuntu container by `docker run -it ubuntu`
- See list of bin inside ubuntu container `ls bin`
- Get host details by running `hostname -i`
- Get the details of running ubuntu `cat /etc/os-release`
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
> To get an image `docker pull image_name`
>
> To run a container interactively `docker run -it image_name`
>
> To exit a container `docker exit`
>
> To get the list of running container `docker ps`
>
> `-it` is refer to `interactive` & `TTY`

[⬆️ Go to Context](#context)

### Port and Volume Mapping in the Docker Containers

#### Running Nginx with exposed Port

- Get the image `docker pull nginx`
- Run the container `docker run nginx`
- Open browser and navigate to `localhost:80`
  - It will refuse to connect
  - Stop the container
  - To stop a running container `docker stop container_id`
    > only first three letter of the `container_id` will do the work
  - Run `docker run -p 8080:80 nginx`
  - Now navigate to `localhost:8080`

[⬆️ Go to Context](#context)

#### Nginx container with custom content

- Create html file `index.html`
- Copy the path where `index.html` is created `full_path\containers\ngnix`
- Now run `docker run -p 8081:80 -v full_path\containers\ngnix:/usr/share/nginx/html nginx`
  > In powershell: `docker run -p 8081:80 -v ${PWD}:/usr/share/nginx/html nginx`
- Navigate to `localhost:8081` to see the output of `index.html`
- Adding favicon to the project
  - Generate free favicon from text [favicon.io](https://favicon.io/favicon-generator/)
  - Unzip the downloaded favicon in `index.html` path
  - Now add those in the head section of html

    ```html
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    ```

[⬆️ Go to Context](#context)

#### Using path variable in volume mapping

- In linux run `docker run -p 8081:80 -v $PWD:/usr/share/nginx/html nginx`
- In windows `PowerShell` or `Git Bash` run `docker run -p 8081:80 -v ${PWD}:/usr/share/nginx/html nginx`

[⬆️ Go to Context](#context)

#### Notes II

> [!NOTE]
> To stop a container `docker stop container_id`
>
> `-p` is refer to port & `-v` is refer to `volume`
>
> For valume mapping `$PWD` is used
>

[⬆️ Go to Context](#context)
