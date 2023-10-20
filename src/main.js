const addRuffle = (iframe) => {
  setTimeout(() => {
    const script = document.createElement('script');
    script.src = `/assets/ruffle.js`;
    script.defer = true;

    iframe.contentDocument.childNodes[0].append(script);
  }, 100);
};

const baseUrl = '/app/matf/0ks/cim.htm';

window.onload = () => {
  try {
    const iframe = document.querySelector('#iframe');
    //iframe.src = baseUrl;

    const backButton = document.querySelector('#backBtn');
    const forwardButton = document.querySelector('#forwardBtn');
    const refreshButton = document.querySelector('#refreshBtn');

    const refresh = () => {
      iframe.contentWindow.location.reload();
      addRuffle(iframe);
    };

    backButton.onclick = () => {
      iframe.contentWindow.history.back();
      addRuffle(iframe);
    };
    forwardButton.onclick = () => {
      iframe.contentWindow.history.forward();
      addRuffle(iframe);
    };
    refreshButton.onclick = () => {
      refresh();
    };
    /*const fullScreenBtn = document.querySelector('#fullScreenBtn');
     fullScreenBtn.onclick = () => {
      document.querySelector('.container').requestFullscreen();
    }; */

    iframe.onload = () => {
      addRuffle(iframe);
    };
  } catch (err) {
    alert(err);
    console.error(err);
    //location.reload();
  }
};
