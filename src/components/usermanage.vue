<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
          用户管理
          <button type="button" class="btn btn-success btn-sm">✚&nbsp;<router-link to="/index/useradd">新增用户</router-link></button>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group col-lg-6">
                <span class="input-group-addon" id="basic-addon1">姓名</span>
                <input
                  type="text"
                  class="form-control col-lg-6"
                  placeholder="请输入姓名"
                  aria-describedby="basic-addon1"
                />
              </div>
              <hr />
              <div class="input-group col-lg-6">
                <span class="input-group-addon" id="basic-addon1">手机号</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="请输入手机号"
                  aria-describedby="basic-addon1"
                />
              </div>
              <hr />
              <div class="input-group col-lg-6">
                <span class="input-group-addon" id="basic-addon1">登录名</span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="请输入登录名"
                  aria-describedby="basic-addon1"
                />
              </div>
              <hr />
              <div class="input-group col-lg-6" id="datePick">
                <span class="input-group-addon" id="basic-addon1">注册时间</span>
                <div>
                  <input type="text" id="datepickerStartDate" placeholder="请选择日期" />
                  <input type="text" id="datepickerEndDate" placeholder="请选择日期" />
                </div>
              </div>
              <hr />
              <div class="input-group col-lg-6" id="search">
                <button type="button" class="btn btn-danger btn-sm">搜索</button>
              </div>
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
          <div class="row">
            <div class="col-lg-12">
              <div class="input-group col-lg-12" id="searchItems">
                <span class="input-group-addon" id="basic-addon1">状态</span>
                <div class="buttonsBox">
                  <button type="button" class="btn btn-primary btn-sm">全部</button>
                  <button type="button" class="btn btn-primary btn-sm">正常</button>
                  <button type="button" class="btn btn-primary btn-sm">禁用</button>
                  <button type="button" class="btn btn-primary btn-sm">删除</button>
                </div>
              </div>
              <hr />
            </div>
            <div class="col-lg-12">
              <div class="input-group col-lg-12" id="searchItems">
                <span class="input-group-addon" id="basic-addon1">用户组</span>
                <div class="buttonsBox">
                  <button type="button" class="btn btn-primary btn-sm">全部</button>
                  <button type="button" class="btn btn-primary btn-sm">系统</button>
                  <button type="button" class="btn btn-primary btn-sm">店铺</button>
                </div>
              </div>
              <hr />
            </div>
            <div class="col-lg-12">
              <div class="input-group col-lg-12" id="searchItems">
                <span class="input-group-addon" id="basic-addon1">类型</span>
                <div class="buttonsBox">
                  <button type="button" class="btn btn-primary btn-sm">全部</button>
                  <button type="button" class="btn btn-primary btn-sm">正常</button>
                  <button type="button" class="btn btn-primary btn-sm">禁用</button>
                  <button type="button" class="btn btn-primary btn-sm">删除</button>
                  <button type="button" class="btn btn-primary btn-sm">全部</button>
                  <button type="button" class="btn btn-primary btn-sm">正常</button>
                  <button type="button" class="btn btn-primary btn-sm">禁用</button>
                  <button type="button" class="btn btn-primary btn-sm">删除</button>
                  <button type="button" class="btn btn-primary btn-sm">全部</button>
                  <button type="button" class="btn btn-primary btn-sm">正常</button>
                </div>
              </div>
              <hr />
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
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">用户信息</div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                  <div class="table-responsive">
                    <table class="table table-striped table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>登录名</th>
                          <th>姓名</th>
                          <th>角色</th>
                          <th>手机号码</th>
                          <th>注册时间</th>
                          <th>状态</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td class="greenItem">@mdo</td>
                          <td class="buttonItem">
                            <button type="button" class="btn btn-primary btn-sm">
                              <span class="glyphicon glyphicon-pencil"></span>编辑
                            </button>
                            <button type="button" class="btn btn-danger btn-sm">
                              <span class="glyphicon glyphicon-trash"></span>删除
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td class="greenItem">@mdo</td>
                          <td class="buttonItem">
                            <button type="button" class="btn btn-primary btn-sm">
                              <span class="glyphicon glyphicon-pencil"></span>编辑
                            </button>
                            <button type="button" class="btn btn-danger btn-sm">
                              <span class="glyphicon glyphicon-trash"></span>删除
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td>@mdo</td>
                          <td class="greenItem">@mdo</td>
                          <td class="buttonItem">
                            <button type="button" class="btn btn-primary btn-sm">
                              <span class="glyphicon glyphicon-pencil"></span>编辑
                            </button>
                            <button type="button" class="btn btn-danger btn-sm">
                              <span class="glyphicon glyphicon-trash"></span>删除
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
              </div>
              <!-- /.panel -->
              <nav aria-label="Page navigation">
                <ul class="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
                <div class="totalCount">1234</div>
              </nav>
              <!-- 分页 -->
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->
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
import "../../static/vendor/datepicker/css/bootstrap-datepicker.css";
import "../../static/vendor/datepicker/js/bootstrap-datepicker.js";
import "../../static/vendor/datepicker/locales/bootstrap-datepicker.zh-CN.min.js";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created: function() {
    $(function() {
      $("#datepickerStartDate").datepicker({
        language: "zh-CN",
        format: "yyyy-mm-dd"
      });
      $("#datepickerEndDate").datepicker({
        language: "zh-CN",
        format: "yyyy-mm-dd"
      });
    });
  }
};
</script>

