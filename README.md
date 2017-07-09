# FableMultiProjectProblem

npm5 is required.

steps to reproduce:
```
npm install
dotnet restore
./split.sh
```
output:
```
Fable daemon started on port 61225
CWD: /Users/ed/git/github.com/ed-ilyin/FableMultiProjectProblem
npm run split

> @ split /Users/ed/git/github.com/ed-ilyin/FableMultiProjectProblem
> node src/App/splitter.config.js

Fable compiler started ...
Parsing ./App.fsproj...
error ==> /Users/ed/git/github.com/ed-ilyin/FableMultiProjectProblem/src/Core/Core.fs(3,11): (3,20) error FSHARP: The namespace 'PowerPack' is not defined.
error ==> /Users/ed/git/github.com/ed-ilyin/FableMultiProjectProblem/src/Core/Core.fs(9,15): (9,22) error FSHARP: The value or constructor 'promise' is not defined.
warning ==> unknown(1,0): (1,0) warning FSHARP: p_typar_spec: from error
Fable compiler is done.
Closing Fable daemon...
```
