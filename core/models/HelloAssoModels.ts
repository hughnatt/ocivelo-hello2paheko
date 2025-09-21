interface IHelloAssoWebhookRequest {
  eventType: 'Form' | 'Order' | 'Payment' | 'Organization'
}

interface HelloAssoWebhookRequest<THelloAssoData> extends IHelloAssoWebhookRequest {
  data: THelloAssoData,
}

interface HelloAssoOrderData {
  payer: HelloAssoPayer,
}

interface HelloAssoPayer {
  email: string,
  country: string,
  firstName: string,
  lastName: string,
}

export type { HelloAssoOrderData, HelloAssoPayer, HelloAssoWebhookRequest, IHelloAssoWebhookRequest }