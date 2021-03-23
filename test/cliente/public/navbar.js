window.onload = function() {

    //Ajustes del navar
    const showNavbar = (toggleId, navId, bodyId, headerId, divId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        const bodypd = document.getElementById(bodyId);
        const headerpd = document.getElementById(headerId);
        const div = document.getElementById(divId);

        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('bx-x');
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
                div.classList.toggle('div-productos');
            });
        };
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'productos-container');
    const linkColor = document.querySelectorAll('.nav__link');

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        };
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink));


    //Agregar articulos al carrito
    const btnAdd = document.getElementById('add');
    if (btnAdd){
        btnAdd.addEventListener('click', () => {
            const referencia = document.getElementById('referencia').innerHTML;
            const nombre = document.getElementById('nombre').innerHTML;
            const precio = document.getElementById('precio').innerHTML;
            const cantidad = document.getElementById('value').value;
    
            const producto = [{ referencia: referencia, nombre: nombre, precio: precio, cantidad: cantidad }];
    
            if (localStorage.getItem('producto') === null) {
                let productos = [];
                productos.push(producto);
                localStorage.setItem('producto', JSON.stringify(productos));
            } else {
                let productos = JSON.parse(localStorage.getItem('producto'));
                productos.push(producto);
                localStorage.setItem('producto', JSON.stringify(productos));
            }
           
        });
    };

    //Eliminar articulos del carrito.
    const btnDelete = document.getElementById('delete');
    if (btnDelete){
        btnDelete.addEventListener('click', (e) => {
            let producto = JSON.parse(localStorage.getItem('producto'));       
            const referencia = e.target.id.split('_')[1];
            
	        for (let i = 0; i < producto.length; i++){
                console.log(producto[i])            
                if (producto[i][0].referencia === referencia){
                    producto.splice(i,1);
                    window.location.reload();                
                    break;
                }
	        };        
        localStorage.setItem('producto', JSON.stringify(producto));
        //getProduct();
        //printTotal(getTotal());
        })
    };      
};

  