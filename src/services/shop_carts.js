import { post } from "../utils/request";

/**
 * 加入购物车
 * @param {*} product
 */
export function addShopCart(product) {
  return post("/api/v1/shop_carts", {
    product: product._id,
  });
}
