function ElemAnimation(){
    const elem = document.getElementsByClassName('js-animation');
    if(!elem) return;

    let showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;

    for(let i=0;i<elem.length;i++) { let elemClientRect = elem[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        elem[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        elem[i].classList.remove('is-show');
      }
    }
  }

  ElemAnimation();
  window.addEventListener('scroll', ElemAnimation);