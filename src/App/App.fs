module App

open Core
open Fable.PowerPack


promise {
    let! y = Api.get ()
    return "yYy" => y
}
    |> Promise.map (printfn "%A")
    |> Promise.start
