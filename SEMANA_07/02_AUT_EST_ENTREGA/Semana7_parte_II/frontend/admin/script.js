api = 'http://127.0.0.1:3071'

$(document).ready(() => {
    Pessoa.list();
});

var Pessoa = {
    
    list() {
        $.ajax({
            url: api + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="Pessoa.insert()">Inserir</div>';
                data.forEach(element => {
                    tx += '<div class="Pessoa">';
                        tx += '<div class="title">' + `${element.Nome} - ${element.Foto} ` + '</div>';
                        tx += '<div class="actions">';
                            tx += '<div class="action" onclick="Pessoa.update(' + element.Id_Pessoa + ',\'' + element.Nome + '\')">Editar</div>';
                            tx += '<div class="action" onclick="Pessoa.delete(' + element.Id_Pessoa + ')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
};

var Pessoa = {

    insert() {
        var Nome = prompt('Digite o nome:');
        var Foto = prompt('Insira o link de sua foto:');
        console.log(`${Nome} - ${Foto}`);
        if (Nome && Foto) {
            if (Nome.trim() != '' && Foto.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userinsert',
                    data: {Nome: Nome, Foto: Foto},
                }).done(function () {
                    users.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },


    update(Id_Pessoa, oldTitle) {

        var Nome = prompt('Digite o novo nome:', oldTitle);
        if (Nome) {
            if (Nome.trim() != '') {
                $.ajax({
                    type: 'POST',
                    url: api + '/userupdate',
                    data: {Nome: Nome, Id_Pessoa: Id_Pessoa},
                }).done(function () {
                    Pessoa.list();
                }).fail(function (msg) {
                    //console.log('FAIL');
                }).always(function (msg) {
                    //console.log('ALWAYS');
                });
            }
        }
    },

    delete(Id_Pessoa) {

        if (confirm('Confirma a exclusão?')) {
            $.ajax({
                type: 'POST',
                url: api + '/userdelete',
                data: {Id_Pessoa: Id_Pessoa},
            }).done(function () {
                Pessoa.list();
            }).fail(function (msg) {
                //console.log('FAIL');
            }).always(function (msg) {
                //console.log('ALWAYS');
            });
        }
    },

}