import {
    CompletionItem,
    CompletionItemKind,
    MarkupKind,
    TextDocumentPositionParams,
    CompletionItemTag,
    CompletionList
} from 'vscode-languageserver/node';

export function completionHandlers(_textDocumentPosition: TextDocumentPositionParams): CompletionList {
    return CompletionList.create([
        ...keywordsCompletion(),
        ...constantsCompletion(),
        ...storageCompletion(),
        ...functionsCompletion()
    ],
    false);
}

function keywordsCompletion(): CompletionItem[] {
    return [
        // logic flow
        {
            label: "ponele que",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.poneleQue"
            },
            detail: "De los ifes vite'",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `if`"
            }
        },
        {
            label: "tonce",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.tonce"
            },
            detail: "De los ifes vite' (o también en ciclos, #queSeYo)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `then`"
            }
        },
        {
            label: "oSi",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.oSi"
            },
            detail: "De los ifes vite'",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `else if` o `elif`"
            }
        },
        {
            label: "aLoSumo",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.aLoSumo"
            },
            detail: "De los ifes vite'",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `else`"
            }
        },

        // iterators, cycles
        {
            label: "agarra por",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.agarraPor"
            },
            detail: "De los For / While y eso",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `for`: Acá inicializá un valor. Ej: `agarra por i es 0 hasta 10 de a 1 ...`"
            }
        },
        {
            label: "hasta",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.hasta"
            },
            detail: "De los For / While y eso",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `to`: Acá elegí el valor *hasta* donde va el ciclo. (no inclusive)"
            }
        },
        {
            label: "de a",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.deA"
            },
            detail: "De los For / While y eso",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `step`: Acás fijás de a cuántos valores va iterando el ciclo."
            }
        },
        {
            label: "mientras",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.hasta"
            },
            detail: "De los For / While y eso",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `while`. Es como `agarra por`, pero acá se itera siempre que la expresión evalúe Posta."
            }
        },
        {
            label: "piquete",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.piquete"
            },
            detail: "De los For / While y eso",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `break`."
            }
        },
        {
            label: "segui de largo",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.seguiDeLargo"
            },
            detail: "De los For / While y eso",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un `continue`."
            }
        },

        // arithmetic operators
        {
            label: "ma",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.ma"
            },
            detail: "De los operadores que hacen las cuentas esas",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **suma** `+`"
            }
        },
        {
            label: "meno",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.meno"
            },
            detail: "De los operadores que hacen las cuentas esas",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **resta** `-`"
            }
        },
        {
            label: "por",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.por"
            },
            detail: "De los operadores que hacen las cuentas esas",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **multiplicación** `*`"
            }
        },
        {
            label: "dividido",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.dividido"
            },
            detail: "De los operadores que hacen las cuentas esas",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **división** `/`"
            }
        },
        {
            label: "aLa",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.aLa"
            },
            detail: "De los operadores que hacen las cuentas esas",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **potencia** `**`"
            }
        },
        {
            label: "moduleame",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.moduleame"
            },
            detail: "De los operadores que hacen las cuentas esas",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **resto de división entera** (`%` en gallego)"
            }
        },

        // logical operators (logic gates, etc.)
        {
            label: "anda por",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.andaPor"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a un operador de **comparación** (`==`)"
            }
        },
        {
            label: "no es",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.noEs"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cuando buscás que algo ***no* sea otro algo** (`!=`)"
            }
        },
        {
            label: "es nakever",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.esNakever"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cuando buscás que algo  **DE VERDAD *no* sea otro algo** (`!==`)"
            }
        },
        {
            label: "es unCachitoMeno",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.esUnCahitoMeno"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cuando buscás que algo sea **menor** otro algo (`<`)"
            }
        },
        {
            label: "es menorOIgual",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.esMenorOIgual"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cuando buscás que algo sea **menor o igual** otro algo (`<=`)"
            }
        },
        {
            label: "es unCachitoMa",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.esUnCahitoMa"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cuando buscás que algo sea **mayor** otro algo (`>`)"
            }
        },
        {
            label: "es mayorOIgual",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.esUnCahitoMa"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cuando buscás que algo sea **mayor o igual** otro algo (`>=`)"
            }
        },
        {
            label: "es maomeno",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.esMaOMeno"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Similar a `anda por`, pero se equivoca el 20% de las veces."
            }
        },
        {
            label: "y",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.AND"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Compara que **todas** las expresiones encadenadas den Posta. (`and` o `&&`)"
            }
        },
        {
            label: "o",
            kind: CompletionItemKind.Operator,
            data: {
                id: "chelang.OR"
            },
            detail: "De los operadores que comparan cosas (la lógica cheta esa)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Compara que **alguna** de las expresiones encadenadas den Posta. (`or` o `||`)"
            }
        }
    ];
}

