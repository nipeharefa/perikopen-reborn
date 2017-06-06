import { INCREASE } from '../constants';

const init = 100;

export default function update(todos = init, action) {
  switch (action.type) {
    case INCREASE:
      return todo = todo+=1
    default:
      return todos;
  }
}