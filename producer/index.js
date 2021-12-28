import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "producer-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function execute() {
  console.log("Producer new message");
  await producer.connect();
  await producer.send({
    topic: "kafka-demo",
    messages: [{ value: "Hello KafkaJS user!" }],
  });
  await producer.disconnect();
}

setInterval(execute, 1000);