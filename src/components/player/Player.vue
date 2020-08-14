<template>
  <div class="playerContainer">
    <div class="playBanner">
      <ul class="box f-cb z-show" data-index="1">
        <div>
          <img src="../../assets/images/ia_10053.jpg" alt />
          <em>创作|翻唱</em>
        </div>
      </ul>
      <ul class="box f-cb" data-index="2">
        <li>
          <a href="/discover/djradio/category?id=4001">
            <div
              class="icon"
              style="background-image:url(http://p4.music.126.net/AxVxXIdgRXcpDGlkDehsCw==/3249056862536456.jpg);"
            ></div>
            <em>校园|教育</em>
          </a>
        </li>
        <li>
          <a href="/discover/djradio/category?id=12">
            <div
              class="icon"
              style="background-image:url(http://p4.music.126.net/Y0RoVx8oMTDyukbiqbizAA==/3223768093383535.jpg);"
            ></div>
            <em>旅途|城市</em>
          </a>
        </li>
        <li>
          <a href="#/topic?id=18652232" target="_blank">
            <div
              class="icon"
              style="background-image:url(../../../style/web2/img/index_radio/radio_faq.png);"
            ></div>
            <em>常见问题</em>
          </a>
        </li>
        <li class="apply">
          <a id="j-djradio-entry" href="javascript:;" onclick="top.login()">
            <div
              class="icon"
              style="background-image:url(../../../style/web2/img/index_radio/radio_apply.png);"
            ></div>
            <em>我要做主播</em>
          </a>
        </li>
      </ul>
    </div>
    <span>
      <span>
        <i class="el-icon-arrow-left"></i>
      </span>
    </span>
    <span>
      <i class="el-icon-arrow-right"></i>
    </span>
    <div class="dotpage j-flag">
      <span class="dot z-curr" data-action="go" data-index="1">1</span>
      <span class="dot" data-action="go" data-index="2">2</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" rel="stylesheet/less">
.playerContainer {
  width: 980px;
  height: 100%;
  margin: 35px auto;
  background-color: #fff;
  .playBanner {
    width: 900px;
    height: 194px;
    margin: 0 auto;
    background-color: teal;
    .f-cb {
      display: flex;
      width: 20%;
      white-space: wrap;
      & a {
        width: 70px;
        height: 70px;
        display: block;
        text-align: center;
      }
    }
  }
}
</style>