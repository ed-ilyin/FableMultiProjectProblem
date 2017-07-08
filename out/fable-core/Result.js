import FSymbol from "../fable-core/Symbol";
import { Any } from "../fable-core/Util";
import { compareUnions, equalsUnions } from "../fable-core/Util";
export default class Result {
  constructor(tag, data) {
    this.tag = tag | 0;
    this.data = data;
  }
  Equals(other) {
    return equalsUnions(this, other);
  }
  CompareTo(other) {
    return compareUnions(this, other);
  }
  [FSymbol.reflection]() {
    return {
      type: "Microsoft.FSharp.Core.FSharpResult",
      interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
      cases: [["Ok", Any], ["Error", Any]]
    };
  }
}
export function map(f, result) {
  return result.tag === 0 ? new Result(0, f(result.data)) : result;
}
export function mapError(f, result) {
  return result.tag === 1 ? new Result(1, f(result.data)) : result;
}
export function bind(f, result) {
  return result.tag === 0 ? f(result.data) : result;
}