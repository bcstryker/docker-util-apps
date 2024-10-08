#### Logger App Usage

1. **Navigate to the `logger` directory**:

```
cd logger
```

2. **Spin up the application**:

```
docker compose up -d
```

3. The **Express API** will be available at `http://localhost:3000`.

4. **Testing the API**:

- **Create a new log entry**:

```
curl -X POST -H "Content-Type: application/json" -d "{\"level\":\"info\", \"message\":\"This is a test log entry\"}" http://localhost:3000/api/logs
```

- **Retrieve all log entries**:

```
curl http://localhost:3000/api/logs
```

5. **Stopping the Logger Application**:

```
docker compose down
```