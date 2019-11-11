const INITIAL_STATE = [
  { id: 1, text: "Estudar Redux" },
  { id: 2, text: "Fazer dieta" },
  { id: 3, text: "Lavar a louça" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
