// do something!
const StarRating = $container => {

  const $main_color = '#dcdcdc';
  const $hovered_color = '#a7a7a7';
  const $selected_color = '#db5b33';
  const get = (target) => {
    return document.querySelector(target);
  };
  const starCount = $container.dataset.maxRating; //별 개수 : Number
  let starElement = null;

  // max-rating만큼 별 그리기
  for (let i = 0; i < starCount; i++) {
    starElement = document.createElement('i');
    starElement.classList.add('bx', 'bxs-star');
    starElement.style.color = $main_color;
    starElement.style.cursor = 'pointer';
    starElement.style.fontSize = '50px';
    starElement.setAttribute("data-length", i); // 별마다 data-length라는 속성의 속성값을 i로 설정
    $container.appendChild(starElement); // $container에 위에서 만들어준 starElement 요소를 붙인다.
  }

  // hoverStar : hover한 별이 몇번째인지 가져오기
  for (let j = 0; j < starCount; j++) {

    $container.children[j].addEventListener('mouseover', function () { // 0, 1, 2, 3, 4, 5번째 별에 hover하면
      let hoverStar = this.dataset.length; // hover한 별이 몇번째인지 hoverStar에 담기

      for (let i = 0; i < starCount; i++) {
        if ($container.children[i].style.color !== 'rgb(219, 91, 51)') {
          if (i <= hoverStar) {
            $container.children[i].style.color = $hovered_color;
          } else {
            $container.children[i].style.color = $main_color;
          }
        }

      }


      // 별 클릭하면 주황색 적용하기
      $container.children[j].addEventListener('click', function () {

        for (let i = 0; i < starCount; i++) {
          if (hoverStar >= i) {
            $container.children[i].style.color = $selected_color;
          } else {
            $container.children[i].style.color = $main_color;
          }
        }
        // 클릭했을때 current rating 변경
        const $currentRatings = this.parentNode.nextSibling.nextElementSibling.querySelector('span');
        $currentRatings.innerHTML = Number(hoverStar) + 1;
      })
    })

    // (주황색 아닐때) 마우스 떼면 회색으로 돌아가기 
    $container.children[j].addEventListener('mouseout', function () {
      for (let i = 0; i < starCount; i++) {
        if ($container.children[i].style.color !== 'rgb(219, 91, 51)') {
          $container.children[i].style.color = $main_color;
        }
      }
    })

  }

};

export default StarRating;