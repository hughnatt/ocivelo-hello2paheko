// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import helloAssoService from "@/core/helloAssoService";
import { HelloAssoOrderData, HelloAssoWebhookRequest, IHelloAssoWebhookRequest } from "@/core/models/HelloAssoModels";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log(req.body)
  res.status(204).end()

  // const request = JSON.parse(req.body) as IHelloAssoWebhookRequest;

  // if (request.eventType === 'Order') {
  //   helloAssoService.handleOrder((JSON.parse(req.body) as HelloAssoWebhookRequest<HelloAssoOrderData>).data)
  // }
}


