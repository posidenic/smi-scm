<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          编辑个人信息
          <button type="button" class="btn btn-default btn-sm">
            &lt;&lt;
            <router-link to="/index/usermanage">返回用户管理</router-link>
          </button>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-6">
              <span>登录名</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>手机号</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>密码</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>确认密码</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>姓名</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>微信</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>QQ（选填）</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>邮箱</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>所在地</span>
              <div class="dropdown">
                <button
                  class="btn btn-default dropdown-toggle"
                  type="button"
                  id="dropdownMenu1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Dropdown
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>详细地址</span>
              <input type="text" />
            </div>
          </div>
          <!-- /.row (nested) -->
        </div>
        <!-- /.panel-body -->
      </div>
      <!-- /.panel -->
    </div>
    <!-- /.col-lg-12 -->
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row" id="usergroup">
            <div class="col-lg-12">
              <span>用户组</span>
              <div id="radiogroup">
                <div id="manages">
                  <div>
                    <label>
                      <input type="radio" name="manage" value="1" />系统管理员
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="manage" value="2" />商务运营主管
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="manage" value="3" />商务运营专员
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="manage" value="4" />仓库主管
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="manage" value="5" />仓库专员
                    </label>
                  </div>
                </div>
                <div id="shops">
                  <div>
                    <label>
                      <input type="radio" name="shop" value="1" />影院经理
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="shop" value="2" />店长
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="shop" value="3" />店员
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="shop" value="4" />放映员
                    </label>
                  </div>
                  <div>
                    <label>
                      <input type="radio" name="shop" value="4" />排片员
                    </label>
                  </div>
                </div>
                <div class="dropdown" id="dropdowntwo">
                  <button
                    class="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    绑定店铺
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a href="#">Action</a>
                    </li>
                    <li>
                      <a href="#">Another action</a>
                    </li>
                    <li>
                      <a href="#">Something else here</a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row" id="userstatus">
            <div class="col-lg-6">
              <span>状态</span>
              <div class="statusradio">
                <label>
                  <input type="radio" name="status" value="1" />正常
                </label>
                <label>
                  <input type="radio" name="status" value="2" />禁用
                </label>
                <label>
                  <input type="radio" name="status" value="3" />删除
                </label>
              </div>
            </div>
          </div>
          <div class="row" id="confirm">
            <div class="col-lg-6">
              <button type="button" class="btn btn-danger">确定</button>

            </div>
          </div>
          <!-- /.row (nested) -->
        </div>
        <!-- /.panel-body -->
      </div>
      <!-- /.panel -->
    </div>
    <!-- /.col-lg-12 -->
  </div>
  <!-- /.row -->
</template>
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
.panel-default > .panel-heading {
  color: #333;
  background-color: #fff;
  border-color: #ddd;
  font-weight: 700;
}
.panel-default > .panel-heading>button>a {
  color: #fff;
}

.panel-default > div:first-child > button {
  float: right;
  background: #ccc;
  color: #fff;
  margin-top: -5px;
}
.panel-default > .panel-body {
  padding-top: 0;
  padding-bottom: 0;
}
.panel-default > .panel-body > .row {
  border-bottom: 1px solid #eee;
}
.panel-default > .panel-body > .row:last-child {
  border-bottom: 0;
}
.panel-default > .panel-body > .row > div {
  display: flex;
  padding: 15px 0;
}
.panel-default > .panel-body > .row > div > span {
  width: 170px;
  text-align: right;
  padding-right: 30px;
  color: #666;
}
.panel-default > .panel-body > .row > div > input {
  flex: 1;
}

#usergroup > div {
  display: flex;
}

#usergroup > div > span {
  width: 170px;
}
#usergroup > div > #radiogroup {
  flex: 1;
  padding-right: 15px;
}

#usergroup > div > #radiogroup > #manages,
#shops {
  height: 80px;
  background: #eee;
  border-radius: 5px;
  position: relative;
  margin-top: 15px;
}

#usergroup > div > #radiogroup > #shops {
  margin-top: 25px;
}

#usergroup > div > #radiogroup > #manages::before,
#usergroup > div > #radiogroup > #shops::before {
  content: "后台管理";
  display: inline-block;
  text-align: center;
  line-height: 24px;
  width: 70px;
  height: 24px;
  border: 1px solid#ccc;
  background: #fff;
  border-radius: 12px;
  position: absolute;
  left: 15px;
  top: -12px;
}

#usergroup > div > #radiogroup > #shops::before {
  content: "店铺用户";
}

#manages > div,
#shops > div {
  float: left;
  padding: 5px;
  margin: 20px 10px 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  background: #fff;
}

#dropdowntwo {
  margin-top: 15px;
}

#userstatus > div {
  display: flex;
}
#userstatus > div > span {
  width: 170px;
}
#userstatus > div > .statusradio {
  flex: 1;
}
#userstatus > div > .statusradio>label{
  margin-left: 20px;
}

#confirm{
  padding-bottom: 50px;
}

#confirm>div>button{
  margin-left: 170px;
  background: rgba(253, 109, 100, 1);
  border: 0;
}
</style>
