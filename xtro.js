async function init1() {
  const video = document.getElementById('tv1');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'white',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '912760c409eb5aff3e060422c502f410': 'bea2d0f89fb3fbafa1fc9f34ba8734a6'
      }
    }
  });
  player.configure('manifest.dash.ignoreMinBufferTime', true);
  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load('https://linearjitp02-playback.astro.com.my/dash-wv/linear/711/default_primary.mpd');
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }
}




async function init2() {
  const video = document.getElementById('tv2');
  const ui = video['ui'];
  const config = {
    'seekBarColors': {
      base: 'blue',
      buffered: 'red',
      played: 'white',
    }
  };
  ui.configure(config);
  const controls = ui.getControls();
  const player = controls.getPlayer();
  player.configure({
    drm: {
      clearKeys: {
        '4f885481fe053e544096532c1dcb9710': '24a9b17859862887f28f63c7c29bcaa5'
      }
    }
  });
  player.configure('manifest.dash.ignoreMinBufferTime', true);
  player.configure('streaming.rebufferingGoal', 1 /* second */);
  window.player = player;
  window.ui = ui;

  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);
  try {
    await player.load('https://linearjitp02-playback.astro.com.my/dash-wv/linear/5027/default_primary.mpd');
    console.log('The video has now been loaded!');
    const audioTracks = player.getAudioLanguages();
    if (audioTracks.length >= 3) {
      player.selectAudioLanguage(audioTracks[2]);
    }
  } catch (error) {
    onPlayerError(error);
  }
}
