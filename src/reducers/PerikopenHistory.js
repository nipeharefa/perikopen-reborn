import { INCREASE } from '../constants';

const history = {
	last_read: null // timestamp
};

export default function update(todos = history, action) {
  switch (action.type) {
    case INCREASE:
      return todo = todo+=1
    default:
      return todos;
  }
}