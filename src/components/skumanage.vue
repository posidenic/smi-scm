<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="panel panel-default">
        <div class="panel-heading">
            SKU管理
            <button type="button" class="btn btn-success btn-sm">✚&nbsp;<router-link to="/index/useradd">添加SKU</router-link></button>
            </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-6">
              <span>SKU名称</span>
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>SKU条码</span>
              <input type="text" />
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
              <span>按状态</span>
              <div>
                <button class="btn btn-primary btn-sm buttonactive">全部</button>
                <button class="btn btn-default btn-sm">正常</button>
                <button class="btn btn-default btn-sm">禁用</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <span>按类型</span>
              <div>
                <button class="btn btn-primary btn-sm buttonactive">全部</button>
                <button class="btn btn-default btn-sm">饮料</button>
                <button class="btn btn-default btn-sm">小食</button>
                <button class="btn btn-default btn-sm">水果</button>
                <button class="btn btn-default btn-sm">蔬菜</button>
                <button class="btn btn-default btn-sm">生鲜</button>
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
                        <th>SKU ID</th>
                        <th>SKU图片</th>
                        <th>条码</th>
                        <th>SKU信息</th>
                        <th>供应商</th>
                        <th>基本单位</th>
                        <th>创建时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1233</td>
                        <td>图片</td>
                        <td>图片</td>
                        <td>可可饼干</td>
                        <td>上海一可饼干有限公司上海中申食品有限公司</td>
                        <td style="color:red;">袋</td>
                        <td>2019-04-09 18:56:5</td>
                        <td>
                          <button class="btn btn-primary btn-xs">编辑</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1233</td>
                        <td>图片</td>
                        <td>图片</td>
                        <td>可可饼干</td>
                        <td>上海一可饼干有限公司上海中申食品有限公司</td>
                        <td style="color:red;">袋</td>
                        <td>2019-04-09 18:56:5</td>
                        <td>
                          <button class="btn btn-primary btn-xs">编辑</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1233</td>
                        <td>图片</td>
                        <td>图片</td>
                        <td>可可饼干</td>
                        <td>上海一可饼干有限公司上海中申食品有限公司</td>
                        <td style="color:red;">袋</td>
                        <td>2019-04-09 18:56:5</td>
                        <td>
                          <button class="btn btn-primary btn-xs">编辑</button>
                        </td>
                      </tr>
                      <tr>
                        <td>1233</td>
                        <td>图片</td>
                        <td>图片</td>
                        <td>可可饼干</td>
                        <td>上海一可饼干有限公司上海中申食品有限公司</td>
                        <td style="color:red;">袋</td>
                        <td>2019-04-09 18:56:5</td>
                        <td>
                          <button class="btn btn-primary btn-xs">编辑</button>
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

.panel-heading > button {
  float: right;
  margin-top: -5px;
  color: #fff;
}
.panel-heading > button>a {
  color: #fff;
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
  background: #888;
  color: #fff;
  border: 0;
}
.buttonactive {
  background-color: rgba(55, 204, 237, 1) !important;
}

.pagination {
  float: right;
  margin-top: 0;
}

.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.totalCount {
  width: 60px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  color: red;
  border: 1px solid rgb(221, 221, 221);
  border-right: 0;
  float: right;
  border-top-right-radius: 0;
  border-top-left-radius: 4px;
}
</style>
