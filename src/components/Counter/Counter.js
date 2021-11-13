import React from "react";
import { connect } from "react-redux";

import Button from "../Button";
import * as actions from "../../redux/Counter/counter-actions";

import s from "./Counter.module.css";

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className={s.counter}>
      <Button
        type="button"
        className="increment"
        onClick={() => {
          onIncrement(step);
        }}
      >
        + {step}
      </Button>
      <p className={s.value}>{value}</p>
      <Button
        type="button"
        className="decrement"
        onClick={() => {
          onDecrement(step);
        }}
      >
        - {step}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({ value: state.counter.value, step: state.counter.step });
// mapStateToProps - возвращаемый объект распыляется пропсами на компонент

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement(1)),
});
// mapDispatchToProps метод который доставляет наши экшены в хранилище
// возвращаемый объект так же распыляется пропсами для компонента, но используется, что бы привязать действие

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/**
 *  на кнопки привязаны dispatch action, при нажатии диспатчится объект экшинов
 *  тот доходит до редюсера, который в свою очередь определяет его по типу
 *  и на результате предыдущего состояния возвразает новое состояние.
 *  Новое состояние записывается в store,
 *  как только обновился redux State, все компоненты которые законекчены получают новые пропсы,
 *  и перерендер компонентов у которых изменились пропсы
 */
