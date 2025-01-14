// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// await Promise(result) 는 result 값을 반환해 줍니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

async function fetchJson(url) {
  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchJson("https://jsonplaceholder.typicode.com/posts/1");
/*
  {
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  */
