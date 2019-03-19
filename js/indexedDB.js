if (!window.indexedDB) {
    window.alert("Tu navegador no soporta una versión estable de indexedDB.");
}


var db;
const DB_NAME = 'videoSystem';
const DB_VERSION = 1;
const DB_CATEGORIAS = 'categorias';
const DB_ACTORES = 'actores';
const DB_DIRECTORES = 'directores';
const DB_PRODUCCIONES = 'producciones';

var request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = function (event) {

    db = event.target.result;

    //CATEGORÍAS
    var categoria1 = new Category("Acción", "En este género prima la espectacularidad de las imágenes por medio de efectos especiales");
    var categoria2 = new Category("Animación", "No recurre a la técnica del rodaje de imágenes reales, sino a técnicas de animación");
    var categoria3 = new Category("Aventura", "Se refleja un mundo heroico de combates y aventuras. Predominan la acción y valores caballerescos");
    var categoria4 = new Category("Ciencia-ficción", "Género especulativo que relata acontecimientos desarrollados en un marco  imaginario");
    var categoria5 = new Category("Comedia", "Recrea situaciones de humor que intentan provocar la risa de la audiencia");
    var categoria6 = new Category("Drama", "Se desarrolla a fondo la caracterización de los personajes, dejando aflorar sus emociones y sentimientos");
    var categoria7 = new Category("Musical", "Contiene interrupciones en su desarrollo, para dar un breve receso por medio de un fragmento musical");
    var categoria8 = new Category("Romance", "Retrata argumentos construidos de eventos y personajes relacionados con el amor y las relaciones románticas");
    var categoria9 = new Category("Terror", "Se caracteriza por su enfoque en provocar en el espectador sensaciones de miedo, repugnancia, incomodidad o preocupación");


    var categorias = [categoria1.getObject(), categoria2.getObject(), categoria3.getObject(), categoria4.getObject(), categoria5.getObject(), categoria6.getObject(), categoria7.getObject(), categoria8.getObject(), categoria9.getObject()];


    //ACTORES
    var actor1 = new Actor("Johnny", "Depp", "", new Date(1963, 06, 09));
    var actor2 = new Actor("Daniel", "Radcliffe", "", new Date(1989, 07, 23));
    var actor3 = new Actor("Fa", "Mulan", "", new Date(1998, 06, 05));
    var actor4 = new Actor("Carl", "Grimes", "", new Date(2003, 02, 25));


    var actores = [actor1.getObject(), actor2.getObject(), actor3.getObject(), actor4.getObject()];


    //DIRECTORES
    var director1 = new Director("Matt", "Groening", "", new Date(1954, 02, 15));
    var director2 = new Director("Juan Antonio", "Bayona", "", new Date(1975, 05, 09));
    var director3 = new Director("James", "Cameron", "", new Date(1954, 08, 16));
    var director4 = new Director("Steven", "Spielberg", "", new Date(1946, 12, 18));

    var directores = [director1.getObject(), director2.getObject(), director3.getObject(), director4.getObject()];


    //PRODUCCIONES
    //Recursos

    var recurso1 = new Resource(160, "https://www.dondesea.com", ['Español', ' Inglés', ' Italiano'], ['Español', ' Inglés', ' Italiano']);
    var recurso2 = new Resource(190, "https://www.dondesea.com", ['Serbio', ' Brasileño', ' Ruso'], ['Serbio', ' Brasileño', ' Ruso']);


    //Coordenadas

    var coordenadas1 = new Coordinate(50, 165);
    var coordenadas2 = new Coordinate(66, 154);


    //Episodios

    var episodio1 = new Episodes("Episodio 1", recurso1.getObject(), coordenadas1.getObject());
    var episodio2 = new Episodes("Episodio 2", recurso2.getObject(), coordenadas2.getObject());
    var episodio3 = new Episodes("Episodio 3", recurso1.getObject(), coordenadas1.getObject());
    var episodio4 = new Episodes("Episodio 4", recurso2.getObject(), coordenadas2.getObject());


    //Temporadas

    var season1 = new Season("Temporada 1", [episodio1.getObject(), episodio2.getObject()]);
    var season2 = new Season("Temporada 2", [episodio3.getObject(), episodio4.getObject()]);

    var peliculacomedia1 = new Movie("Deadpool", new Date(2016, 01, 21), recurso1.getObject(), coordenadas1, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaaccion1 = new Movie("Piratas del caribe", new Date(2017, 05, 11), recurso1.getObject(), coordenadas1, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculadrama1 = new Movie("Titanic", new Date(1998, 01, 08), recurso1.getObject(), coordenadas1, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaaventura1 = new Movie("Harry Potter y la Cámara Secreta", new Date(2002, 11, 29), recurso1.getObject(), coordenadas1, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaterror2 = new Movie("El Orfanato", new Date(2007, 10, 11), recurso2.getObject(), coordenadas2, "Española", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaciencia1 = new Movie("Regreso al futuro", new Date(1985, 12, 02), recurso1.getObject(), coordenadas1, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var pelicularomance2 = new Movie("Antes de ti", new Date(2016, 07, 01), recurso2.getObject(), coordenadas2, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculamusical1 = new Movie("Bohemian Rhapsody", new Date(2018, 12, 28), recurso1.getObject(), coordenadas1, "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaanimacion1 = new Movie("Mulán", new Date(1998, 06, 05), recurso1.getObject(), coordenadas1, "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");


    var serieaccion2 = new Serie("Perdidos", new Date(2004, 09, 22), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriecomedia1 = new Serie("Los Simpson", new Date(1989, 12, 07), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriedrama1 = new Serie("The Good Doctor", new Date(2017, 09, 25), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieaventura1 = new Serie("Vikingos", new Date(2013, 03, 03), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieterror1 = new Serie("The Walking Dead", new Date(2010, 10, 31), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieciencia1 = new Serie("Black Mirror", new Date(2011, 12, 04), [season1.getObject(), season2.getObject()], "Nacionalida", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieromance1 = new Serie("True Blood", new Date(2008, 09, 07), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriemusical1 = new Serie("Glee", new Date(2009, 05, 19), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieanimacion1 = new Serie("Inspector Gadget", new Date(1982, 12, 04), [season1.getObject(), season2.getObject()], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");

    //Interpretaciones

    var interpretacion1 = new Interpretation(peliculaaccion1.getObject(), "Jack Sparrow", true);
    var interpretacion2 = new Interpretation(peliculaaventura1.getObject(), "Harry Potter", true);
    var interpretacion3 = new Interpretation(peliculaanimacion1.getObject(), "Fa Mulan", true);
    var interpretacion4 = new Interpretation(serieterror1.getObject(), "Carl Grimes", false);


    var producciones = [peliculacomedia1.getObject(), peliculaaccion1.getObject(), peliculadrama1.getObject(),
    peliculaaventura1.getObject(), peliculaterror2.getObject(), peliculaciencia1.getObject(), pelicularomance2.getObject(),
    peliculamusical1.getObject(), peliculaanimacion1.getObject(),
    serieaccion2.getObject(), seriecomedia1.getObject(), seriedrama1.getObject(), serieterror1.getObject(), serieciencia1.getObject(), serieaventura1.getObject(),
    serieromance1.getObject(), seriemusical1.getObject(), serieanimacion1.getObject()];



    //ASIGNACIONES
    categoria1.addProduction(peliculaaccion1.getObject());
    categoria2.addProduction(peliculaanimacion1.getObject());
    categoria3.addProduction(peliculaaventura1.getObject());
    categoria4.addProduction(peliculaciencia1.getObject());
    categoria5.addProduction(peliculacomedia1.getObject());
    categoria6.addProduction(peliculadrama1.getObject());
    categoria7.addProduction(peliculamusical1.getObject());
    categoria8.addProduction(pelicularomance2.getObject());
    categoria9.addProduction(peliculaterror2.getObject());

    actor1.addInterpretation(interpretacion1.getObject());
    actor2.addInterpretation(interpretacion2.getObject());
    actor3.addInterpretation(interpretacion3.getObject());
    actor4.addInterpretation(interpretacion4.getObject());

    director1.addProduction(seriecomedia1.getObject());
    director2.addProduction(peliculaterror2.getObject());
    director3.addProduction(peliculadrama1.getObject());
    director4.addProduction(peliculaciencia1.getObject());


    try {
        var tablaCategorias = db.createObjectStore(DB_CATEGORIAS, { keyPath: "nombre" });
        var tablaActores = db.createObjectStore(DB_ACTORES, { keyPath: "nombre" });
        var tablaDirectores = db.createObjectStore(DB_DIRECTORES, { keyPath: "nombre" });
        var tablaProducciones = db.createObjectStore(DB_PRODUCCIONES, { keyPath: "title" });

        for (var i in categorias) {
            tablaCategorias.add(categorias[i]);
        }

        for (var i in actores) {
            tablaActores.add(actores[i]);
        }

        for (var i in directores) {
            tablaDirectores.add(directores[i]);
        }

        for (var i in producciones) {
            tablaProducciones.add(producciones[i]);
        }

    } catch (e) {
        console.log("Exception creating object store: " + e);
    }

}



request.onsuccess = function (event) {

    var videoSystem = VideoSystem.getInstance();

    db = event.target.result;
    db.onerror = function (event) {
        console.log(event.target.error);
    };

    window.produccionesYaInstanciadas = [];

    var transaction = db.transaction([DB_CATEGORIAS, DB_PRODUCCIONES, DB_ACTORES, DB_DIRECTORES]);

    var tablaCategorias = transaction.objectStore(DB_CATEGORIAS);
    tablaCategorias.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var categoria = new Category(cursor.value.nombre, cursor.value.description);
            for (var i in cursor.value.producciones) {
                var produccion;
                if (cursor.value.producciones[i].hasOwnProperty('seasons')) {
                    produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                        return produccionArray.title == cursor.value.producciones[i].title;
                    });
                    if (!produccion) {
                        produccion = new Serie(cursor.value.producciones[i].title, new Date(cursor.value.producciones[i].publicacion), cursor.value.producciones[i].seasons, cursor.value.producciones[i].nacionalidad, cursor.value.producciones[i].sinopsis);
                        produccionesYaInstanciadas.push(produccion);
                    }
                } else {
                    produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                        return produccionArray.title == cursor.value.producciones[i].title;
                    });
                    if (!produccion) {
                        produccion = new Movie(cursor.value.producciones[i].title, new Date(cursor.value.producciones[i].publicacion), cursor.value.producciones[i].resource, cursor.value.producciones[i].localizaciones, cursor.value.producciones[i].nacionalidad, cursor.value.producciones[i].sinopsis);
                        produccionesYaInstanciadas.push(produccion);
                    }
                }
                categoria.addProduction(produccion);
            }

            videoSystem.addCategory(categoria, true);


            cursor.continue();
        }
    }

    var tablaProducciones = transaction.objectStore(DB_PRODUCCIONES);
    tablaProducciones.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var produccion;

            if (cursor.value.hasOwnProperty('seasons')) {
                produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                    return produccionArray.title == cursor.value.title;
                });
                if (!produccion) {
                    produccion = new Serie(cursor.value.title, new Date(cursor.value.publicacion), cursor.value.seasons, cursor.value.nacionalidad, cursor.value.sinopsis);
                    produccionesYaInstanciadas.push(produccion);
                }
            } else {
                produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                    return produccionArray.title == cursor.value.title;
                });
                if (!produccion) {
                    produccion = new Movie(cursor.value.title, new Date(cursor.value.publicacion), cursor.value.resource, cursor.value.localizaciones, cursor.value.nacionalidad, cursor.value.sinopsis);
                    produccionesYaInstanciadas.push(produccion);
                }
            }
            videoSystem.addProduction(produccion, true);
            cursor.continue();
        }
    }


    var tablaActores = transaction.objectStore(DB_ACTORES);
    tablaActores.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var actor = new Actor(cursor.value.nombre, cursor.value.apellido1, cursor.value.apellido2, new Date(cursor.value.fecha));
            for (var i in cursor.value.interpretaciones) {
                var produccion;
                if (cursor.value.interpretaciones[i].produccion.hasOwnProperty('seasons')) {
                    produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                        return produccionArray.title == cursor.value.interpretaciones[i].produccion.title;
                    });
                    if (!produccion) {
                        produccion = new Serie(cursor.value.interpretaciones[i].produccion.title, new Date(cursor.value.interpretaciones[i].produccion.publicacion), cursor.value.interpretaciones[i].produccion.seasons, cursor.value.interpretaciones[i].produccion.nacionalidad, cursor.value.interpretaciones[i].produccion.sinopsis);
                        var personaje = cursor.value.interpretaciones[i].personaje;
                        var principal = cursor.value.interpretaciones[i].principal;
                        produccionesYaInstanciadas.push(produccion);
                    }
                } else {
                    produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                        return produccionArray.title == cursor.value.interpretaciones[i].produccion.title;
                    });
                    if (!produccion) {
                        produccion = new Movie(cursor.value.interpretaciones[i].produccion.title, new Date(cursor.value.interpretaciones[i].produccion.publicacion), cursor.value.interpretaciones[i].produccion.resource, cursor.value.interpretaciones[i].produccion.localizaciones, cursor.value.interpretaciones[i].produccion.nacionalidad, cursor.value.interpretaciones[i].produccion.sinopsis);
                        var personaje = cursor.value.interpretaciones[i].personaje;
                        var principal = cursor.value.interpretaciones[i].principal;
                        produccionesYaInstanciadas.push(produccion);
                    } else {
                        var personaje = cursor.value.interpretaciones[i].personaje;
                        var principal = cursor.value.interpretaciones[i].principal;
                    }
                }

                var interpretacion = new Interpretation(produccion, personaje, principal);
                actor.addInterpretation(interpretacion);
            }

            videoSystem.addActor(actor, true);
            cursor.continue();
        }
    }


    var tablaDirectores = transaction.objectStore(DB_DIRECTORES);
    tablaDirectores.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            var director = new Director(cursor.value.nombre, cursor.value.apellido1, cursor.value.apellido2, cursor.value.fecha);
            for (var i in cursor.value.producciones) {
                var produccion;
                if (cursor.value.producciones[i].hasOwnProperty('seasons')) {
                    produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                        return produccionArray.title == cursor.value.producciones[i].title;
                    });
                    if (!produccion) {
                        produccion = new Serie(cursor.value.producciones[i].title, new Date(cursor.value.producciones[i].publicacion), cursor.value.producciones[i].seasons, cursor.value.producciones[i].nacionalidad, cursor.value.producciones[i].sinopsis);
                        produccionesYaInstanciadas.push(produccion);
                    }
                } else {
                    produccion = produccionesYaInstanciadas.find(function (produccionArray) {
                        return produccionArray.title == cursor.value.producciones[i].title;
                    });
                    if (!produccion) {
                        produccion = new Movie(cursor.value.producciones[i].title, new Date(cursor.value.producciones[i].publicacion), cursor.value.producciones[i].resource, cursor.value.producciones[i].localizaciones, cursor.value.producciones[i].nacionalidad, cursor.value.producciones[i].sinopsis);
                        produccionesYaInstanciadas.push(produccion);
                    }
                }
                director.addProduction(produccion);
            }

            videoSystem.addDirector(director, true);

            cursor.continue();
        }
    }
}




