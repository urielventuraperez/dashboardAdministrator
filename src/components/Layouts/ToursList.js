import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { students: state.students }
}

const ConnectedList = ( {students} ) => (
    <ul className="list-group list-group-flush">
    {students.map(student => (
      <li className="list-group-item" key={student.id}>
        {student.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;