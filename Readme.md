# NestJS Kafka Microservices Example

This project demonstrates how to implement communication between a producer (API Gateway) and a consumer microservice using **Kafka** in a **NestJS** monorepo setup.

## Project Structure

```
kafka-example/
├── api-gateway/          # Producer service
│   └── src/
│       └── app.controller.ts
│       └── main.ts
├── kafka-consumer/       # Consumer service
│   └── src/
│       └── app.controller.ts
│       └── main.ts
├── docker-compose.yml    # For running Kafka & Zookeeper
```

---

## How to Run

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd kafka-example
```

### 2. Start Kafka and Zookeeper using Docker

```bash
docker-compose up -d
```

### 3. Create Kafka Topic

```bash
docker exec -it kafka kafka-topics --create \
  --bootstrap-server localhost:19092 \
  --replication-factor 1 \
  --partitions 1 \
  --topic test-topic
```

---

## Running the Services

### In `api-gateway` (Producer)

```bash
cd api-gateway
pnpm install
pnpm start
```

### In `kafka-consumer` (Consumer)

```bash
cd kafka-consumer
pnpm install
pnpm start
```

---

## Sending a Message

Use Postman or curl:

```bash
POST http://localhost:3000/send

Body (JSON):
{
  "message": "Hello from API Gateway"
}
```

---

## Kafka Output

On successful sending and receiving:

- API Gateway logs:

  ```
  Message sent to Kafka
  ```

- Consumer logs:
  ```
    Received message from Kafka: Hello from API Gateway
  ```

---

## Notes

- `api-gateway` acts as the Kafka **producer**.
- `kafka-consumer` acts as the Kafka **consumer**.

---
