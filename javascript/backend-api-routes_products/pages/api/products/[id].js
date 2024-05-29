import { getProductById } from "@/services/productServices.js";

export default function handler(request, result) {
  const { id } = request.query;
  console.log("data fetch successful");
  result.status(200).json(getProductById(id));
}
