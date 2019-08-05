<template>
  <div class="wallet">
    <div class="wallet-top">
      <div class="wallet-title">我的钱包</div>
      <div class="wallet-enter">进入钱包 &gt;</div>
    </div>
    <ul class="wallet-bottom">
      <li class="wallet-item">
        <div class="wallet-count">{{usermsg.myborrow}}</div>
        <div class="wallet-info">美团借钱</div>
        <div class="wallet-addition">送15元外卖券</div>
      </li>
      <li class="wallet-item">
        <div class="wallet-count">{{usermsg.myasset}}</div>
        <div class="wallet-info">资产</div>
        <div class="wallet-addition">持有金额(元)</div>
      </li>
      <li class="wallet-item">
        <div class="wallet-count">{{usermsg.mydiscount}}<span class="yuan">元</span></div>
        <div class="wallet-info">美食享优惠</div>
        <div class="wallet-addition">最高随机减</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PersonalWallet',
  props: {
    usermsg: [Array, Object]
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .wallet{
    width:100%;
    height:120px;
    overflow:hidden;
    padding-bottom:20px;
    border-bottom:1px solid #eee;
    .wallet-top{
      width:100%;
      height:20px;
      @include flex-between();
      .wallet-title{
        font-size:$icon-font-size-sm;
        font-weight:bold;
        color:#000;
      }
      .wallet-enter{
        font-size:$font-size-base;
        color:#666;
      }
    }
    .wallet-bottom{
      width:100%;
      height:80px;
      display:flex;
      .wallet-item{
        flex:1;
        @include flex-center(column);
        .wallet-count{
          font-size:$icon-font-size;
          font-weight:bold;
          color:#000;
          margin-bottom:8px;
          .yuan{
            font-size:$font-size-base;
          }
        }
        .wallet-info{
          font-size:$font-size-l;
          color:#000;
          margin-bottom:4px;
        }
        .wallet-addition{
          font-size:$font-size-base;
          color:#999;
        }
      }
    }
  }
</style>
