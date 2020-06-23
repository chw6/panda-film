import { get } from "../utils/request";

/**
 * 获取商品列表
 * page 表示页码
 * per  表示每页显示的数量
 */
export function getList(page = 1, per = 10) {
  return get("/api/v1/products", {
    page,
    per,
  });
}

// /api/v1/products/:id
/**
 * 根据id获取商品信息
 * @param {*} id
 */
export function getOneProduct(id) {
  return get("/api/v1/products/" + id);
}
