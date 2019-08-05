<template>
  <div class="user">
    <div class="user-msg">
      <div class="user-pic">
        <img :src="usermsg.userphoto" alt="" class="user-img">
      </div>
      <span class="user-name">{{usermsg.username}}</span>
    </div>
    <div class="user-icons">
      <i class="iconfont iconshezhikongxin"></i>
      <i class="iconfont iconkefu"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalUser',
  props: {
    usermsg: [Array, Object]
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .user{
    width:100%;
    height:100px;
    @include flex-between();
    .user-msg{
      display:flex;
      align-items:center;
      .user-pic{
        width:60px;
        height:60px;
        border-radius:30px;
        overflow:hidden;
        margin-right:10px;
        .user-img{
          width:100%;
          height:100%;
        }
      }
      .user-name{
        font-size:$icon-font-size-sm;
        font-weight:bold;
        color:#000;
      }
    }
    .user-icons{
      display:flex;
      align-items:center;
      .iconfont{
        font-size:$icon-font-size-sm;
        font-weight:bold;
        color:#000;
        &.iconshezhikongxin{
          margin-right:20px;
        }
      }
    }
  }
</style>