//CATEGORÍAS

function insertarCategoriaIndexDB(categoria) {

    var transaction = db.transaction([DB_CATEGORIAS], "readwrite");

    transaction.onerror = function (event) {
        console.log("Error en transaction: " + event.target.error);
    };

    var tablaCategorias = transaction.objectStore(DB_CATEGORIAS);

    var req = tablaCategorias.add(categoria.getObject());

    req.onsuccess = function (even) {
        console.log("Categoria añadida.");
    };

    req.onerror = function (event) {
        console.log("La categoría no se ha podido añadir.");
    };
}

function borrarCategoriaIndexDB(categoria) {
    var request = db.transaction([DB_CATEGORIAS], "readwrite").objectStore(DB_CATEGORIAS).delete(categoria.name);

    request.onsuccess = function (event) {
        console.log("Categoría borrada.");
    };

    request.onerror = function (event) {
        console.log("La categoría no se ha podido borrar.");
    };
}

function modificarCategoriaIndexDB(categoria) {
    var objectStore = db.transaction([DB_CATEGORIAS], "readwrite").objectStore(DB_CATEGORIAS);

    var request = objectStore.get(categoria.name);

    request.onsuccess = function (event) {
        var data = request.result;
        data = categoria.getObject();
        data.producciones = [];

        for(var i =0;i<categoria.production.length; i++){
            data.producciones.push(categoria.production[i].getObject());
        }

        
        var requestUpdate = objectStore.put(data);

        requestUpdate.onerror = function (event) {
            console.log("La categoría no se ha podido modificar.");
        };

        requestUpdate.onsuccess = function (event) {
            console.log("Categoría modificada.");
        };
    };
}


