var EventTable = React.createClass({
  render: function() {
    return (
      <table className="table table-striped">
        <thread>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-3">Date</th>
            <th className="col-md-3">Place</th>
            <th className="col-md-3">Description</th>
          </tr>
        </thread>
        <tbody></tbody>
      </table>
    )
  }
});
