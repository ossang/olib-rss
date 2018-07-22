<table ng-if="viewtype=='list'" class="table table-striped jambo_table bulk_action">
    <thead>
      <tr class="headings">
        <th class="column-title" style="width:5%">No</th>
        <th class="column-title" style="width:65%">Title</th>
        <th class="column-title" style="width:10%">Link</th>
        <th class="column-title" style="width:20%">Date</th>
      </tr>
    </thead>

    <tbody>
      <tr ng-repeat="feed in feedList" class="even pointer">
        <td>{{$index+1}}</td>
        <td><a href="{{feed.link}}" target="_blank">{{feed.title | html}}</a></td>
        <td><a href="{{feed.link}}" target="_blank">상세보기</a></td>
        <td>{{feed.pubDate}}</td>
      </tr>
    </tbody>
  </table>