//PRODUCCIONES

function insertarProduccionIndexDB(produccion) {

    var transaction = db.transaction([DB_PRODUCCIONES], "readwrite");

    transaction.onerror = function (event) {
        console.log("Error en transaction: " + event.target.error);
    };

    var tablaProducciones = transaction.objectStore(DB_PRODUCCIONES);

    var req = tablaProducciones.add(produccion.getObject());

    req.onsuccess = function (event) {
        console.log("Producción añadida.");
    };

    req.onerror = function (event) {
        console.log("La producción no se ha podido añadir.");
    };
}

function borrarProduccionIndexDB(produccion) {
    var request = db.transaction([DB_PRODUCCIONES], "readwrite").objectStore(DB_PRODUCCIONES).delete(produccion.title);

    request.onsuccess = function (event) {
        console.log("Producción borrada.");
    };

    request.onerror = function (event) {
        console.log("La producción no se ha podido borrar.");
    };
}



//DIRECTORES

function insertarDirectorIndexDB(director) {

    var transaction = db.transaction([DB_DIRECTORES], "readwrite");

    transaction.onerror = function (event) {
        console.log("Error en transaction: " + event.target.error);
    };

    var tablaDirectores = transaction.objectStore(DB_DIRECTORES);

    var req = tablaDirectores.add(director.getObject());

    req.onsuccess = function (event) {
        console.log("Director añadido.");
    };

    req.onerror = function (event) {
        console.log("El director no se ha podido añadir.");
    };
}

