var EventApplication = React.createClass({
  render: function () {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by Nick Pisciotta</p>
        </div>
        <div className="row"></div>
          <div className="col-md-12">
            <EventTable />
          </div>
      </div>
    )
  }
})
