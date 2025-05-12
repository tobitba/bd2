db.bandas.insertOne({
    nombre : "VER K BITCH",
    genero: "INSTRUMENTAL",
    FECHA_INSCRIPCION: ISODate("2018-01-20"),
    discos : [ {
        nombre: "DIOS AGUJERO NEGRO",
        publicacion: 2008
        } , {
        nombre: "APICHONADOS",
        publicacion: 2007
        }, {
        nombre: "CASUALIDADES",
        publicacion: 2005
        } , {
        nombre: "PLANETA ESMERALDA",
        publicacion: 2001
        } ],
    barrio : "VERSALLES",
    integrantes: 1
    });

    //db.bandas.find({'discos.publicacion' : 2001},{discos : 1})
    db.bandas.insertMany([
        {
            nombre: "TROTAMUNDOS",
            genero: "INDIE",
            FECHA_INSCRIPCION: ISODate("2017-11-30"),
            discos: [
                { nombre: "HECHO BOLITA", publicacion: 2014 }
                ],
            barrio: "VILLA LURO",
            integrantes: 4
            },
        {
            nombre: "EFECTO ALFONS",
            genero: "ROCK",
            estilo: "POWER TRIO",
            FECHA_INSCRIPCION: ISODate("2017-11-27"),
            discos: [
                { nombre: "EFECTO ALFONS", publicacion: 2000 }
                ],
            barrio: "BARRACAS",
            integrantes: 3
            },
        {
            nombre: "MARCELO GIULLITTI",
            genero: "SOLISTA",
            FECHA_INSCRIPCION: ISODate("2017-11-26"),
            barrio: "AGRONOMIA",
            integrantes: 1
            },
        {
            nombre: "AFTERLIFE",
            genero: "ROCK",
            estilo: "ROCK ALTERNATIVO",
            FECHA_INSCRIPCION: ISODate("2017-11-14"),
            barrio: "BALVANERA",
            integrantes: 5
            },
        {
            nombre: "VIRGINIA FERREYRA",
            genero: "ROCK",
            estilo: "ROCK POP",
            FECHA_INSCRIPCION: ISODate("2017-11-14"),
            barrio: "VILLA DEL PARQUE",
            integrantes: 1
            },
        {
            nombre: "LMV",
            genero: "POP",
            FECHA_INSCRIPCION: ISODate("2017-11-10"),
            barrio: "LA LUCILA",
            integrantes: 6
            },
        {
            nombre: "EFECTO ALFONS",
            genero: "ROCK",
            estilo: "POWER TRIO",
            FECHA_INSCRIPCION: ISODate("2017-11-06"),
            discos: [
                { nombre: "EFECTO ALFONS", publicacion: 1995 }
                ],
            barrio: "BARRACAS",
            integrantes: 3
            },
        {
            nombre: "TANTAS PREGUNTAS",
            genero: "PUNK",
            estilo: "PUNK ROCK",
            FECHA_INSCRIPCION: ISODate("2017-10-27"),
            discos: [
                { nombre: "DESPUÉS DE TODO", publicacion: 2006 },
                { nombre: "LIBRE ALBEDRÍO", publicacion: 2006 }
                ],
            barrio: "MORENO",
            integrantes: 3
            },
        {
            nombre: "TAL VEZ DE PASO",
            genero: "POP",
            estilo: "POP ROCK",
            FECHA_INSCRIPCION: ISODate("2017-10-26"),
            barrio: "PUERTO MADERO",
            integrantes: 4
            },
        {
            nombre: "LA SURTIDA FOLCK",
            genero: "FOLKLORE",
            FECHA_INSCRIPCION: ISODate("2017-10-25"),
            barrio: "BERAZATEGUI",
            integrantes: 7
            },
        {
            nombre: "JAYDEE M",
            genero: "HIP HOP / RAP",
            FECHA_INSCRIPCION: ISODate("2017-10-24"),
            barrio: "BARRACAS",
            integrantes: 1
            }
        ]);

    //EJ 2
    db.bandas.find({},{nombre:1 , _id:0}).sort({integrantes: 1})

    //EJ 3
    db.bandas.find({},{nombre:1 , _id:0}).sort({integrantes: -1}).limit(2)

    //EJ 4
    db.bandas.updateMany({/*todos los docs*/},{$inc:{integrantes: 1}})

    //EJ 5
    db.bandas.find({genero: 'ROCK'}, {_id:0, nombre:1})
    db.bandas.find({estilo: {$or:[ {$regex : 'ROCK$'}, {$regex : '^ROCK'}]}}, {_id:0, nombre:1})
    db.bandas.find({estilo: /ROCK/i}, {_id:0, nombre:1})  // la i es para case insen. y las barras es para buscar adentro de un string
    //EJ 6
    db.bandas.find({"discos.publicacion": 2006},{_id:0,nombre:1})

    //EJ 7
    db.bandas.find({barrio: "BARRACAS"}).count()

    //
    db.bandas.updateOne({nombre: "JAYDEE M"}, {$set: {genero: ["HIP HOP"]}})
    db.bandas.updateOne({nombre: "JAYDEE M"}, {$push:{genero:"RAP"}})

    db.bandas.find({nombre: "JAYDEE M"})
