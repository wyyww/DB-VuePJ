

<script>
import Navigate from "components/navigate";
import Primary from "components/primary";
import Footer from "components/footer";

export default {
  components: { Navigate, Primary, Footer }
};
</script>

<template>
    <div id="app">
        <div class="headbar">
            <Navigate></Navigate>
        </div>
        <div class="main">
            <Primary></Primary>
        </div>
        <div class="footer">
            <Footer></Footer>
        </div>
    </div>
</template>


<style lang="less" scoped>
#app {
  // margin: 20px auto;
  // width: 800px;
  // height: 600px;
  overflow: hidden;
  border-radius: 3px;
}
</style>