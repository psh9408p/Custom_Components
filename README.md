
# 🚀  실행방법
  ```1. 로컬패키지 설치 : npm i ```
  
  ```2. 시작 : npm start```
  
  # 1. Toggle
  ![Feb-15-2022 10-21-46](https://user-images.githubusercontent.com/39754252/153974676-38e4d703-f167-40cf-af80-d4766a297da5.gif)
  - 구현한 방법과 이유에 대한 간략한 내용
    - useState 를 사용하여 클릭시 true false 상태를 전환하는 이벤트 구현
  - 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
    - 스위치버튼에 animation 효과구현이 힘들었지만, transition 과 animation 설정을하여 해결
  
    
  # 2. Modal
  ![Feb-15-2022 10-26-31](https://user-images.githubusercontent.com/39754252/153975084-e5516c68-752c-4301-9b04-5a94daf7c252.gif)
  - 구현한 방법과 이유에 대한 간략한 내용
    - react portal 을 활용하여 구현. Modal은 전체페이지를 덮는 오버레이이기 떄문에 상위계층에 두는것을 목적으로 createPortal을 활용하여 app.js 를 렌더링하는 root 가 아닌 모달용 root 를 만들어주어    app.js 상위요소에 오버레이가 될수있게 구현하였다.
  - 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
    - 모달을 열고 외부요소가 투명하게 보이는게 목적이였는데 background가 덮이는 현상이있어 opacity값을 주어 투명하게 보이도록 하였다.
    
  # 3. Tab
  ![Feb-15-2022 10-28-23](https://user-images.githubusercontent.com/39754252/153976474-1a30172e-547a-45bd-8ced-6ae7edea15e2.gif)
  - 구현한 방법과 이유에 대한 간략한 내용
    - useState 를 활용해 각 Tab에 이벤트를 걸어주어 state에 맞는 내용을 띄어주웠다.
  - 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
    - 배열을 만들어서 map을 돌려 만들수도 있었지만 그럴만한 이유가 없을거 같아서 라이브러리를 쓰지않는 가정하에 가장 빠르고 간결하게 만들 수 있는 방법을 선택.
  # 4. AutoComplete
  ![Feb-15-2022 10-29-42](https://user-images.githubusercontent.com/39754252/153976477-7f150bb0-d34f-4818-8eb5-585c2bcab7a3.gif)
  - 구현한 방법과 이유에 대한 간략한 내용
    - html 태그인 datalist 를 활용하였다. option 데이터는 더미데이터를 만들어 map을 활용하여 넣어줬다.
  - 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
    - js로 기능을 직접 구현하는 방법과 datalist 태그를 쓰는것에 고민이 있었지만 html에 이미 구현된 기능을 사용하는것이 가장빠르고 비용적으로도 좋고 쓰지않을 이유가 없었다.

    
  # 5. Tag
  ![Feb-15-2022 10-30-26](https://user-images.githubusercontent.com/39754252/153976478-f26e4c82-11c7-4bb2-9565-dfea82d7f6e8.gif)
  - 구현한 방법과 이유에 대한 간략한 내용
    - input 에서 keypress 이벤트를 통해 useState에 만든 배열에 value 를 넣어주어 map 으로 뿌려주었다.
  - 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
  ```
    const addTagName = (e) => {
    if (e.key === "Enter" && e.target.value.length >= 1) {
      const tagText = e.target.value;
      setTagArray((prevState) => [...prevState, tagText]);
      e.target.value = "";
    }
  };
  ```
     태그를 기존배열에 넣어줄때 기존배열의 에러가 생기지않도록 prevState를 활용해여 기존값을 새로 업데이트 해주었다.

  # 6. ClickToEdit
  ![Feb-15-2022 10-39-16](https://user-images.githubusercontent.com/39754252/153976479-0d275066-0f8b-47e4-8c31-d20efa675e29.gif)

  - 구현한 방법과 이유에 대한 간략한 내용
   - useState 를 활용하여 input value 를 관리하여 구현하였다.
   - 기본 <p> 화면에서 doubleClick 이벤트를 주어 input창을 활성화 시키도록 하였다.
  - 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)
    - 결과값이 실시간으로 바뀌는 문제가 있었는데 input창이 비활성화시 적용되는 onblur를 활용하여 해결하였다.


    
