1. Create a Dockerfile for this Golang rest API.
   i) The `go.mod` and the `go.sum` are dependency files.
   ii) To install the dependencies, you execute `go mod download`
   iii) To run the application, you execute `go run main.go`.
   iv) The app is running on port `8080`.

2. Ensure that this file as well as the Dockerfile do not make it onto the container

3. Build an image and tag it with the name `golangapp`.

4. Run the application in a container with the correct ports and volumes. Try to run the container without it consuming your ternimal.
   i) The result of `go mod download` will not result in additional files and folders in our directory

5. Immediately stop and remove the container

6. Remove the image
