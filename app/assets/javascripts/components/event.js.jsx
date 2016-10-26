var Event = React.createClass({
  propTypes: {
    name: React.Proptypes.string,
    event_date: React.Proptypes.sring,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  }

  render: function() {
    var event = this.props.event;
    return (
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
      </tr>
    )
  }
})
