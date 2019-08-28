<template>
  <div id="app">
    <div id="wrapper">
      <!-- Navigation -->
      <nav
        class="navbar navbar-default navbar-static-top"
        role="navigation"
        style="margin-bottom: 0"
      >
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <a id="smi-logo" class="navbar-brand" href="javascript:void(0)" >
            <img width="50" src="./assets/u58.svg" alt />
            SMI供应链管理平台
          </a>
        </div>
        <!-- /.navbar-header -->

        <ul class="nav navbar-top-links navbar-right">
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              <i class="fa fa-user fa-fw"></i> 管理员
              <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
              <li>
                <a href="login.html">
                  <i class="fa fa-sign-out fa-fw"></i> 退出登录
                </a>
              </li>
            </ul>
            <!-- /.dropdown-user -->
          </li>
          <!-- /.dropdown -->
        </ul>
        <!-- /.navbar-top-links -->

        <div class="navbar-default sidebar" role="navigation">
          <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
              <li>
                <a href="#">
                  <i class="fa fa-bar-chart-o fa-fw"></i> 用户管理
                  <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                  <li>
                    <!-- <a href="flot.html">用户管理</a> -->
                    <router-link to="/usermanage">用户管理</router-link>
                  </li>
                  <li>
                    <a href="morris.html">添加用户</a>
                  </li>
                </ul>
                <!-- /.nav-second-level -->
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-bar-chart-o fa-fw"></i> 仓库管理
                  <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                  <li>
                    <a href="flot.html">仓库管理</a>
                  </li>
                  <li>
                    <a href="morris.html">SKU管理</a>
                  </li>
                  <li>
                    <a href="morris.html">SKU分类管理</a>
                  </li>
                  <li>
                    <a href="morris.html">库存操作审批列表</a>
                  </li>
                  <li>
                    <a href="morris.html">供应商管理</a>
                  </li>
                  <li>
                    <a href="morris.html">单位管理</a>
                  </li>
                  <li>
                    <a href="morris.html">实时库存</a>
                  </li>
                  <li>
                    <a href="morris.html">仓库库存快照</a>
                  </li>
                </ul>
                <!-- /.nav-second-level -->
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-bar-chart-o fa-fw"></i> 商品管理
                  <span class="fa arrow"></span>
                </a>
                <ul class="nav nav-second-level">
                  <li>
                    <a href="flot.html">商品管理</a>
                  </li>
                  <li>
                    <a href="morris.html">商品分类管理</a>
                  </li>
                  <li>
                    <a href="morris.html">店铺独立定价</a>
                  </li>
                </ul>
                <!-- /.nav-second-level -->
              </li>
            </ul>
          </div>
          <!-- /.sidebar-collapse -->
        </div>
        <!-- /.navbar-static-side -->
      </nav>

      <div id="page-wrapper">
        <router-view></router-view>
      </div>
      <!-- /#page-wrapper -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#smi-logo {
  color: #333;
  font-size: 20px;
}
#smi-logo > img {
  float: left;
  margin-top: -6px;
  margin-left: -4px;
}

.dropdown-toggle {
  width: 120px;
  display: flex !important;
  align-items: center;
  justify-content: space-between !important;
}

#wrapper {
  background: rgba(42, 53, 65, 1);
}
.navbar-default {
  background-color: #fff;
  border-color: #e7e7e7;
}

a {
  color: #fff;
}
.dropdown a {
  color: #000;
}

.nav > li > a:focus,
.nav > li > a:hover {
  color: #fff;
  background-color: #999;
  border-radius: 5px;
}

.sidebar {
  background: rgba(42, 53, 65, 1);
}


#side-menu > li {
  border-radius: 5px;
}
</style>
