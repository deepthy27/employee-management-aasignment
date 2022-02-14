import { FETCH_USERS, STORE_DATA, UPDATE_DATA } from "../actions/actions";

const initialState = {
  loading: true,
  employees: null,
  error: "Error in processing",
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: false,
        employees: state,
        error: "No Error",
      };
    case STORE_DATA:
      console.log(action.type, action.payload);
      return {
        ...state,
        loading: false,
        employees: action.payload,
        error: "No Error",
      };
    case UPDATE_DATA:
      console.log(action.type, action.payload.id,state);
      return {
        ...state,
        loading: false,
        employees: state.employees.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                email: action.payload.email,
                address: {
                  ...content.address,
                  city: action.payload.address.city,
                },  
                phone: action.payload.phone,
                website: action.payload.website,
                company: {
                  ...content.company,
                  name: action.payload.company.name,
                }
              }
            : content
        ),
        error: "No Error",
      };
    default:
      return state;
  }
}
export default reducer;
