import { data, Foo as Foo2 } from "./foo.js"

console.log('--- main ---------------------');

function hoge() { console.log('hoge') }

document.getElementById('btn').addEventListener('click', _ => {
  Foo2();
  console.log(data);
  alert("クリックされました！ " + data);
});
