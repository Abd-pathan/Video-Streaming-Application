# Video Streaming Application

## Overview
The Video Streaming Application is a modern, full-stack project developed using Spring Boot for the backend and Angular for the frontend. This application allows users to upload, search, and stream videos seamlessly. It is designed to handle video uploads, manage metadata, and deliver a smooth playback experience.

## Features
- **Video Upload**: Users can upload video files directly to the application.
- **Search Functionality**: Search for videos by title.
- **Video Streaming**: Play videos directly through the app using an efficient streaming mechanism.
- **User-Friendly Interface**: Intuitive and responsive UI for an enhanced user experience.

## Technologies Used
### Backend
- **Spring Boot**: Framework for building RESTful APIs.
- **PostgreSQL**: Database for storing video metadata and other persistent data.
- **Spring Data JPA**: ORM for database operations.
- **Maven**: Dependency management and build tool.

### Frontend
- **Angular**: Framework for building the user interface.
- **Axios**: HTTP client for API requests.
- **CSS/Flowbite**: Styling for a modern and responsive UI.

## Getting Started
### Prerequisites
- Java 8 or higher
- Maven
- Node.js and npm
- Angular CLI
- Git
- PostgreSQL (configured locally or through a hosted service)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Abd-pathan/Video-Streaming-Application.git
   cd Video-Streaming-Application
   ```

2. Set up the backend:
   - Navigate to the backend folder:
     ```bash
     cd video-streaming-backend
     ```
   - Build the project:
     ```bash
     mvn clean install
     ```

3. Set up the frontend:
   - Navigate to the frontend folder:
     ```bash
     cd ../stream-frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

### Running the Application
#### Backend
1. Start PostgreSQL and configure the database in `application.properties`.
2. Run the backend:
   ```bash
   mvn spring-boot:run
   ```

#### Frontend
1. Run the Angular application:
   ```bash
   npm start
   ```
2. Access the application in your browser at:
   ```
   http://localhost:4200
   ```

## Usage
### Routes and Functionality
#### Backend
- `POST /api/v1/videos/upload`: Uploads a new video.
- `GET /api/v1/videos/title/{title}`: Searches for a video by title.
- `GET /api/v1/videos/stream/{videoId}`: Streams a video by its ID.

#### Frontend
- **Home Page**: Upload and search for videos.
- **Search Bar**: Enter the video title to find and play videos.
- **Video Player**: Stream videos directly.

## Running Tests
To run tests for the backend:
```bash
mvn test
```

## Contributing
Contributions are welcome! Please follow the guidelines for submitting a pull request.

## Contact
For inquiries or feedback, reach out to:
- **Name**: Abd Pathan
- **Email**: abd.pathan812@gmail.com



Credits: Code With Durgesh
