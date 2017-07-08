import { PromiseImpl } from "../src/Promise";
export function init() {
  return function (builder_) {
    return builder_.Delay(function () {
      return Promise.resolve(42);
    });
  }(PromiseImpl.promise);
}