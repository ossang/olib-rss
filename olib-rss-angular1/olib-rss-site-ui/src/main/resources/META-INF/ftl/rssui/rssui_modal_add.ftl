<!-- modal start-->
<div class="modal fade add_modal in" tabindex="-1" role="dialog" aria-hidden="true" style="display: none; padding-right: 15px;">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title" id="myModalLabel2">Add Rss Url</h4>
      </div>
      <div class="modal-body">
		<form id="" class="form-horizontal form-label-left" >
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">Name </label>
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <input ng-model="name" type="text" class="form-control col-md-7 col-xs-12">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12">URL </label>
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <input ng-model="url" type="text" class="form-control col-md-7 col-xs-12">
                </div>
              </div>
		</form>        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <button ng-click="addRss(name,url)" type="button" class="btn btn-success" data-dismiss="modal">Add</button>
      </div>

    </div>
  </div>
</div>
<!-- modal end -->