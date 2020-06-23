<template>
  <div class="center">
    <div class="header">
      <img src="@/assets/user.jpg" alt />
    </div>
    <div class="container">
      <div class="orders">
        <p>订单</p>
        <div class="list">
          <a href="#">
            <img src="@/assets/movie.png" alt="" />
            <p>电影</p>
          </a>
          <a href="#">
            <img src="@/assets/shop.png" alt="" />
            <p>商城</p>
          </a>
        </div>
      </div>
      <div class="vant">
        <van-cell is-link @click="showPopup">优惠券</van-cell>
        <van-popup v-model="show">您配么？</van-popup>
        <van-cell is-link @click="showPopup">折扣卡</van-cell>
        <van-popup v-model="show">您配么？</van-popup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.center {
  height: 100%;
}
.header {
  height: 150px;
  background-color: #f03d37;
  text-align: center;
}
.header img {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 3px solid #fff;
  margin-top: 30px;
}
.container {
  flex: 1;
  display: flex;
  color: #777;
  flex-direction: column;
}
.container .orders {
  height: 150px;
  text-align: center;
  margin-top: 5px;
}
.container .list {
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
}
.container .list a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}
.container .list a img {
  width: 60px;
  height: 60px;
}
.container .list a p {
  color: #777;
  margin-top: 15px;
}
</style>
