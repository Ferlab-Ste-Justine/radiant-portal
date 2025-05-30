# Simple Makefile for a Go project

# Build the application
all: build test

install:
	@echo "Installing dependencies..."


	@go mod tidy

build:
	@echo "Building..."
	
	
	@go build -o bin/main cmd/api/main.go

# Run the application
run:
	@go run cmd/api/main.go
# Create DB container
docker-run:
	@if docker compose up --build 2>/dev/null; then \
		: ; \
	else \
		echo "Falling back to Docker Compose V1"; \
		docker-compose up --build; \
	fi

# Shutdown DB container
docker-down:
	@if docker compose down 2>/dev/null; then \
		: ; \
	else \
		echo "Falling back to Docker Compose V1"; \
		docker-compose down; \
	fi

# Test the application
test:
	@echo "Testing..."
	@go test ./... -v
# Integrations Tests for the application
itest:
	@echo "Running integration tests..."
	@go test ./internal/repository -v

# Clean the binary
clean:
	@echo "Cleaning..."
	@rm -f main

# Live Reload
watch:
	@if command -v air > /dev/null; then \
            air; \
            echo "Watching...";\
        else \
            read -p "Go's 'air' is not installed on your machine. Do you want to install it? [Y/n] " choice; \
            if [ "$$choice" != "n" ] && [ "$$choice" != "N" ]; then \
                go install github.com/air-verse/air@latest; \
                air; \
                echo "Watching...";\
            else \
                echo "You chose not to install air. Exiting..."; \
                exit 1; \
            fi; \
        fi

doc:
	@echo "Generating OpenAPI v3.1 documentation..."
	@go run scripts/openapi/generate.go

.PHONY: all build run test clean watch docker-run docker-down itest

migrate:
	@echo "Create database migration..."
	@go install -tags 'postgres' github.com/golang-migrate/migrate/v4/cmd/migrate
	@migrate create -ext sql -dir ./scripts/init-sql/migrations -seq "todo"