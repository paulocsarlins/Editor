window.onload = function() {
                var elementBody = document.querySelector('body');
                var elementBtnAumentarFonte = document.getElementById('aumentar-fonte');
                var elementBtnDiminuirFonte = document.getElementById('diminuir-fonte');
                // Padrão de tamanho, equivale a 100% do valor definido no Body
                var fontSize = 100;
                // Valor de incremento ou decremento, equivale a 10% do valor do Body
                var aumentarDiminuir = 10;

                // Evento de click para aumentar a fonte
                elementBtnAumentarFonte.addEventListener('click', function(event) {
                    fontSize = fontSize + aumentarDiminuir;
                    elementBody.style.fontSize = fontSize + '%';
                });

                // Evento de click para diminuir a fonte
                elementBtnDiminuirFonte.addEventListener('click', function(event) {
                    fontSize = fontSize - aumentarDiminuir;
                    elementBody.style.fontSize = fontSize + '%';
                });
            }