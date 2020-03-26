import {React} from 'react';

const initialList = [];

function list() {
  const [list, setList] = React.useState(initialList);
    return (
        <div>
          <ul>
            {list.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
    );
}

export default List;