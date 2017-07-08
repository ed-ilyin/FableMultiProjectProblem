module ProjectA


let init () =
    ProjectB.init ()

init() |> ignore
