import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  console.log("I am in the API");
  res.status(200).json(getAllProducts());
}
