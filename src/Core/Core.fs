module Core

open Fable.PowerPack


let (=>) x y = x, y


let fetch () = promise { return "fetch result" }
