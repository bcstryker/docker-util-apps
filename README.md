# Docker Utilities Repository

This repository contains a collection of quick-to-spin-up Docker applications designed to perform various utility functions. Each application is organized into its own directory and includes a `docker-compose.yml` file and any necessary configuration or source code files to facilitate easy setup and deployment.

## Intent of the Repository

The goal of this repository is to provide a collection of useful, easily deployable Docker applications that serve various purposes. Each application is self-contained, making it easy to explore, modify, and deploy independently. As new Docker utilities are developed, they will be added as separate directories under this repository.

## Usage

### Cloning the Repository

To get started, clone the repository to your local machine:

```
git clone https://github.com/your-username/docker-util-apps.git
cd docker-util-apps
```

### Running an Application

Each utility is located in its own directory within the root of the repository. To run any of the applications:

1. **Navigate to the desired application’s directory**:

```
cd [app-directory]
```

2. **Start the application using Docker Compose**:

```
docker compose up -d
```

3. **Access the application** according to the documentation provided in each application's `README.md`.

### Stopping an Application

To stop any application, navigate to its directory and run:

```
docker compose down
```

This will stop and remove the running containers for that specific application.

## Current Applications

### 1. Logger Application (`/logger`)

The logger application is a simple, containerized logging service built using **Express.js** and **MongoDB**. It is designed to demonstrate how to set up a basic logging system with minimal configuration. The application consists of two services:

- **Express API**: An Express.js server that exposes RESTful endpoints to handle logging entries.
- **MongoDB**: A MongoDB container that stores the log entries created via the API.