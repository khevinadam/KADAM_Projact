var Formcari = document.getElementById('Formcari')
    Formcari.addEventListener('submit',function(a){
        a.preventDefault()

        var country = document.getElementById('country').value 
            var url = "https://api.covid19api.com/total/dayone/country/"+country

            fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                var length = res.length
                
                var index = length - 1
                var index1 = length - 2
                var active = document.getElementById('active')
                var activehariini = document.getElementById('activehariini')
                var confirmed = document.getElementById('confirmed')
                var confirmedhariini = document.getElementById('confirmedhariini')
                var deaths = document.getElementById('deaths')
                var deathshariini = document.getElementById('deathshariini')
                var negara = document.getElementById('negara')

                var confirmedhariini1 = (res[index].Confirmed) - (res[index1].Confirmed)
                var activehariini1 = (res[index].Active) - (res[index1].Active)
                var deathshariini1 = (res[index].Deaths) - (res[index1].Deaths)

                confirmed.innerHTML = ''
                active.innerHTML = ''
                deaths.innerHTML = ''
                confirmedhariini.innerHTML = ''
                activehariini.innerHTML = ''
                deathshariini.innerHTML = ''
                negara.innerHTML = ''

                
                confirmed.append(res[index].Confirmed)
                active.append(res[index].Active)
                deaths.append(res[index].Deaths)
                negara.append(res[index].Country)

                confirmedhariini.append(confirmedhariini1)
                activehariini.append(activehariini1)
                deathshariini.append(deathshariini1)

            })
    })