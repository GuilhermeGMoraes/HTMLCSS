
        function validaDados() {
            let vnome = document.getElementById('nome')
            if (vnome.value == '') {
                alert('Informe nome')
                vnome.focus()
                return
            }

            let vemail = document.getElementById('email')
            if (vemail.value == '') {
                alert('Informe email')
                vemail.focus()
                return
            }

            let ec = document.getElementsByName('ec')
            /*alert(ec[0].checked)
            alert(ec[1].checked)*/
            if (ec[0].checked != true && ec[1].checked != true) {
                alert('Informe seu pacote')
                return
            }

            let pref = document.getElementsByName('preferencia')
            //alert(pref.length)
            let opcoes = ''
            for (let i = 0; i < pref.length; i++) {
                if (pref[i].checked) {
                    opcoes = opcoes + ' - ' + pref[i].value
                }
                
            }
            alert('Dados salvo com sucesso')
        }
