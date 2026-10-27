export interface ExploringGroup {
  title: string;
  topics: string[];
}

export const exploringGroups: ExploringGroup[] = [
  { title: "Architecture", topics: ["Microservices architecture", "Service boundaries", "Distributed systems fundamentals", "Inter-service communication", "API Gateway patterns", "Service discovery"] },
  { title: "Messaging and event-driven systems", topics: ["Apache Kafka", "RabbitMQ", "Event-driven architecture", "Asynchronous service communication"] },
  { title: "Containers and orchestration", topics: ["Docker", "Docker Compose", "Kubernetes fundamentals"] },
  { title: "Reliability and observability", topics: ["Centralized logging", "Metrics and monitoring", "Distributed tracing", "Health checks", "Retry strategies and fault tolerance"] },
  { title: "Potential tools to explore", topics: ["Kafka", "RabbitMQ", "Kubernetes", "OpenTelemetry", "Prometheus", "Grafana", "API Gateway solutions"] },
];