function constantsCompletion(): CompletionItem[] {
    return [
        {
            label: "Milanesa",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Milanesa"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a `\"Carne\"`"
            }
        },
        {
            label: "Macri",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Macri"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a `\"Gato\"`"
            }
        },
        {
            label: "AltoGuiso",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.AltoGuiso"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a `15`"
            }
        },
        {
            label: "Vacio",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Vacio"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a `Empty` (**Ojo que se puede operar con esto.** Es como un cirujano con Parkinson)"
            }
        },
        {
            label: "Inviable",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Inviable"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Equivale a `null`"
            }
        },
        {
            label: "Posta",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Posta"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "El buen `true` de toda la vida"
            }
        },
        {
            label: "Chamuyo",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Chamuyo"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "El buen `false` de toda la vida"
            }
        },
        {
            label: "Pi",
            kind: CompletionItemKind.Constant,
            data: {
                id: "chelang.Pi"
            },
            detail: "Constantes rikolinas que vienen de fábrica",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Pibe, **es el número Pi**. Ya sabés, el ` 3.14159265...` y tal"
            }
        }
    ];
}

function storageCompletion(): CompletionItem[] {
    return [
        {
            label: "che",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.che"
            },
            detail: "Palabras clave para crear, guardar o asignar variables",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "El único, el legendario, el `che` declara una variable pa"
            }
        },
        {
            label: "digamos que",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.digamosQue"
            },
            detail: "Palabras clave para crear, guardar o asignar variables",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Supuesta alternativa a `che`, pero no parece funcar"
            },
            tags: [
                CompletionItemTag.Deprecated
            ]
        },
        {
            label: "es",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.es"
            },
            detail: "Palabras clave para crear, guardar o asignar variables",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Asigna un valor a una variable (como el `=`) *Alternativas:* `seigual` o `son`"
            }
        },
        {
            label: "seigual",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.seigual"
            },
            detail: "Palabras clave para crear, guardar o asignar variables",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Asigna un valor a una variable (como el `=`) *Alternativas:* `che` o `son`"
            }
        },
        {
            label: "son",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.es"
            },
            detail: "Palabras clave para crear, guardar o asignar variables",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Asigna un valor a una variable (como el `=`) *Alternativas:* `che` o `seigual`"
            }
        }
    ];
}

