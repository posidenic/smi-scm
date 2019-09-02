<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">仓库管理</div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-6">
              <span>仓库名称</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>省份</span>
              <div class="form-group">
                <label class="checkbox-inline">
                  <input type="checkbox" />北京
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />上海
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />广州
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />杭州
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />南京
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />苏州
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />北京
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />上海
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />广州
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />杭州
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />南京
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" />苏州
                </label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>添加时间</span>
              <div>
                <input type="text" id="datepickerStartDate" placeholder="请选择日期" />
                <input type="text" id="datepickerEndDate" placeholder="请选择日期" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>添加时间</span>
              <div>
                <button class="btn btn-danger btn-sm">搜索</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12" id="buttongroup">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-6">
              <span>按属性</span>
              <div>
                <button class="btn btn-primary btn-xs">全部</button>
                <button class="btn btn-default btn-xs">大仓</button>
                <button class="btn btn-default btn-xs">小仓</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>按状态</span>
              <div>
                <button class="btn btn-primary btn-xs">全部</button>
                <button class="btn btn-default btn-xs">正常</button>
                <button class="btn btn-default btn-xs">已删除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-12" id="tabelgroup">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel-body">
                <div class="table-responsive">
                  <table class="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>仓库名称</th>
                        <th>合同周期</th>
                        <th>地址</th>
                        <th>仓库描述</th>
                        <th>管理员</th>
                        <th>费用(年)</th>
                        <th>仓库面积</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1233</td>
                        <td>北京大仓</td>
                        <td>2019.10.10-2020.10.01</td>
                        <td>@北京市朝阳区铁棍胡同122号</td>
                        <td>北京总仓库</td>
                        <td>老李</td>
                        <td>1000.00</td>
                        <td>2000m²</td>
                        <td>
                          <button class="btn btn-primary btn-xs" style="margin-right:10px;">编辑</button>
                          <button class="btn btn-danger btn-xs">删除</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1233</td>
                        <td>北京大仓</td>
                        <td>2019.10.10-2020.10.01</td>
                        <td>@北京市朝阳区铁棍胡同122号</td>
                        <td>北京总仓库</td>
                        <td>老李</td>
                        <td>1000.00</td>
                        <td>2000m²</td>
                        <td>
                          <button class="btn btn-primary btn-xs" style="margin-right:10px;">编辑</button>
                          <button class="btn btn-danger btn-xs">删除</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1233</td>
                        <td>北京大仓</td>
                        <td>2019.10.10-2020.10.01</td>
                        <td>@北京市朝阳区铁棍胡同122号</td>
                        <td>北京总仓库</td>
                        <td>老李</td>
                        <td>1000.00</td>
                        <td>2000m²</td>
                        <td>
                          <button class="btn btn-primary btn-xs" style="margin-right:10px;">编辑</button>
                          <button class="btn btn-danger btn-xs">删除</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1233</td>
                        <td>北京大仓</td>
                        <td>2019.10.10-2020.10.01</td>
                        <td>@北京市朝阳区铁棍胡同122号</td>
                        <td>北京总仓库</td>
                        <td>老李</td>
                        <td>1000.00</td>
                        <td>2000m²</td>
                        <td>
                          <button class="btn btn-primary btn-xs" style="margin-right:10px;">编辑</button>
                          <button class="btn btn-danger btn-xs">删除</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /.table-responsive -->
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
                <div class="totalCount">232323</div>
              </nav>
              <!-- 分页 -->

                <!-- /.panel-body -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
.panel-body {
  padding: 15px;
  padding-top: 0;
  padding-right: 15px;
  padding-bottom: 0;
  padding-left: 15px;
}

.panel-default > .panel-heading {
  color: #333;
  background-color: #fff;
  border-color: #ddd;
  font-weight: 700;
}

.panel-body > .row {
  border-bottom: 1px solid #ccc;
  padding: 15px;
}
.panel-body > .row > div {
  display: flex;
}

.panel-body > .row > div > span {
  width: 100px;
  text-align: right;
  padding-right: 20px;
  line-height: 26px;
}
.panel-body > .row > div > input {
  flex: 1;
}

.panel-body > .row > div > div {
  flex: 1;
}

.form-group {
  margin-bottom: 0;
}

.form-group > label {
  margin-left: 0;
  margin-right: 15px;
}

#buttongroup button {
  margin-right: 10px;
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
</style>
