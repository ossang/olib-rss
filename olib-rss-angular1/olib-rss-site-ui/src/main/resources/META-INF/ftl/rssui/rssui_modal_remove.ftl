<!-- modal start-->
<div class="modal fade remove_modal in" tabindex="-1" role="dialog" aria-hidden="true" style="display: none; padding-right: 15px;">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
        </button>
        <h4 class="modal-title" id="myModalLabel3">Remove Rss Url</h4>
      </div>
      <div class="modal-body">
      	<table class="table table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr id="remove_modal_{{bookmark.id}}" ng-repeat="bookmark in bookmarkList">
              <th scope="row" style="width:3%;">{{$index+1}}</th>
              <td class="hand-cursor" style="width:20%;" data-toggle="tooltip" title="{{bookmark.url}}">{{bookmark.name}}</td>
              <td style="width:3%;color:red;"><i ng-click="deleteRss(bookmark.id)" class="fa fa-trash hand-cursor" aria-hidden="true"></i></td>
            </tr>
          </tbody>
        </table>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
      </div>

    </div>
  </div>
</div>
<!-- modal end -->