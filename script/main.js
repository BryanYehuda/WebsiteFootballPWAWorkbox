let dataPertandingan;
var dataTim;

var elKlasemen = () => {
  showLoader();

  if('caches' in window){
      caches.match(urlKlasemen)
      .then(respon=>{
        if(respon){
          console.log('get data in cache')
          respon.json().then(data =>{
                var str = JSON.stringify(data).replace(/http:/g, 'https:');
                data = JSON.parse(str);
                
                var html = '<div class="col l12 s12 center-align"><h2>Standings Right Now</h2></div>'
                var detail = ''
                data.standings[0].table.forEach(dataTim => {
                    detail += `<tr>
                        <td>${dataTim.position}</td>
                        <td><img class="responsive-img" width="30" height="30" src="${ dataTim.team.crestUrl}" alt="Team Logo"></td>
                        <td>${dataTim.team.name}</td>
                        <td>${dataTim.playedGames}</td>
                        <td>${dataTim.won}</td>
                        <td>${dataTim.draw}</td>
                        <td>${dataTim.lost}</td>
                        <td>${dataTim.goalsFor}</td>
                        <td>${dataTim.goalsAgainst}</td>
                        <td>${dataTim.goalDifference}</td>
                        <td>${dataTim.points}</td>
                      </tr>`
                  })

                  html += `
                    <div class="col s12 m12">
                      <div class="card">
                        <div class="card-content">
                          <table class="responsive-table highlight centered">
                            <thead>
                              <tr>
                                <th>Position</th>
                                <th>Team Logo</th>
                                <th>Team Name</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Draw</th>
                                <th>Lost</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                              </tr>
                            </thead>
                            <tbody>` + detail + `</tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  `
                let doc = document.getElementById('main-content');
                doc.innerHTML = html;
                hideLoader()
            })
        }
    })
  } 
    const standings = getKlasemen()
    standings.then(data => {
      const str = JSON.stringify(data).replace(/http:/g, 'https:');
      data = JSON.parse(str);
      console.log(data)

      var html = '<div class="col l12 s12 center-align"><h2>Standings Right Now</h2></div>'
      data.standings.forEach(klass => {
        var detail = ''
        klass.table.forEach(dataTim => {
          detail += `<tr>
              <td>${dataTim.position}</td>
              <td><img class="responsive-img" width="30" height="30" src="${ dataTim.team.crestUrl}" alt="Team Logo"></td>
              <td>${dataTim.team.name}</td>
              <td>${dataTim.playedGames}</td>
              <td>${dataTim.won}</td>
              <td>${dataTim.draw}</td>
              <td>${dataTim.lost}</td>
              <td>${dataTim.goalsFor}</td>
              <td>${dataTim.goalsAgainst}</td>
              <td>${dataTim.goalDifference}</td>
              <td>${dataTim.points}</td>
            </tr>`
        })

        html += `
          <div class="col s12 m12">
            <div class="card">
              <div class="card-content">
                <table class="responsive-table highlight centered">
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Team Logo</th>
                      <th>Team Name</th>
                      <th>Played</th>
                      <th>Won</th>
                      <th>Draw</th>
                      <th>Lost</th>
                      <th>GF</th>
                      <th>GA</th>
                      <th>GD</th>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>` + detail + `</tbody>
                </table>
              </div>
            </div>
          </div>
        `
      });
      let doc = document.getElementById('main-content');
      doc.innerHTML = html;
      hideLoader()
    })
}