function borrarDirectorIndexDB(director) {
    var request = db.transaction([DB_DIRECTORES], "readwrite").objectStore(DB_DIRECTORES).delete(director.name);

    request.onsuccess = function (event) {
        console.log("Director borrado.");
    };

    request.onerror = function (event) {
        console.log("El director no se ha podido borrar.");
    };
}

function modificarDirectorIndexDB(director) {
    var objectStore = db.transaction([DB_DIRECTORES], "readwrite").objectStore(DB_DIRECTORES);

    var request = objectStore.get(director.name);

    request.onsuccess = function (event) {
        var data = request.result;


        data = director.getObject();

        var producciones = data.producciones;

        data.producciones = [];

        for (var i = 0; i < producciones.length; i++) {
            data.producciones.push(producciones[i].getObject());
        }

        var requestUpdate = objectStore.put(data);

        requestUpdate.onerror = function (event) {
            console.log("El director no se ha podido modificar.");
        };

        requestUpdate.onsuccess = function (event) {
            console.log("Director modificado.");
        };
    };
}



//ACTORES

function insertarActorIndexDB(actor) {

    var transaction = db.transaction([DB_ACTORES], "readwrite");

    transaction.onerror = function (event) {
        console.log("Error en transaction: " + event.target.error);
    };

    var tablaActores = transaction.objectStore(DB_ACTORES);

    var req = tablaActores.add(actor.getObject());

    req.onsuccess = function (event) {
        console.log("Actor añadido.");
    };

    req.onerror = function (event) {
        console.log("El actor no se ha podido añadir.");
    };
}


