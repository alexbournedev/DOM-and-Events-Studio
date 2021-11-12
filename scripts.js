window.addEventListener('load', function domEvents(){
  const takeoff = document.getElementById('takeoff');
  const flightStatus = document.getElementById('flightStatus');
  const shuttleBg = document.getElementById('shuttleBackground');
  const shuttleHeight = document.getElementById('spaceShuttleHeight');
  const land = document.getElementById('landing');
  const abort = document.getElementById('missionAbort');
  const up = document.getElementById('up');
  const down = document.getElementById('down');
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const rocket = document.getElementById('rocket');
	const fuel = document.getElementById('fuel');
  rocket.style.position = 'absolute';
  rocket.style.left = '0px';
  rocket.style.top = '0px';


  takeoff.addEventListener('click', function(){
    let confirmation = confirm('Confirm that the shuttle is ready for takeoff.');
    if (confirmation === true){
      flightStatus.innerHTML = 'Shuttle in flight.'
      shuttleBg.style.backgroundColor = 'blue';
      shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
			fuel.innerHTML = 'Tank Full';
    }
  });

  land.addEventListener('click', function(){
    let popup = alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = 'The shuttle has landed.';
    shuttleBg.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = 0;
		fuel.innerHTML = '60% left!';
  });

  abort.addEventListener('click', function(){
    let confirmation = confirm('Confirm that you want to abort the mission.');
    if (confirmation === true){
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBg.style.backgroundColor = 'green';
      shuttleHeight.innerHTML = 0;
    }
  });
  right.addEventListener('click', function(){
  	let movement = `${parseInt(rocket.style.left) + 10}px`;
		rocket.style.left = movement;
  });
	left.addEventListener('click', function(){
  	let movement = `${parseInt(rocket.style.left) - 10}px`;
		rocket.style.left = movement;
  });
	up.addEventListener('click', function(){
  	let movement = `${parseInt(rocket.style.top) - 10}px`;
		rocket.style.top = movement;
		shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
  });
	down.addEventListener('click', function(){
  	let movement = `${parseInt(rocket.style.top) + 10}px`;
		rocket.style.top = movement;
		shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
  });

})