const initialState = {
  totalexpense: 0,
  income: 0,
  spending: 0,
  expenselist: []
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INCOME": {
      return {
        ...state,
        totalexpense: state.totalexpense + parseFloat(action.payload.amount),
        income: state.income + parseFloat(action.payload.amount),
        expenselist: state.expenselist.concat(action.payload)
      };
    }
    case "ADD_SPENDING": {
      return {
        ...state,
        totalexpense: state.totalexpense - parseFloat(action.payload.amount),
        spending: state.spending + parseFloat(action.payload.amount),
        expenselist: state.expenselist.concat(action.payload)
      };
    }
    case "REMOVE_INCOME": {
      return {
        ...state,
        totalexpense: state.totalexpense - parseFloat(action.payload.amount),
        income: state.income - parseFloat(action.payload.amount),
        expenselist: state.expenselist.filter(
          item => item.id != action.payload.id
        )
      };
    }
    case "REMOVE_SPENDING": {
      return {
        ...state,
        totalexpense: state.totalexpense + parseFloat(action.payload.amount),
        spending: state.spending - parseFloat(action.payload.amount),
        expenselist: state.expenselist.filter(
          item => item.id != action.payload.id
        )
      };
    }
    default: {
      return state;
    }
  }
};

export default listReducer;