function borrarActorIndexDB(actor) {
    var request = db.transaction([DB_ACTORES], "readwrite").objectStore(DB_ACTORES).delete(actor.name);

    request.onsuccess = function (event) {
        console.log("Actor borrado.");
    };

    request.onerror = function (event) {
        console.log("El actor no se ha podido borrar.");
    };
}

//ASIGNAR

function asignarCategoriaProduccion(categoria, produccion) {
    var objectStore = db.transaction([DB_CATEGORIAS], "readwrite").objectStore(DB_CATEGORIAS);
    var request = objectStore.get(categoria.name);

    request.onsuccess = function (event) {
        var data = request.result;

        data.producciones.push(produccion.getObject());

        //data.producciones = produccion;

        var requestUpdate = objectStore.put(data);

        requestUpdate.onerror = function (event) {
            console.log("La producción no se ha podido asignar.");
        };

        requestUpdate.onsuccess = function (event) {
            console.log("Producción asignada a la categoría.");
        };
    };
}


function asignarDirectorProduccion(director, produccion) {
    var objectStore = db.transaction([DB_DIRECTORES], "readwrite").objectStore(DB_DIRECTORES);
    var request = objectStore.get(director.name);

    request.onsuccess = function (event) {
        var data = request.result;

        data.producciones.push(produccion.getObject());

        var requestUpdate = objectStore.put(data);

        requestUpdate.onerror = function (event) {
            console.log("La producción no se ha podido asignar.");
        };

        requestUpdate.onsuccess = function (event) {
            console.log("Producción asignada al director.");
        };
    };
}


