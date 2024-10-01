import {render, prettyDOM, screen} from "@testing-library/vue";

import BaseButton from "./BaseButton.vue";

test('renders base button', () => {
  //given (arrange) - подготовка перед тестированием
  const options = {
    slots: {
      default: "Test button"
    }
  }

  //when (act) - код, который мы тестируем
  render(BaseButton, options)

  // выводить дом дерево на экран
  // console.log(prettyDOM())

  // then (assert) - проверяем, совпадает ли действительное с ожидаемым
  screen.getByText(/test/i);

// выводить дом дерево на экран
  screen.debug()

})