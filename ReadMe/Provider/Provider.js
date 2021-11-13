/**
 * ================ React и Redux ================
 *
 * Для того чтобы использовать React и Redux вместе, необходимо добавить пакет react - redux.
 * Это набор компонентов связывающих React - компоненты и Redux - хранилище через контекст Context.
 *
 * ================ Provider ================
 * Компонент <Provider>, оборачивает все дерево компонентов приложения и, используя контекст, предоставляет store и его методы.
 */

import { createStore } from "redux";
import { Provider } from "react-redux";

// Болванка под reducer
const reducer = (state = {}, action) => state;

const store = createStore(reducer);

<Provider store={store}>
  <App />
</Provider>;
