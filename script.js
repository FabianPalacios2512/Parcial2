document.addEventListener("DOMContentLoaded", () => {
    const serviciosData = [
        {
            nombre: "Set Colonia Aguas de Violeta Natura 150 ml",
            vendedor: "por naturas fabian",
            precioActual: "$54.900",
            precioAnterior: "$59.600",
            imagenSrc: "perfumes/1.webp",
        },
        {
            nombre: "Perfume Homem Cor.agio Natura 100 ml",
            vendedor: "por naturas fabian",
            precioActual: "$107.900",
            precioAnterior: "$133.000",
            imagenSrc: "perfumes/2.webp",
        },
        {
            nombre: "Perfume Horus Azul Marine Natura 100 ml",
            vendedor: "por naturas fabian",
            precioActual: "$49.900",
            precioAnterior: "$59.900",
            imagenSrc: "perfumes/3.webp",
        },
        {
            nombre: "Perfume mini Kaiak Vital Masculino 25 ml",
            vendedor: "por naturas fabian",
            precioActual: "$24.900",
            precioAnterior: "$34.600",
            imagenSrc: "perfumes/4.webp",
        },
        {
            nombre: "Colonia Urbano Nox de Natura 100 ml",
            vendedor: "Por naturas fabian",
            precioActual: "$69.900",
            precioAnterior: "$89.900",
            imagenSrc: "perfumes/6.webp",
        },
        {
            nombre: "Perfume Homem Tato Natura 100 ml",
            vendedor: "por naturas fabian",
            precioActual: "$109.900",
            precioAnterior: "$133.000",
            imagenSrc: "perfumes/7.webp",
        },
        {
            nombre: "Perfume Homem Dom 100 ml de Natura",
            vendedor: "Por naturas fabian",
            precioActual: "$99.900",
            precioAnterior: "$133.300",
            imagenSrc: "perfumes/8.webp",
        },
        {
            nombre: "Set Perfume Kaiak K de Natura 100 ml",
            vendedor: "por naturas fabian",
            precioActual: "$139.900",
            precioAnterior: "$191.000",
            imagenSrc: "perfumes/9.webp",
        },
        {
            nombre: "Spray corporal deso Paz e Humor  100 ml",
            vendedor: "por naturas fabian",
            precioActual: "$22.900",
            precioAnterior: "$32.900",
            imagenSrc: "perfumes/10.webp",
        },
        // {
        //     nombre: "Perfume Homem Emocion.e 100...",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$124.900",
        //     precioAnterior: "$150.000",
        //     imagenSrc: "perfumes/11.webp",
        // },
        // {
        //     nombre: "Perfume Essencial Exclusivo Masculino",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$134.900",
        //     precioAnterior: "$214.900",
        //     imagenSrc: "perfumes/12.webp",
        // },
        // {
        //     nombre: "Set Perfume Humor Proprio Natura 75 ml",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$86.900",
        //     precioAnterior: "$99.900",
        //     imagenSrc: "perfumes/13.webp",
        // },
        // {
        //     nombre: "Perfume Kriska Drama Natura 100 mll",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$64.900",
        //     precioAnterior: "$89.900",
        //     imagenSrc: "perfumes/155.webp",
        // },
        // {
        //     nombre: "Splash Ciruela y Flor de Vainilla Tododia Natura..",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$40.900",
        //     precioAnterior: "$49.900",
        //     imagenSrc: "perfumes/166.webp",
        // },
        // {
        //     nombre: "Kaiak Vital Masculino Natura 100 ml",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$74.900",
        //     precioAnterior: "$89.900",
        //     imagenSrc: "perfumes/177.webp",
        // },
        // {
        //     nombre: "Set Colonia Paz e Humor Natura 75 ml",
        //     vendedor: "por naturas fabian",
        //     precioActual: "$89.900",
        //     precioAnterior: "$110.900",
        //     imagenSrc: "perfumes/188.webp",
        // },
        // Agrega los demás servicios de manera similar
    ];

    const serviciosContainer = document.getElementById("servicios");

    serviciosData.forEach((servicio) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = servicio.imagenSrc;
        img.alt = "";
        figure.appendChild(img);

        const contenido = document.createElement("div");
        contenido.classList.add("contenido");

        const titulo = document.createElement("h2");
        titulo.textContent = servicio.nombre;

        const vendedor = document.createElement("h4");
        vendedor.textContent = servicio.vendedor;

        const precioActual = document.createElement("h5");
        precioActual.textContent = servicio.precioActual;

        const precioAnterior = document.createElement("h6");
        precioAnterior.innerHTML = `<del>${servicio.precioAnterior}</del>`;

        const comprarLink = document.createElement("a");
        comprarLink.href = "#";
        comprarLink.textContent = "comprar";

        contenido.appendChild(titulo);
        contenido.appendChild(vendedor);
        contenido.appendChild(precioActual);
        contenido.appendChild(precioAnterior);
        contenido.appendChild(comprarLink);

        card.appendChild(figure);
        card.appendChild(contenido);

        serviciosContainer.appendChild(card);
    });

    // js para los colaboradores
    const colaboradoresData = [
        {
            nombre: "Fabian Andres Paternina Palacios",
            rol: "Diseñador web",
            contacto: "cotacto",
            telefono: "3134540533",
        },
        {
            nombre: "Javier Andres Paternina Palacios",
            rol: "Jefe de producción",
            contacto: "cotacto",
            telefono: "3134540533",
        },
        {
            nombre: "Maria Jose Gonzaleaz Berrio",
            rol: "Lider",
            contacto: "cotacto",
            telefono: "3234512271",
        },
        // {
        //     nombre: "Sebastian Alarcon Ortega",
        //     rol: "Supervisor",
        //     contacto: "cotacto",
        //     telefono: "323452399",
        // },
        // Puedes seguir agregando más colaboradores siguiendo el mismo formato.
    ];

    const colaboradoresContainer = document.getElementById("colaboradores");

    colaboradoresData.forEach((colaborador) => {
        const card = document.createElement("div");
        card.classList.add("card"); // Utiliza la misma clase "card" que en la sección de servicios.

        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = "image/usuario.png"; // Ruta de la imagen de colaborador.
        img.alt = "";
        figure.appendChild(img);

        const contenido = document.createElement("div");
        contenido.classList.add("contenido");

        const nombre = document.createElement("h2");
        nombre.textContent = colaborador.nombre;

        const rol = document.createElement("h4");
        rol.textContent = colaborador.rol;

        const contacto = document.createElement("h5");
        contacto.textContent = colaborador.contacto;

        const telefono = document.createElement("h6");
        telefono.textContent = colaborador.telefono;

        contenido.appendChild(nombre);
        contenido.appendChild(rol);
        contenido.appendChild(contacto);
        contenido.appendChild(telefono);

        card.appendChild(figure);
        card.appendChild(contenido);

        colaboradoresContainer.appendChild(card);
    });
    
   
});