var elTim = () => {
  showLoader();
  
  if('caches' in window){
      caches.match(urlTim)
      .then(respon=>{
        if(respon){
          console.log('get data in cache')
          respon.json().then(data =>{
                var str = JSON.stringify(data).replace(/http:/g, 'https:');
                data = JSON.parse(str);
    
				var html = '<div class="col l12 s12 center-align"><h2>Teams Available</h2></div>'
				html += '<div class="row">'
				data.teams.forEach(tim => {
                  const strTeam = JSON.stringify(tim)
                  html += `
                  <div class="col s12 m6 l6">
                    <div class="card">
                      <div class="card-content">
                        <div class="center"><img width="64" height="64" src="${tim.crestUrl}" alt="Team Logo"></div>
                        <div class="center flow-text">${tim.name}</div>
                        <div class="center">${tim.area.name}</div>
                      </div>
                      <div class="card-action right-align">
                        <a class="waves-effect waves-light btn-small indigo darken-4" onclick='insertTeamListener(${strTeam})'>Add to Favorites</a>
                      </div>
                    </div>
                  </div>
				`
				})
				html += "</div>"
				let doc = document.getElementById('main-content');
				doc.innerHTML = html;
				hideLoader()
			})
		}
	})
  } 
	const teams = getTim()
    teams.then(data => {
      const str = JSON.stringify(data).replace(/http:/g, 'https:');
      data = JSON.parse(str);
      console.log(data)
	  
	  var html = '<div class="col l12 s12 center-align"><h2>Teams Available</h2></div>'
      html += '<div class="row">'
      data.teams.forEach(tim => {
        const strTeam = JSON.stringify(tim)
		html += `
		<div class="col s12 m6 l6">
		  <div class="card">
		    <div class="card-content">
		      <div class="center"><img width="64" height="64" src="${tim.crestUrl}" alt="Team Logo"></div>
		      <div class="center flow-text">${tim.name}</div>
		      <div class="center">${tim.area.name}</div>
		    </div>
		    <div class="card-action right-align">
				<a class="waves-effect waves-light btn-small indigo darken-4" onclick='insertTeamListener(${strTeam})'>Add to Favorites</a>
		    </div>
		  </div>
		</div>
      `
      })
      html += "</div>"
      let doc = document.getElementById('main-content');
      doc.innerHTML = html;
      hideLoader()
    })
}

var elTimFavorit = () => {
  showLoader()
  var teams = getTimfav()

  teams.then(data => {
    dataTim = data;
    var html = '<div class="col l12 s12 center-align"><h2>My Favorite Teams</h2></div>'
    html += '<div class="row">'
    data.forEach(tim => {
      html += `
      <div class="col s12 m6 l6">
        <div class="card">
          <div class="card-content">
            <div class="center"><img width="64" height="64" src="${tim.crestUrl}" alt="Team Logo"></div>
            <div class="center flow-text">${tim.name}</div>
            <div class="center">${tim.area.name}</div>
          </div>
          <div class="card-action right-align">
              <a class="waves-effect waves-light btn-small red" onclick="deleteTeamListener(${tim.id})">Delete</a>
          </div>
        </div>
      </div>
    `
    })

    if(data.length == 0) html += '<h6 class="You have not choose a favorite team yet!</6>'

    html += "</div>"
    let doc = document.getElementById('main-content');
    doc.innerHTML = html;
    hideLoader()
  })
}

const dbx = idb.open('football', 1, upgradeDb => {
  upgradeDb.createObjectStore('tim', { 'keyPath': 'id'
  })
});

var insertTeam = (tim) => {
  dbx.then(db => {
    var tx = db.transaction('tim', 'readwrite');
    var store = tx.objectStore('tim')
    tim.createdAt = new Date().getTime()
    store.put(tim)
    return tx.complete;
  }).then(() => {
    M.toast({ html: `${tim.name} is added to favorite!` })
    console.log('Match is added to favorite!');
  }).catch(err => {
    console.error('Match failed to be added to favorite', err);
  });
}

var deleteTeam = (idTim) => {
  dbx.then(db => {
    var tx = db.transaction('tim', 'readwrite');
    var store = tx.objectStore('tim');
    store.delete(idTim);
    return tx.complete;
  }).then(() => {
    M.toast({ html: 'This team has been deleted!' });
    elTimFavorit();
  }).catch(err => {
    console.error('Error: ', err);
  });
}

var getTimfav = () => {
  return dbx.then(db => {
    var tx = db.transaction('tim', 'readonly');
    var store = tx.objectStore('tim');
    return store.getAll();
  })
}

var insertTeamListener = tim => {
  insertTeam(tim);
}

var deleteTeamListener = idTim => {
  var c = confirm("Are you sure you want to delete this team?")
  if (c == true) {
    deleteTeam(idTim);
  }
}

var showLoader = () => {
  var html = `<div class="preloader-wrapper medium active">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
              </div>`
    let doc = document.getElementById('loader');          
    doc.innerHTML = html;
}

var hideLoader = () => {
  let doc = document.getElementById('loader');
  doc.innerHTML = '';
}

var groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var dateToDMY = date => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}