<style scoped>
.panel {
  margin-bottom: 10px;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #fff;
  border-color: #ddd;
}

.panel-heading {
  font-weight: 800;
}

.panel-heading > button {
  float: right;
  margin-top: -5px;
  color: #fff;
}
.panel-heading > button>a {
  color: #fff;
}

.input-group {
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
}

.input-group > span {
  width: 80px;
  background: #fff;
  border: 0;
}

.input-group > input {
  flex: 1;
}

#search {
  display: inline-block;
}
#search > button {
  margin-left: 80px;
}

hr {
  width: calc(100% + 30px);
  margin: 15px 0 15px -15px;
}

#searchItems {
  display: flex;
}

#searchItems > span {
  width: 80px;
}
#searchItems > .buttonsBox {
  flex: 1;
}
#searchItems > .buttonsBox > button {
  border: 0;
  margin-bottom: 5px;
}
#searchItems > .buttonsBox > button + button {
  background: rgba(153, 153, 153, 1);
  margin-left: 10px;
}
#searchItems + hr {
  margin: 3px 0 8px;
}

.greenItem {
  color: #66cc00;
}
.buttonItem > button {
  margin-right: 10px;
}
.buttonItem > button>span {
  margin-right: 5px;
}

.pagination {
  float: right;
  margin-top: 0;
}

.pagination>li:first-child>a, .pagination>li:first-child>span {
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.totalCount{
  width: 60px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: red;
  border: 1px solid rgb(221, 221, 221);;
  border-right: 0;
  float:right;
  border-top-right-radius: 0;
  border-top-left-radius: 4px;
}


#datePick{
  display: flex;
}
#datePick span{
  width: 80px;
}

#datePick div{
  flex: 1;
}
#datePick div input{
  width: 100px;
  margin-right: 20px;
}


.btn-danger {
    color: #fff;
    background-color: rgba(253, 109, 100, 1);
    border-color: rgba(253, 109, 100, 1);
    border: 0;
    outline: none;
}
.btn-danger:active {
    color: #fff;
    background-color: rgba(253, 109, 100, 1);
    border-color: rgba(253, 109, 100, 1);
    border: 0;
    outline: none;
}
.btn-primary {
    color: #fff;
    background-color: rgba(59, 203, 237, 1);
    border-color: rgba(59, 203, 237, 1);
        border: 0;
    outline: none;
}
.btn-primary:active {
    color: #fff;
    background-color: rgba(59, 203, 237, 1);
    border-color: rgba(59, 203, 237, 1);
        border: 0;
    outline: none;
}

</style>
