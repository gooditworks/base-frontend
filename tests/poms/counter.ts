import {Page, Locator} from "@playwright/test"

class CounterPage {
  page: Page
  value: Locator
  incrementButton = "data-test=counter_inc"
  decrementButton = "data-test=counter_dec"

  constructor(page: Page) {
    this.page = page

    this.value = page.locator("data-test=counter_value")
  }

  async goto() {
    await this.page.goto("/")
  }

  getValue(): Promise<string | null> {
    return this.value.textContent()
  }

  increment(): Promise<void> {
    return this.page.click(this.incrementButton)
  }

  decrement(): Promise<void> {
    return this.page.click(this.decrementButton)
  }
}

export default CounterPage
