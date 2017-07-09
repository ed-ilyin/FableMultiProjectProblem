module Api

open Core
open Fable.PowerPack


let get () =
    promise {
        let! x = Core.fetch ()
        return "xXx" => x
    }
