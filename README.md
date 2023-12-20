# SimpleMessage 

Simple Message Board is a minimalistic web application that allows users to post messages to a public board. The application is built with Node.js on the backend, uses Express for routing, and stores messages in a text file for persistence.

## Features

- Post messages to a public message board.
- View all messages posted by others.
- Clear all messages from the board (admin functionality).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a `Windows/Linux/Mac` machine.
- You have installed `Docker`.
- You have basic understanding of Docker and Docker Compose (if using NGINX Proxy Manager).

## Installing Simple Message Board

To install Simple Message Board, follow these steps:

```bash
git clone https://github.com/yourusername/simplemessage.git
cd simplemessage
docker build -t simplemessage .
docker volume create simplemessage-data