//DESASIGNAR

function desasignarCategoriaProduccion(categoria, produccion) {
    var objectStore = db.transaction([DB_CATEGORIAS], "readwrite").objectStore(DB_CATEGORIAS);
    var request = objectStore.get(categoria.name);

    request.onsuccess = function (event) {
        var data = request.result;

        var lista = data.producciones;

        for (var i = 0; i < lista.length; i++) {


            if (lista[i].title == produccion.title) {
                lista.splice(i, 1);
            }
        }

        var requestUpdate = objectStore.put(data);

        requestUpdate.onerror = function (event) {
            console.log("La producción no se ha podido desasignar.");
        };

        requestUpdate.onsuccess = function (event) {
            console.log("Producción desasignada a la categoría.");
        };
    };
}

function desasignarDirectorProduccion(director, produccion) {
    var objectStore = db.transaction([DB_DIRECTORES], "readwrite").objectStore(DB_DIRECTORES);
    var request = objectStore.get(director.name);

    request.onsuccess = function (event) {
        var data = request.result;

        var lista = data.producciones;

        for (var i = 0; i < lista.length; i++) {


            if (lista[i].title == produccion.title) {
                lista.splice(i, 1);
            }
        }

        var requestUpdate = objectStore.put(data);

        requestUpdate.onerror = function (event) {
            console.log("La producción no se ha podido desasignar.");
        };

        requestUpdate.onsuccess = function (event) {
            console.log("Producción desasignada al director.");
        };
    };
}