function functionsCompletion(): CompletionItem[] {
    return [
        // function-oriented keywords
        {
            label: "definime",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.definime"
            },
            detail: "Palabras clave para funciones",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Esto hace falta para definir una función. *Ej:* `definime fibonacci(n) ...`"
            }
        },
        {
            label: "tirame",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.tirame"
            },
            detail: "Palabras clave para funciones",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Devuelve algo dentro de una función."
            }
        },
        {
            label: "hastaaca",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.hastaaca"
            },
            detail: "Palabras clave para funciones",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Cierra un bloque de operaciones. En funciones, se usa sólo si ésta tiene más de una operación. *Ojo* que ciclos como `agarra por`, así como los `ponele que` también necesitan cerrar con un `hastaaca`"
            }
        },

        // built-in functions
        {
            label: "Cuchame()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Cuchame"
            },
            detail: "Funciones que vienen de fábrica papi",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Imprime cosas por pantalla. Un clásico."
            }
        },
        {
            label: "CuchameRet()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.CuchameRet"
            },
            detail: "Funciones que vienen de fábrica papi",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Imprime, pero también *devuelve* lo que imprime."
            }
        },
        {
            label: "Traeme()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Traeme"
            },
            detail: "Traeme(\"querés algo pibe?: \")",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Le pide input al usuario"
            }
        },
        {
            label: "TraemeNumerito()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.TraemeNumerito"
            },
            detail: "Traeme(\"querés algo pibe? Sólo números porfa: \")",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Le pide input al usuario (pero sólo número)"
            }
        },
        {
            label: "Limpiame()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Limpiame"
            },
            detail: "Funciones que vienen de fábrica papi",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Limpia la consola. Igual que `clear()`"
            }
        },
        {
            label: "clear()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.clear"
            },
            detail: "Funciones que vienen de fábrica papi",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Limpia la consola. Igual que `Limpiame()`"
            }
        },
        {
            label: "EsNumerito()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.EsNumerito"
            },
            detail: "EsNumerito(num)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Comprueba si `num` es un **número** o no"
            }
        },
        {
            label: "EsTexto()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.EsTexto"
            },
            detail: "EsTexto(str)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Comprueba si `str` es un **string** o no"
            }
        },
        {
            label: "EsLista()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.EsLista"
            },
            detail: "EsLista(list)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Comprueba si `list` es una **lista** o no"
            }
        },
        {
            label: "EsFuncion()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.EsFuncion"
            },
            detail: "EsFuncion(func)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Comprueba si `func` es una **función** o no"
            }
        },
        {
            label: "Agregale()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Agregale"
            },
            detail: "Agregale(list, elem)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Agrega el elemento `elem` a la lista `list`"
            }
        },
        {
            label: "Rajale()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Rajale"
            },
            detail: "Rajale(list, index)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Le saca a la lista `list` el elemento en la posición `index`, y **lo devuelve**"
            }
        },
        {
            label: "Metele()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Metele"
            },
            detail: "Metele(listA, listB)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Extiende la lista `listA` con los contenidos de la lista `listB`. También **devuelve** una referencia a `listA`"
            }
        },
        {
            label: "TaLargo()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.TaLargo"
            },
            detail: "TaLargo(list | str)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Devuelve la longitud de una lista o string"
            }
        },
        {
            label: "Correme()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Correme"
            },
            detail: "Correme(\"path/file.che\")",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Ejecuta un archivo (sólo `.che`)"
            }
        },
        {
            label: "Chorro()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Chorro"
            },
            detail: "Probalo que está re piola",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Tutorial: Cómo hacer si entra un chorro en casa"
            }
        },
        {
            label: "Argentina()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Argentina"
            },
            detail: "Probalo que está re piola",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "¡VIVA LA PATRIA CARAJO!"
            }
        },
        {
            label: "Boludear()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Boludear"
            },
            detail: "Boludear(n)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Se va a dormir `n` segundos como el vago que es"
            }
        },
        {
            label: "Viborita()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Viborita"
            },
            detail: "Viborita(str)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Trata de evaluar `str` como código de Python, y devuelve el resultado"
            }
        },
        {
            label: "ANumerito()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.ANumerito"
            },
            detail: "ANumerito(num | str)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Convierte un número o string a entero"
            }
        },
        {
            label: "AFlotantito()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.AFlotantito"
            },
            detail: "AFlotantito(num | str)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Convierte un número o string a float"
            }
        },
        {
            label: "ATextito()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.ATextito"
            },
            detail: "ATextito(*)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Convierte un número o string a string"
            }
        },
        {
            label: "FloatYPico()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.FloatYPico"
            },
            detail: "FloatYPico(num | str)",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Toma un número (o su representación en string), y devuelve un float más o menos cerca (un rango de `num` ± 0.5 para ser preciso)"
            }
        },
        {
            label: "Dolar()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Dolar"
            },
            detail: "Funciones que vienen de fábrica papi",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Devuelve el precio actual de dólar"
            }
        },
        {
            label: "Campora()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Campora"
            },
            detail: "Probalo que está re piola",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Ojito que con cada aparición de la Cámpora, **el precio del dólar sube**"
            }
        },
        {
            label: "HalloEbribodi()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.HalloEbribodi"
            },
            detail: "Probalo que está re piola",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "*hAllO eBRiBoDi*"
            }
        },
        {
            label: "Sumate()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.Sumate"
            },
            detail: "Sumate(list[num])",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "Devuelve la suma de todo los elementos de la lista `list`, la cual sólo debe contener números"
            }
        },
        {
            label: "ElMasGrande()",
            kind: CompletionItemKind.Keyword,
            data: {
                id: "chelang.ElMasGrande"
            },
            detail: "Probalo que está re piola",
            documentation: {
                kind: MarkupKind.Markdown,
                value: "No parece funcar"
            },
            tags: [
                CompletionItemTag.Deprecated
            ]
        }
    ];
}