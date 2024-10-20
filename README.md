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
