<template>
  <div class="recommend">
    <ul class="recommend-list">
      <li
        class="recommend-item"
        v-for="item of list"
        :key="item.id"
      >
        <div class="recommend-onePic" v-if="item.imgUrl.length === 1">
          <div class="recommend-info">
            <h3 class="recommend-title">{{item.title}}</h3>
            <p class="recommend-desc">{{item.desc}}</p>
            <div class="recommend-addition">
              <div class="recommend-price">
                <span class="recommend-curprice">￥{{item.curPrice}}</span>
                <span class="recommend-originprice"><del>￥{{item.originPrice}}</del></span>
                <span class="recommend-discount">{{item.discount}}折</span>
              </div>
              <div class="recommend-distance">{{item.distance}}km</div>
            </div>
          </div>
          <div class="recommend-pic">
            <img class="recommend-img" :src="item.imgUrl[0]" alt="">
          </div>
        </div>
        <div class="recommend-threePic" v-if="item.imgUrl.length === 3">
          <h3 class="recommend-title">{{item.title}}</h3>
          <div class="recommend-addition">
            <p class="recommend-desc">{{item.desc}}</p>
            <div class="recommend-distance">{{item.distance}}km</div>
          </div>
          <div class="recommend-price">
            <span class="recommend-curprice">￥{{item.curPrice}}</span>
            <span class="recommend-originprice"><del>￥{{item.originPrice}}</del></span>
          </div>
          <ul class="recommend-pics">
            <li
              class="recommend-pic"
              v-for="(i, index) of item.imgUrl"
              :key="index"
            >
              <img class="recommend-img" :src="i" alt="">
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .recommend-item{
    width:94%;
    margin:10px auto;
    padding:10px 8px;
    background:#fff;
    border-radius:5px;
    .recommend-onePic{
      display:flex;
      .recommend-info{
        flex:1;
        margin-right:8px;
        .recommend-title{
          font-size:16px;
          font-weight:bold;
          color:#000;
          @include ellipsis();
          margin-bottom:6px;
        }
        .recommend-desc{
          color:#686868;
          margin-bottom:10px;
          @include ellipsis();
        }
        .recommend-addition{
          @include flex-between();
          .recommend-price{
            .recommend-curprice{
              color:#F84A30;
              font-size:16px;
              font-weight:bold;
            }
            .recommend-discount{
              display:inline-block;
              width:40px;
              height:14px;
              line-height:14px;
              text-align:center;
              border-radius:4px;
              background:#F84A30;
              color:#fff;
            }
          }
        }
      }
      .recommend-pic{
        width:100px;
        height:80px;
        border-radius:5px;
        overflow:hidden;
        .recommend-img{
          width:100%;
          height:100%;
        }
      }
    }
    .recommend-threePic{
      .recommend-title{
        font-size:16px;
        font-weight:bold;
        color:#000;
        @include ellipsis();
        margin-bottom:6px;
      }
      .recommend-addition{
        @include flex-between();
        margin-bottom:10px;
        .recommend-desc{
          color:#686868;
          @include ellipsis();
        }
      }
      .recommend-price{
        margin-bottom:10px;
        .recommend-curprice{
          color: #F84A30;
          font-size: 16px;
          font-weight: bold;
        }
      }
      .recommend-pics{
        @include flex-between();
        .recommend-pic{
          width:32%;
          border-radius:5px;
          overflow:hidden;
          .recommend-img{
            width:100%;
            height:100%;
          }
        }
      }
    }
  }
</style>
