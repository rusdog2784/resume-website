# Build the image, tagging it as 'resume website'.
docker build -t resume-website-image .

# Start and run the docker container with the image.
docker run --name=resume-website -d --rm -p 8080:80 resume-website-image:latest